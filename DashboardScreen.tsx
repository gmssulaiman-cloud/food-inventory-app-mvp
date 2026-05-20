import { useNavigate } from "react-router";
import {
  Home,
  PackageSearch,
  Bell,
  Settings,
  ScanBarcode,
  Plus,
  Apple,
  AlertCircle,
  TrendingUp,
  Calendar,
  ShoppingCart,
} from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export default function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white mb-1">Good Morning!</h2>
            <p className="text-white/80">Welcome back</p>
          </div>
          <button
            onClick={() => navigate("/settings")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6">
        {/* Inventory Overview Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-[#7BA884]/10 rounded-xl flex items-center justify-center mb-3">
              <PackageSearch className="w-5 h-5 text-[#7BA884]" />
            </div>
            <p className="text-2xl text-[#3D3D3D] mb-1">42</p>
            <p className="text-sm text-[#8B8B8B]">Total Items</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-[#E88873]/10 rounded-xl flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5 text-[#E88873]" />
            </div>
            <p className="text-2xl text-[#3D3D3D] mb-1">5</p>
            <p className="text-sm text-[#8B8B8B]">Expiring Soon</p>
          </div>
        </div>

        {/* Expiry Alerts Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#3D3D3D]">Expiry Alerts</h3>
            <button
              onClick={() => navigate("/expiry-alerts")}
              className="text-[#7BA884] text-sm"
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate("/item/1")}
              className="w-full flex items-center gap-3 p-3 bg-[#FFF5F2] rounded-xl hover:bg-[#FFE8E3] transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Apple className="w-6 h-6 text-[#E88873]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#3D3D3D]">Organic Milk</p>
                <p className="text-sm text-[#E88873]">Expires Tomorrow</p>
              </div>
            </button>

            <button
              onClick={() => navigate("/item/2")}
              className="w-full flex items-center gap-3 p-3 bg-[#FFF9F0] rounded-xl hover:bg-[#FFF3E0] transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Apple className="w-6 h-6 text-[#D4A574]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#3D3D3D]">Fresh Eggs</p>
                <p className="text-sm text-[#D4A574]">Expires in 3 days</p>
              </div>
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-[#E8D5C4] to-[#F5EDE3] rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-[#7BA884]" />
            <h3 className="text-[#3D3D3D]">This Month</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl text-[#3D3D3D] mb-1">$127</p>
              <p className="text-sm text-[#8B8B8B]">Money Saved</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl text-[#3D3D3D]">8</p>
                <p className="text-sm text-[#8B8B8B]">kg</p>
              </div>
              <p className="text-sm text-[#8B8B8B]">Waste Prevented</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => navigate("/scanner")}
            className="bg-[#7BA884] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3"
          >
            <ScanBarcode className="w-8 h-8" />
            <span>Scan Barcode</span>
          </button>

          <button
            onClick={() => navigate("/add-item")}
            className="bg-white text-[#7BA884] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 border-2 border-[#7BA884]/20"
          >
            <Plus className="w-8 h-8" />
            <span>Add Item</span>
          </button>
        </div>

        {/* Grocery Planning Card */}
        <button
          onClick={() => navigate("/grocery-planning")}
          className="w-full bg-gradient-to-r from-[#E8D5C4] to-[#F5EDE3] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-[#7BA884]" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[#3D3D3D] mb-1">Grocery Planning</p>
            <p className="text-sm text-[#8B8B8B]">Plan your next shopping trip</p>
          </div>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8D5C4] px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#7BA884]" strokeWidth={2} />
            <span className="text-xs text-[#7BA884]">Home</span>
          </button>
          <button
            onClick={() => navigate("/pantry")}
            className="flex flex-col items-center gap-1"
          >
            <PackageSearch className="w-6 h-6 text-[#8B8B8B]" />
            <span className="text-xs text-[#8B8B8B]">Pantry</span>
          </button>
          <button
            onClick={() => navigate("/expiry-alerts")}
            className="flex flex-col items-center gap-1"
          >
            <Calendar className="w-6 h-6 text-[#8B8B8B]" />
            <span className="text-xs text-[#8B8B8B]">Alerts</span>
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="flex flex-col items-center gap-1"
          >
            <Settings className="w-6 h-6 text-[#8B8B8B]" />
            <span className="text-xs text-[#8B8B8B]">Settings</span>
          </button>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
