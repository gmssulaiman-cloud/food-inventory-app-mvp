import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Loader2 } from "lucide-react";
import logo from "../../../logo.png";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A8C5A0] to-[#7BA884] flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="w80- h-80 object-contain"
            />
          </div>
        </div>

        {/* Illustration */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <div className="w-10 h-10 bg-[#E8D5C4] rounded-lg"></div>
          </div>
          <div className="w-20 h-20 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-[#FAF8F5] rounded-xl"></div>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <div className="w-10 h-10 bg-[#D4A574] rounded-lg"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-white text-[#7BA884] py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/70 text-center mt-12 text-sm">
          Join thousands managing their pantry smarter
        </p>
      </div>
    </div>
  );
}