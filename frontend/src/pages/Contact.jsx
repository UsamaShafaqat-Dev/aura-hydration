import { useState } from "react";
import {
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false });
  const [toast, setToast] = useState({ show: false, message: "", type: "" }); // Premium Notification

  // Custom Toast Function
  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      tempErrors.email = "Invalid email address";
    if (!/^\d{11}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be exactly 11 digits";
    // Location is optional, so no validation error for it
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true });
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false });
        showToast(
          "Message sent successfully! We will contact you soon.",
          "success",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        }); // Form clear
      } else {
        setStatus({ loading: false });
        showToast(data.message, "error"); // Database error (like duplicate entry)
      }
    } catch (err) {
      setStatus({ loading: false });
      showToast(
        "Server connection failed. Please check your backend.",
        "error",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-4 relative">
      {/* Premium Toast Notification (Top Center) */}
      <div
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-500 ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } ${toast.type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
      >
        {toast.type === "success" ? (
          <CheckCircle2 size={24} className="text-green-600" />
        ) : (
          <AlertCircle size={24} className="text-red-600" />
        )}
        <p className="font-semibold text-sm md:text-base">{toast.message}</p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
        {/* Dark Left Side */}
        <div className="lg:w-2/5 bg-[#0a0310] p-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-10">Contact Info</h2>
          <div className="space-y-8">
            {/* Head Office */}
            <div className="flex items-start gap-5">
              <MapPin className="text-aura-gold mt-1 shrink-0" size={28} />
              <div>
                <h4 className="font-semibold text-lg">Head Office</h4>
                <p className="text-gray-400 mt-1 leading-relaxed text-sm">
                  2/A, Mozang Chungi, Ferozpur Road, Lahore
                </p>
              </div>
            </div>

            {/* Regional Office */}
            <div className="flex items-start gap-5">
              <MapPin className="text-aura-gold mt-1 shrink-0" size={28} />
              <div>
                <h4 className="font-semibold text-lg">Regional Office</h4>
                <p className="text-gray-400 mt-1 leading-relaxed text-sm">
                  Near Challan Wala Pul, Opposite Sports Complex, Rahim Yar Khan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <Phone className="text-aura-gold mt-1 shrink-0" size={28} />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400 mt-1 text-sm">+92 300 0230128</p>
              </div>
            </div>
          </div>
        </div>

        {/* Light Right Side (Form) */}
        <div className="lg:w-3/5 p-10 md:p-14 bg-white">
          <h2 className="text-3xl font-bold text-[#0a0310] mb-8">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full p-4 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-gray-50 text-black placeholder-gray-400 outline-none focus:border-aura-gold focus:bg-white transition-all`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full p-4 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} bg-gray-50 text-black placeholder-gray-400 outline-none focus:border-aura-gold focus:bg-white transition-all`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (11 digits) *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full p-4 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-200"} bg-gray-50 text-black placeholder-gray-400 outline-none focus:border-aura-gold focus:bg-white transition-all`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Location (New Field Added) */}
            <div>
              <input
                type="text"
                name="location"
                placeholder="Location (City, Country)"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 text-black placeholder-gray-400 outline-none focus:border-aura-gold focus:bg-white transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                rows="4"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full p-4 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-200"} bg-gray-50 text-black placeholder-gray-400 outline-none focus:border-aura-gold focus:bg-white transition-all resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              disabled={status.loading}
              className="mt-2 w-full bg-[#0a0310] text-aura-gold p-4 rounded-xl font-bold text-lg hover:bg-aura-gold hover:text-black transition-all duration-300 shadow-lg"
            >
              {status.loading ? (
                <Loader2 className="animate-spin mx-auto" size={24} />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
