import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Clock,
  Flame,
  Users,
  Heart,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function RecipeDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  const recipes = {
    "1": {
      name: "Creamy Salmon Pasta",
      image: "🍝",
      time: "25 min",
      difficulty: "Easy",
      servings: 2,
      calories: "520 kcal",
      protein: "32g",
      carbs: "48g",
      fat: "18g",
      ingredients: [
        { name: "Salmon fillet", amount: "250g", hasIt: true },
        { name: "Pasta", amount: "200g", hasIt: false },
        { name: "Heavy cream", amount: "150ml", hasIt: true },
        { name: "Garlic", amount: "2 cloves", hasIt: false },
        { name: "Parmesan cheese", amount: "50g", hasIt: false },
        { name: "Olive oil", amount: "2 tbsp", hasIt: false },
        { name: "Salt & pepper", amount: "to taste", hasIt: false },
      ],
      instructions: [
        "Cook pasta according to package directions. Drain and set aside.",
        "Cut salmon into bite-sized pieces. Season with salt and pepper.",
        "Heat olive oil in a large pan over medium heat.",
        "Add minced garlic and cook until fragrant, about 30 seconds.",
        "Add salmon pieces and cook for 3-4 minutes until golden.",
        "Pour in heavy cream and bring to a gentle simmer.",
        "Add cooked pasta and toss to coat in the creamy sauce.",
        "Sprinkle with parmesan cheese and serve hot.",
      ],
    },
    "2": {
      name: "Apple Cinnamon Smoothie",
      image: "🥤",
      time: "10 min",
      difficulty: "Easy",
      servings: 1,
      calories: "210 kcal",
      protein: "8g",
      carbs: "38g",
      fat: "4g",
      ingredients: [
        { name: "Green apples", amount: "2 medium", hasIt: true },
        { name: "Milk", amount: "200ml", hasIt: true },
        { name: "Cinnamon", amount: "1 tsp", hasIt: false },
        { name: "Honey", amount: "1 tbsp", hasIt: false },
        { name: "Ice cubes", amount: "4-5", hasIt: false },
      ],
      instructions: [
        "Wash and core the apples. Cut into quarters.",
        "Add apple pieces to blender.",
        "Pour in milk and add cinnamon.",
        "Add honey for sweetness.",
        "Add ice cubes for a refreshing chill.",
        "Blend on high speed until smooth and creamy.",
        "Pour into glass and enjoy immediately!",
      ],
    },
    "3": {
      name: "French Toast",
      image: "🍞",
      time: "15 min",
      difficulty: "Easy",
      servings: 2,
      calories: "320 kcal",
      protein: "14g",
      carbs: "42g",
      fat: "10g",
      ingredients: [
        { name: "Eggs", amount: "3 large", hasIt: true },
        { name: "Milk", amount: "100ml", hasIt: true },
        { name: "Bread slices", amount: "4 thick", hasIt: false },
        { name: "Cinnamon", amount: "½ tsp", hasIt: false },
        { name: "Vanilla extract", amount: "1 tsp", hasIt: false },
        { name: "Butter", amount: "2 tbsp", hasIt: false },
        { name: "Maple syrup", amount: "for serving", hasIt: false },
      ],
      instructions: [
        "Crack eggs into a shallow bowl.",
        "Add milk, cinnamon, and vanilla extract. Whisk well.",
        "Heat a non-stick pan over medium heat. Add butter.",
        "Dip each bread slice into the egg mixture, coating both sides.",
        "Place soaked bread in the pan.",
        "Cook for 2-3 minutes until golden brown.",
        "Flip and cook the other side for 2-3 minutes.",
        "Serve hot with maple syrup and fresh berries!",
      ],
    },
    "4": {
      name: "Baked Salmon with Herbs",
      image: "🐟",
      time: "30 min",
      difficulty: "Medium",
      servings: 2,
      calories: "380 kcal",
      protein: "36g",
      carbs: "4g",
      fat: "24g",
      ingredients: [
        { name: "Salmon fillet", amount: "400g", hasIt: true },
        { name: "Lemon", amount: "1 large", hasIt: false },
        { name: "Fresh dill", amount: "3 tbsp", hasIt: false },
        { name: "Garlic", amount: "3 cloves", hasIt: false },
        { name: "Olive oil", amount: "3 tbsp", hasIt: false },
        { name: "Salt & pepper", amount: "to taste", hasIt: false },
      ],
      instructions: [
        "Preheat oven to 200°C (400°F).",
        "Line a baking tray with parchment paper.",
        "Place salmon fillet on the tray, skin side down.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Top with minced garlic and fresh dill.",
        "Slice lemon and arrange on top of the salmon.",
        "Bake for 15-18 minutes until salmon is cooked through.",
        "Serve with steamed vegetables or rice.",
      ],
    },
    "5": {
      name: "Egg & Veggie Scramble",
      image: "🍳",
      time: "12 min",
      difficulty: "Easy",
      servings: 1,
      calories: "280 kcal",
      protein: "18g",
      carbs: "12g",
      fat: "16g",
      ingredients: [
        { name: "Eggs", amount: "3 large", hasIt: true },
        { name: "Baby carrots", amount: "5-6 chopped", hasIt: true },
        { name: "Onion", amount: "¼ diced", hasIt: false },
        { name: "Butter", amount: "1 tbsp", hasIt: false },
        { name: "Salt & pepper", amount: "to taste", hasIt: false },
      ],
      instructions: [
        "Crack eggs into a bowl and whisk well.",
        "Heat butter in a non-stick pan over medium heat.",
        "Add diced onion and cook until translucent.",
        "Add chopped carrots and cook for 2-3 minutes.",
        "Pour in whisked eggs.",
        "Gently scramble the eggs with a spatula.",
        "Cook until eggs are just set but still creamy.",
        "Season with salt and pepper. Serve hot!",
      ],
    },
    "6": {
      name: "Beef Stir Fry",
      image: "🥘",
      time: "20 min",
      difficulty: "Medium",
      servings: 3,
      calories: "420 kcal",
      protein: "28g",
      carbs: "32g",
      fat: "18g",
      ingredients: [
        { name: "Ground beef", amount: "500g", hasIt: true },
        { name: "Baby carrots", amount: "1 cup sliced", hasIt: true },
        { name: "Soy sauce", amount: "3 tbsp", hasIt: false },
        { name: "Garlic", amount: "3 cloves", hasIt: false },
        { name: "Ginger", amount: "1 inch", hasIt: false },
        { name: "Vegetable oil", amount: "2 tbsp", hasIt: false },
        { name: "Rice", amount: "for serving", hasIt: false },
      ],
      instructions: [
        "Heat oil in a wok or large pan over high heat.",
        "Add minced garlic and ginger. Stir fry for 30 seconds.",
        "Add ground beef and break it up with a spatula.",
        "Cook beef until browned, about 5 minutes.",
        "Add sliced carrots and stir fry for 3-4 minutes.",
        "Pour in soy sauce and mix well.",
        "Cook for another 2 minutes until everything is well combined.",
        "Serve hot over steamed rice.",
      ],
    },
  };

  const recipe = recipes[id as keyof typeof recipes] || recipes["1"];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/recipes")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Heart
                className={`w-5 h-5 ${
                  isSaved ? "fill-white text-white" : "text-white"
                }`}
              />
            </button>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Recipe Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-5xl">
            {recipe.image}
          </div>
          <div className="flex-1">
            <h2 className="text-white mb-2">{recipe.name}</h2>
            <div className="flex items-center gap-3 text-sm text-white/90">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.servings}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Nutrition Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <p className="text-[#3D3D3D] mb-3">Nutrition per serving</p>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <p className="text-[#7BA884] mb-1">{recipe.calories}</p>
              <p className="text-xs text-[#8B8B8B]">Calories</p>
            </div>
            <div className="text-center">
              <p className="text-[#7BA884] mb-1">{recipe.protein}</p>
              <p className="text-xs text-[#8B8B8B]">Protein</p>
            </div>
            <div className="text-center">
              <p className="text-[#7BA884] mb-1">{recipe.carbs}</p>
              <p className="text-xs text-[#8B8B8B]">Carbs</p>
            </div>
            <div className="text-center">
              <p className="text-[#7BA884] mb-1">{recipe.fat}</p>
              <p className="text-xs text-[#8B8B8B]">Fat</p>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <h3 className="text-[#3D3D3D] mb-4">Ingredients</h3>
          <div className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    ingredient.hasIt
                      ? "border-[#7BA884] bg-[#7BA884]/10"
                      : "border-[#E8D5C4]"
                  }`}
                >
                  {ingredient.hasIt && (
                    <CheckCircle2 className="w-4 h-4 text-[#7BA884]" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[#3D3D3D]">{ingredient.name}</p>
                </div>
                <p className="text-sm text-[#8B8B8B]">{ingredient.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <h3 className="text-[#3D3D3D] mb-4">Instructions</h3>
          <div className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 bg-[#7BA884] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-[#3D3D3D] flex-1 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] text-white py-4 rounded-2xl shadow-md hover:shadow-lg transition-all">
          Start Cooking
        </button>
      </div>
    </div>
  );
}
