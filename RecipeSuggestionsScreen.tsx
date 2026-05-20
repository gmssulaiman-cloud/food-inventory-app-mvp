import { useNavigate } from "react-router";
import { ArrowLeft, Clock, Flame, Users, ChefHat } from "lucide-react";

export default function RecipeSuggestionsScreen() {
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: "Creamy Salmon Pasta",
      image: "🍝",
      ingredients: ["Salmon", "Milk", "Pasta"],
      time: "25 min",
      difficulty: "Easy",
      servings: 2,
      expiringIngredients: 2,
    },
    {
      id: 2,
      name: "Apple Cinnamon Smoothie",
      image: "🥤",
      ingredients: ["Apples", "Milk", "Cinnamon"],
      time: "10 min",
      difficulty: "Easy",
      servings: 1,
      expiringIngredients: 2,
    },
    {
      id: 3,
      name: "French Toast",
      image: "🍞",
      ingredients: ["Eggs", "Milk", "Bread"],
      time: "15 min",
      difficulty: "Easy",
      servings: 2,
      expiringIngredients: 2,
    },
    {
      id: 4,
      name: "Baked Salmon with Herbs",
      image: "🐟",
      ingredients: ["Salmon", "Herbs", "Lemon"],
      time: "30 min",
      difficulty: "Medium",
      servings: 2,
      expiringIngredients: 1,
    },
    {
      id: 5,
      name: "Egg & Veggie Scramble",
      image: "🍳",
      ingredients: ["Eggs", "Carrots", "Onions"],
      time: "12 min",
      difficulty: "Easy",
      servings: 1,
      expiringIngredients: 2,
    },
    {
      id: 6,
      name: "Beef Stir Fry",
      image: "🥘",
      ingredients: ["Ground Beef", "Carrots", "Rice"],
      time: "20 min",
      difficulty: "Medium",
      servings: 3,
      expiringIngredients: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/expiry-alerts")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Use Soon Recipes</h2>
        </div>
        <p className="text-white/90">
          Smart recipes using your expiring ingredients
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* AI Recommendation Badge */}
        <div className="bg-gradient-to-r from-[#E8D5C4] to-[#F5EDE3] rounded-2xl p-4 mb-6 flex items-center gap-3">
          <div className="w-12 h-12 bg-[#7BA884] rounded-full flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-[#3D3D3D] mb-1">AI-Powered Suggestions</p>
            <p className="text-sm text-[#8B8B8B]">
              Based on your expiring items
            </p>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="space-y-4">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Recipe Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#E8D5C4] to-[#F5EDE3] rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                  {recipe.image}
                </div>

                {/* Recipe Info */}
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#3D3D3D]">{recipe.name}</h3>
                    {recipe.expiringIngredients > 0 && (
                      <div className="px-2 py-1 bg-[#E88873]/15 rounded-full">
                        <p className="text-xs text-[#E88873]">
                          {recipe.expiringIngredients} expiring
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-[#8B8B8B] mb-3">
                    {recipe.ingredients.join(", ")}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-[#7BA884]">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#D4A574]">
                      <Flame className="w-4 h-4" />
                      <span>{recipe.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#8B8B8B]">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
