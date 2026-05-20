import { useNavigate } from "react-router";
import {
  ArrowLeft,
  AlertTriangle,
  Apple,
  Milk,
  Fish,
  Clock,
  ChefHat,
  Flame,
} from "lucide-react";

export default function ExpiryAlertsScreen() {
  const navigate = useNavigate();

  const expiringItems = [
    {
      id: 1,
      name: "Organic Milk",
      icon: Milk,
      expiry: "Expires Tomorrow",
      severity: "high",
      color: "#E88873",
    },
    {
      id: 2,
      name: "Salmon Fillet",
      icon: Fish,
      expiry: "Expires in 2 days",
      severity: "medium",
      color: "#E88873",
    },
    {
      id: 3,
      name: "Green Apples",
      icon: Apple,
      expiry: "Expires in 5 days",
      severity: "low",
      color: "#D4A574",
    },
  ];

  const recipes = [
    {
      id: 1,
      name: "Creamy Salmon Pasta",
      ingredients: "Salmon, Milk",
      time: "25 min",
      difficulty: "Easy",
      image: "🍝",
    },
    {
      id: 2,
      name: "Apple Smoothie Bowl",
      ingredients: "Apples, Milk",
      time: "10 min",
      difficulty: "Easy",
      image: "🥤",
    },
    {
      id: 3,
      name: "Baked Fish with Herbs",
      ingredients: "Salmon",
      time: "30 min",
      difficulty: "Medium",
      image: "🐟",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E88873] to-[#F5B5A1] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Expiry Alerts</h2>
        </div>
        <p className="text-white/90">Use these items soon to reduce waste</p>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4">
        {/* Alert Cards */}
        <div className="space-y-3 mb-8">
          {expiringItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm border-l-4"
                style={{ borderColor: item.color }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#3D3D3D] mb-1">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <AlertTriangle
                        className="w-4 h-4"
                        style={{ color: item.color }}
                      />
                      <p className="text-sm" style={{ color: item.color }}>
                        {item.expiry}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/item/${item.id}`)}
                    className="px-4 py-2 bg-[#F5F1ED] text-[#3D3D3D] rounded-xl text-sm hover:bg-[#E8D5C4] transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use Soon Recipes Section */}
        <div className="bg-gradient-to-br from-[#7BA884]/10 to-[#A8C5A0]/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-[#7BA884]" />
              <h3 className="text-[#3D3D3D]">Use Soon Recipes</h3>
            </div>
            <button
              onClick={() => navigate("/recipes")}
              className="text-[#7BA884] text-sm hover:underline"
            >
              View All
            </button>
          </div>
          <p className="text-sm text-[#8B8B8B] mb-4">
            Try these recipes using your expiring ingredients
          </p>

          <div className="space-y-3">
            {recipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
                className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E8D5C4] to-[#F5EDE3] rounded-xl flex items-center justify-center text-3xl">
                    {recipe.image}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#3D3D3D] mb-1">{recipe.name}</p>
                    <p className="text-sm text-[#8B8B8B] mb-2">
                      {recipe.ingredients}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1 text-[#7BA884]">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#D4A574]">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-[#3D3D3D] mb-3">💡 Food Storage Tips</h3>
          <ul className="space-y-2 text-sm text-[#8B8B8B]">
            <li>• Store milk at the back of the fridge, not in the door</li>
            <li>• Keep fish on ice or in the coldest part of your fridge</li>
            <li>• Apples last longer in the crisper drawer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
