import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Package,
  Tag,
  Clock,
  Edit2,
  Trash2,
  Milk,
  Egg,
  Apple,
  Fish,
  Carrot,
  Beef,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";

export default function ItemDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const items = {
    "1": {
      name: "Organic Milk",
      icon: Milk,
      quantity: "1 liter",
      purchaseDate: "May 10, 2026",
      expiryDate: "May 15, 2026",
      category: "Dairy Products",
      expiryStatus: "Expires Tomorrow",
      color: "#7BA884",
      tip: "Store milk at the back of your refrigerator where the temperature is most consistent. Avoid storing in the door as temperature fluctuates when opening and closing.",
    },
    "2": {
      name: "Fresh Eggs",
      icon: Egg,
      quantity: "12 pieces",
      purchaseDate: "May 11, 2026",
      expiryDate: "May 17, 2026",
      category: "Dairy Products",
      expiryStatus: "Expires in 3 days",
      color: "#D4A574",
      tip: "Store eggs in their original carton on a shelf in the refrigerator, not in the door. This keeps them fresher longer.",
    },
    "3": {
      name: "Green Apples",
      icon: Apple,
      quantity: "6 pieces",
      purchaseDate: "May 9, 2026",
      expiryDate: "May 19, 2026",
      category: "Fruits",
      expiryStatus: "Expires in 5 days",
      color: "#7BA884",
      tip: "Store apples in the crisper drawer of your refrigerator. Keep them away from other produce as they release ethylene gas.",
    },
    "4": {
      name: "Salmon Fillet",
      icon: Fish,
      quantity: "500g",
      purchaseDate: "May 13, 2026",
      expiryDate: "May 16, 2026",
      category: "Seafood",
      expiryStatus: "Expires in 2 days",
      color: "#E88873",
      tip: "Keep fish on ice or in the coldest part of your fridge. Use within 1-2 days for best quality and safety.",
    },
    "5": {
      name: "Baby Carrots",
      icon: Carrot,
      quantity: "1 bag",
      purchaseDate: "May 7, 2026",
      expiryDate: "May 21, 2026",
      category: "Vegetables",
      expiryStatus: "Expires in 7 days",
      color: "#7BA884",
      tip: "Store carrots in a plastic bag in the crisper drawer. Keep them away from fruits that produce ethylene gas.",
    },
    "6": {
      name: "Ground Beef",
      icon: Beef,
      quantity: "1 kg",
      purchaseDate: "May 13, 2026",
      expiryDate: "May 15, 2026",
      category: "Meat",
      expiryStatus: "Expires in 1 day",
      color: "#E88873",
      tip: "Store ground beef in the coldest part of your refrigerator and use within 1-2 days. Freeze if not using immediately.",
    },
  };

  const item = items[id as keyof typeof items] || items["1"];
  const ItemIcon = item.icon;

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    toast.success("Item deleted successfully");
    setTimeout(() => {
      navigate("/pantry");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/pantry")}
            className="w-10 h-10 bg-[#F5F1ED] rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#3D3D3D]" />
          </button>
          <h2 className="text-[#3D3D3D]">Item Details</h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-[#7BA884]/10 to-[#A8C5A0]/10 rounded-3xl p-12 mb-6 flex flex-col items-center">
          <div className="w-40 h-40 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-4">
            <ItemIcon className="w-24 h-24" style={{ color: item.color }} />
          </div>
          <h2 className="text-[#3D3D3D] mb-2">{item.name}</h2>
          <div className="px-4 py-2 bg-[#E88873]/15 rounded-full">
            <p className="text-sm text-[#E88873]">{item.expiryStatus}</p>
          </div>
        </div>

        {/* Information Cards */}
        <div className="space-y-3 mb-8">
          {/* Quantity */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#7BA884]/10 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-[#7BA884]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#8B8B8B] mb-1">Quantity</p>
                <p className="text-[#3D3D3D]">{item.quantity}</p>
              </div>
            </div>
          </div>

          {/* Purchase Date */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E8D5C4]/50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#D4A574]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#8B8B8B] mb-1">Purchase Date</p>
                <p className="text-[#3D3D3D]">{item.purchaseDate}</p>
              </div>
            </div>
          </div>

          {/* Expiry Date */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E88873]/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#E88873]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#8B8B8B] mb-1">Expiry Date</p>
                <p className="text-[#3D3D3D]">{item.expiryDate}</p>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#A8C5A0]/20 rounded-xl flex items-center justify-center">
                <Tag className="w-6 h-6 text-[#7BA884]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#8B8B8B] mb-1">Category</p>
                <p className="text-[#3D3D3D]">{item.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-[#7BA884] text-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
            <Edit2 className="w-5 h-5" />
            <span>Edit</span>
          </button>

          <button
            onClick={handleDelete}
            className="bg-white text-[#E88873] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 border-2 border-[#E88873]/20"
          >
            <Trash2 className="w-5 h-5" />
            <span>Delete</span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-gradient-to-br from-[#E8D5C4]/30 to-[#F5EDE3]/30 rounded-2xl p-5">
          <h3 className="text-[#3D3D3D] mb-3">💡 Storage Tip</h3>
          <p className="text-sm text-[#8B8B8B]">{item.tip}</p>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#E88873]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-[#E88873]" />
              </div>
              <h3 className="text-[#3D3D3D] mb-2">Delete Item?</h3>
              <p className="text-sm text-[#8B8B8B]">
                Are you sure you want to delete "{item.name}"? This action
                cannot be undone.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="py-3 px-4 bg-[#F5F1ED] text-[#3D3D3D] rounded-xl hover:bg-[#E8D5C4] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="py-3 px-4 bg-[#E88873] text-white rounded-xl hover:bg-[#D47762] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
