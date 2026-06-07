import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Mail,
  Phone,
  MapPin,
  Loader2,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Globe,
  MessageSquare,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("messages");

  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: null,
    type: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchData = async () => {
      try {
        const resMsg = await fetch(
          "https://aura-hydration.onrender.com/api/admin/messages",
          {
            headers: { Authorization: token },
          },
        );
        const dataMsg = await resMsg.json();

        const resSub = await fetch(
          "https://aura-hydration.onrender.com/api/admin/newsletter",
          {
            headers: { Authorization: token },
          },
        );
        const dataSub = await resSub.json();

        if (dataMsg.success) {
          setMessages(dataMsg.messages);
        } else {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }

        if (dataSub.success) {
          setSubscribers(dataSub.subscribers);
        }
      } catch (err) {
        console.error("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const confirmDeleteAction = (id, type) => {
    setDeleteModal({ isOpen: true, id: id, type: type });
  };

  const executeDelete = async () => {
    const token = localStorage.getItem("adminToken");
    const { id, type } = deleteModal;

    setDeleteModal({ isOpen: false, id: null, type: "" });

    try {
      const endpoint =
        type === "message"
          ? `/api/admin/messages/${id}`
          : `/api/admin/newsletter/${id}`;

      const res = await fetch(
        `https://aura-hydration.onrender.com${endpoint}`,
        {
          method: "DELETE",
          headers: { Authorization: token },
        },
      );
      const data = await res.json();

      if (data.success) {
        if (type === "message") {
          setMessages(messages.filter((msg) => msg._id !== id));
          showToast("Message deleted successfully!", "success");
        } else {
          setSubscribers(subscribers.filter((sub) => sub._id !== id));
          showToast("Subscriber deleted successfully!", "success");
        }
      } else {
        showToast(data.message, "error");
      }
    } catch (err) {
      showToast(`Failed to delete ${type}.`, "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0310] flex items-center justify-center text-aura-gold">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0310] text-white p-4 md:p-8 relative">
      {/* Toast Notification */}
      <div
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-500 ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } ${toast.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}
      >
        <CheckCircle2 size={20} />
        <p className="font-medium text-sm text-center">{toast.message}</p>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-[#11071a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-500/20">
              <AlertTriangle className="text-red-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Delete {deleteModal.type === "message" ? "Message" : "Subscriber"}
              ?
            </h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              This action cannot be undone. Are you sure you want to permanently
              delete this {deleteModal.type}?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() =>
                  setDeleteModal({ isOpen: false, id: null, type: "" })
                }
                className="flex-1 px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                className="flex-1 px-5 py-3 rounded-xl bg-red-500/20 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Admin <span className="text-aura-gold">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage your website data securely
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => navigate("/")}
            className="flex-1 md:flex-none justify-center bg-aura-gold/10 border border-aura-gold/20 text-aura-gold px-4 py-2.5 rounded-xl hover:bg-aura-gold hover:text-black transition-all flex items-center gap-2 font-medium text-sm"
          >
            <Globe size={18} /> Website
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 md:flex-none justify-center bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-xl hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all flex items-center gap-2 font-medium text-sm"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Premium Tab Navigation */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-px">
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex items-center gap-2 px-4 py-3 font-medium transition-all border-b-2 text-sm md:text-base ${
            activeTab === "messages"
              ? "border-aura-gold text-aura-gold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <MessageSquare size={18} /> Inquiries
          <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs ml-1">
            {messages.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("subscribers")}
          className={`flex items-center gap-2 px-4 py-3 font-medium transition-all border-b-2 text-sm md:text-base ${
            activeTab === "subscribers"
              ? "border-aura-gold text-aura-gold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <Users size={18} /> Subscribers
          <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs ml-1">
            {subscribers.length}
          </span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {/* Tab 1: Messages View */}
        {activeTab === "messages" &&
          (messages.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center text-gray-400">
              No messages found. Inbox is clean!
            </div>
          ) : (
            <div className="grid gap-6">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-aura-gold/30 transition-all group relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="lg:w-1/3 space-y-3 pr-8">
                      <h3 className="text-xl font-bold text-aura-gold break-words">
                        {msg.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 text-sm break-all">
                        <Mail size={16} className="text-gray-500 shrink-0" />{" "}
                        {msg.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Phone size={16} className="text-gray-500 shrink-0" />{" "}
                        {msg.phone}
                      </div>
                      {msg.location && (
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <MapPin
                            size={16}
                            className="text-gray-500 shrink-0"
                          />{" "}
                          {msg.location}
                        </div>
                      )}
                      <div className="text-xs text-gray-500 pt-2">
                        {new Date(msg.createdAt).toLocaleString()}
                      </div>
                    </div>

                    <div className="lg:w-2/3 bg-black/40 rounded-xl p-4 md:p-5 border border-white/5 relative">
                      <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">
                        Message
                      </h4>
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => confirmDeleteAction(msg._id, "message")}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all"
                    title="Delete Message"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          ))}

        {/* Tab 2: Subscribers View - 100% INQUIRIES CARD COPY (NO SCROLL) */}
        {activeTab === "subscribers" &&
          (subscribers.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center text-gray-400">
              No subscribers yet.
            </div>
          ) : (
            <div className="grid gap-6">
              {subscribers.map((sub) => (
                <div
                  key={sub._id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-aura-gold/30 transition-all group relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-6 pr-8">
                    <div className="lg:w-1/2 space-y-3">
                      <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                        Subscriber Email
                      </h4>
                      <div className="flex items-center gap-2 text-aura-gold font-bold text-lg md:text-xl break-all">
                        <Mail size={20} className="text-gray-500 shrink-0" />{" "}
                        {sub.email}
                      </div>
                    </div>

                    <div className="lg:w-1/2 bg-black/40 rounded-xl p-4 border border-white/5 w-fit h-fit">
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                        Date Joined
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {new Date(sub.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => confirmDeleteAction(sub._id, "subscriber")}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all"
                    title="Delete Subscriber"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
