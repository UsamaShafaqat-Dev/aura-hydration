import { useState } from "react";
import { Lock, Mail, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
// Agar react-router-dom use kar rahe hain to useNavigate use karenge (dashboard pe le jane ke liye)
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();

      if (data.success) {
        // Token ko browser mein save karna (Security ka main hissa)
        localStorage.setItem("adminToken", data.token);
        setStatus({ loading: false, error: "" });

        // Login success hone par Dashboard par bhej do
        navigate("/admin/dashboard");
      } else {
        setStatus({ loading: false, error: data.message });
      }
    } catch (err) {
      setStatus({ loading: false, error: "Server connection failed." });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0310] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aura-gold/20 filter blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-aura-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-aura-gold/20">
            <ShieldCheck className="text-aura-gold" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Admin Portal</h2>
          <p className="text-gray-400 text-sm">
            Secure access to Aura Hydration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="text-gray-400" size={20} />
            </div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Admin Email"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 outline-none focus:border-aura-gold transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="text-gray-400" size={20} />
            </div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 outline-none focus:border-aura-gold transition-all"
            />
          </div>

          {/* Error Message */}
          {status.error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-sm font-medium">
              <AlertCircle size={18} /> {status.error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="mt-4 w-full bg-aura-gold text-black font-bold text-lg py-4 rounded-xl hover:bg-[#b5952f] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-70"
          >
            {status.loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              "Secure Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
