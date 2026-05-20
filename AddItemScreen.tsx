import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Camera,
  Apple,
  Beef,
  Milk,
  Wheat,
  Fish,
  Carrot,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

export default function AddItemScreen() {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const categories = [
    { id: "fruits", name: "Fruits", icon: Apple, color: "#E88873" },
    { id: "meat", name: "Meat", icon: Beef, color: "#D4A574" },
    { id: "dairy", name: "Dairy", icon: Milk, color: "#7BA884" },
    { id: "grains", name: "Grains", icon: Wheat, color: "#E8D5C4" },
    { id: "seafood", name: "Seafood", icon: Fish, color: "#A8C5A0" },
    { id: "vegetables", name: "Veggies", icon: Carrot, color: "#7BA884" },
  ];

  const handleSave = () => {
    if (!itemName || !quantity || !expiryDate || !selectedCategory) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      toast.success("Item added to pantry successfully!");
      setTimeout(() => {
        navigate("/pantry");
      }, 500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-[#F5F1ED] rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#3D3D3D]" />
          </button>
          <h2 className="text-[#3D3D3D]">Add New Item</h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Photo Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-[#F5F1ED] rounded-2xl flex flex-col items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-[#8B8B8B] mb-2" />
            <span className="text-sm text-[#8B8B8B]">Add Photo</span>
          </div>
          <p className="text-sm text-[#8B8B8B]">Optional</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          {/* Item Name */}
          <div>
            <label className="block text-[#3D3D3D] mb-2">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., Organic Milk"
              className="w-full bg-white border-2 border-[#E8D5C4] rounded-xl px-4 py-3 text-[#3D3D3D] placeholder:text-[#8B8B8B] focus:border-[#7BA884] focus:outline-none transition-colors"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-[#3D3D3D] mb-2">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g., 1 liter"
              className="w-full bg-white border-2 border-[#E8D5C4] rounded-xl px-4 py-3 text-[#3D3D3D] placeholder:text-[#8B8B8B] focus:border-[#7BA884] focus:outline-none transition-colors"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-[#3D3D3D] mb-2">Expiry Date</label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full bg-white border-2 border-[#E8D5C4] rounded-xl px-4 py-3 text-[#3D3D3D] focus:border-[#7BA884] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <label className="block text-[#3D3D3D] mb-3">Category</label>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-[#7BA884] bg-[#7BA884]/5"
                      : "border-[#E8D5C4] bg-white"
                  }`}
                >
                  <Icon
                    className="w-8 h-8 mx-auto mb-2"
                    style={{ color: category.color }}
                  />
                  <p className="text-sm text-[#3D3D3D] text-center">
                    {category.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] text-white py-4 rounded-2xl shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <span>Save Item</span>
          )}
        </button>
      </div>
    </div>
  );
}
