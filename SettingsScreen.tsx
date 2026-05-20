import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  User,
  Bell,
  Moon,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
  Mail,
  Shield,
} from "lucide-react";

export default function SettingsScreen() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-[#7BA884]" />
            </div>
            <div className="flex-1">
              <p className="text-white mb-1">
                Mirza Sulaiman Baig
              </p>
              <p className="text-white/80 text-sm">
                Sulaiman@email.com
              </p>
            </div>
            <button className="text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Preferences Section */}
        <div className="mb-6">
          <p className="text-sm text-[#8B8B8B] mb-3 px-2">
            PREFERENCES
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Notifications Toggle */}
            <div className="flex items-center justify-between p-4 border-b border-[#F5F1ED]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7BA884]/10 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#7BA884]" />
                </div>
                <div>
                  <p className="text-[#3D3D3D]">
                    Notifications
                  </p>
                  <p className="text-sm text-[#8B8B8B]">
                    Expiry alerts & reminders
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  notifications
                    ? "bg-[#7BA884]"
                    : "bg-[#D4C5B9]"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${
                    notifications
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between p-4 border-b border-[#F5F1ED]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8D5C4]/50 rounded-xl flex items-center justify-center">
                  <Moon className="w-5 h-5 text-[#D4A574]" />
                </div>
                <div>
                  <p className="text-[#3D3D3D]">Dark Mode</p>
                  <p className="text-sm text-[#8B8B8B]">
                    Toggle theme
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  darkMode ? "bg-[#7BA884]" : "bg-[#D4C5B9]"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#A8C5A0]/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#7BA884]" />
                </div>
                <div>
                  <p className="text-[#3D3D3D]">Language</p>
                  <p className="text-sm text-[#8B8B8B]">
                    English
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="mb-6">
          <p className="text-sm text-[#8B8B8B] mb-3 px-2">
            ACCOUNT
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Email */}
            <button className="w-full flex items-center justify-between p-4 border-b border-[#F5F1ED] hover:bg-[#FAF8F5] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E88873]/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#E88873]" />
                </div>
                <p className="text-[#3D3D3D]">
                  Email Preferences
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
            </button>

            {/* Privacy */}
            <button className="w-full flex items-center justify-between p-4 hover:bg-[#FAF8F5] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7BA884]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#7BA884]" />
                </div>
                <p className="text-[#3D3D3D]">
                  Privacy & Security
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-6">
          <p className="text-sm text-[#8B8B8B] mb-3 px-2">
            SUPPORT
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-[#FAF8F5] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4A574]/20 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#D4A574]" />
                </div>
                <p className="text-[#3D3D3D]">Help & Support</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-white text-[#E88873] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 border-2 border-[#E88873]/20"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>

        {/* Version */}
        <p className="text-center text-sm text-[#8B8B8B] mt-6">
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}