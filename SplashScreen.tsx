import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Leaf } from "lucide-react";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A8C5A0] to-[#7BA884] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-300"></div>

      {/* Logo with Animation */}
      <div className="relative mb-8 animate-bounce-slow">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <Leaf className="w-16 h-16 text-[#7BA884]" strokeWidth={2} />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#E88873] rounded-full opacity-80 animate-ping"></div>
      </div>

      {/* App Name */}
      <h1 className="text-white mb-3 text-center animate-fade-in">
        Food Inventory App
      </h1>

      {/* Tagline */}
      <p className="text-white/90 text-center mb-12 animate-fade-in-delay">
        Track Smart. Waste Less.
      </p>

      {/* Loading Indicator */}
      <div className="flex gap-2 animate-fade-in-delay-2">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
