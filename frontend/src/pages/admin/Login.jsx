import { useState } from "react";
import { Loader2, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      await login(formData);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);

      setError(
        error.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Lead<span className="text-[#FF6B00]">Flow</span>
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            Admin workspace
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#171717] p-8 shadow-2xl shadow-black/20">
          <div className="mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6B00] text-white">
              <LockKeyhole size={20} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-[#737373]">
              Sign in to manage your leads.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#A3A3A3]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#525252] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#A3A3A3]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#525252] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#FF7A1A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;