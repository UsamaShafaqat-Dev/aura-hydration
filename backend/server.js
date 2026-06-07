const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Contact = require("./models/Contact");
const Admin = require("./models/Admin"); // Naya Admin Model
const Newsletter = require("./models/Newsletter");

const app = express();
app.use(cors());
app.use(express.json());

// 🟢 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Atlas Connected Successfully!");

    // Auto-create Default Admin agar pehle se nahi hai
    const adminExists = await Admin.findOne({
      email: "admin@aurahydration.com",
    });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await Admin.create({
        email: "admin@aurahydration.com",
        password: hashedPassword,
      });
      console.log(
        "🔐 Default Admin Created! (Email: admin@aurahydration.com, Pass: admin123)",
      );
    }
  })
  .catch((err) => console.log("❌ Database Connection Failed:", err));

// ----------------------------------------------------
// 🌐 PUBLIC ROUTE: Contact Form Submit (Frontend se)
// ----------------------------------------------------
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, location, message } = req.body;

    const existing = await Contact.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "This contact has already sent a message!",
      });
    }

    const newContact = new Contact({ name, email, phone, location, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// ----------------------------------------------------
// 🔐 SECURE ROUTE 1: Admin Login
// ----------------------------------------------------
app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials!" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials!" });

    // JWT Token Generate Karna
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .json({ success: true, token, message: "Login successful!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error during login." });
  }
});

// ----------------------------------------------------
// 🛡️ MIDDLEWARE: Token Verification
// ----------------------------------------------------
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access Denied! No token provided." });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next(); // Token sahi hai to agay jane do
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Token!" });
  }
};

// ----------------------------------------------------
// 🔐 SECURE ROUTE 2: Get All Messages (Sirf Admin ke liye)
// ----------------------------------------------------
app.get("/api/admin/messages", verifyToken, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // Naye messages upar ayenge
    res.status(200).json({ success: true, messages });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch messages." });
  }
});

// ----------------------------------------------------
// 🗑️ SECURE ROUTE 3: Delete Message (Sirf Admin ke liye)
// ----------------------------------------------------
app.delete("/api/admin/messages/:id", verifyToken, async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Message deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete message." });
  }
});

// ----------------------------------------------------
// 📧 PUBLIC ROUTE: Newsletter Subscribe
// ----------------------------------------------------
app.post("/api/newsletter/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Email already subscribed!" });
    }
    const newSub = new Newsletter({ email });
    await newSub.save();
    res
      .status(201)
      .json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// ----------------------------------------------------
// 🔐 SECURE ROUTE 4: Get All Subscribers (Sirf Admin ke liye)
// ----------------------------------------------------
app.get("/api/admin/newsletter", verifyToken, async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, subscribers });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch subscribers." });
  }
});

// ----------------------------------------------------
// 🗑️ SECURE ROUTE 5: Delete Subscriber (Sirf Admin ke liye)
// ----------------------------------------------------
app.delete("/api/admin/newsletter/:id", verifyToken, async (req, res) => {
  try {
    const deletedSub = await Newsletter.findByIdAndDelete(req.params.id);
    if (!deletedSub) {
      return res
        .status(404)
        .json({ success: false, message: "Subscriber not found!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Subscriber deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete subscriber." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
