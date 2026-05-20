import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  ArrowLeft,
  Apple,
  Milk,
  Egg,
  Fish,
  Carrot,
  Beef,
} from "lucide-react";

export default function PantryScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "fruits", name: "Fruits" },
    { id: "dairy", name: "Dairy" },
    { id: "meat", name: "Meat" },
    { id: "vegetables", name: "Veggies" },
  ];

  const allItems = [
    {
      id: 1,
      name: "Organic Milk",
      category: "dairy",
      quantity: "1 liter",
      expiry: "Tomorrow",
      expiryColor: "#E88873",
      icon: Milk,
    },
    {
      id: 2,
      name: "Fresh Eggs",
      category: "dairy",
      quantity: "12 pieces",
      expiry: "3 days",
      expiryColor: "#D4A574",
      icon: Egg,
    },
    {
      id: 3,
      name: "Green Apples",
      category: "fruits",
      quantity: "6 pieces",
      expiry: "5 days",
      expiryColor: "#7BA884",
      icon: Apple,
    },
    {
      id: 4,
      name: "Salmon Fillet",
      category: "meat",
      quantity: "500g",
      expiry: "2 days",
      expiryColor: "#E88873",
      icon: Fish,
    },
    {
      id: 5,
      name: "Baby Carrots",
      category: "vegetables",
      quantity: "1 bag",
      expiry: "7 days",
      expiryColor: "#7BA884",
      icon: Carrot,
    },
    {
      id: 6,
      name: "Ground Beef",
      category: "meat",
      quantity: "1 kg",
      expiry: "1 day",
      expiryColor: "#E88873",
      icon: Beef,
    },
  ];

  const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-[#F5F1ED] rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#3D3D3D]" />
          </button>
          <h2 className="text-[#3D3D3D]">My Pantry</h2>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B8B8B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items..."
            className="w-full bg-[#F5F1ED] rounded-xl pl-12 pr-4 py-3 text-[#3D3D3D] placeholder:text-[#8B8B8B] focus:outline-none focus:ring-2 focus:ring-[#7BA884]/30"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedFilter === filter.id
                  ? "bg-[#7BA884] text-white"
                  : "bg-white text-[#3D3D3D] border border-[#E8D5C4]"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="px-6 space-y-3 pb-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#8B8B8B]">No items found</p>
          </div>
        ) : (
          filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/item/${item.id}`)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.expiryColor}15` }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: item.expiryColor }}
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#3D3D3D] mb-1">{item.name}</p>
                  <p className="text-sm text-[#8B8B8B]">{item.quantity}</p>
                </div>
                <div className="text-right">
                  <div
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${item.expiryColor}15`,
                      color: item.expiryColor,
                    }}
                  >
                    {item.expiry}
                  </div>
                </div>
              </div>
            </button>
          );
        })
        )}
      </div>
    </div>
  );
}
