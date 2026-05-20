import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Plus, Trash2, ShoppingCart, DollarSign } from "lucide-react";

export default function GroceryPlanningScreen() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState("");
  const [groceryList, setGroceryList] = useState([
    { id: 1, name: "Pasta", quantity: "2 packs", price: 8, checked: false },
    { id: 2, name: "Parmesan cheese", quantity: "1 pack", price: 12, checked: false },
    { id: 3, name: "Bread", quantity: "1 loaf", price: 5, checked: true },
    { id: 4, name: "Honey", quantity: "1 jar", price: 10, checked: false },
    { id: 5, name: "Olive oil", quantity: "1 bottle", price: 15, checked: false },
  ]);

  const totalCost = groceryList.reduce((sum, item) => sum + item.price, 0);
  const checkedCost = groceryList
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price, 0);

  const toggleItem = (id: number) => {
    setGroceryList(
      groceryList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setGroceryList(groceryList.filter((item) => item.id !== id));
  };

  const addItem = () => {
    if (newItem.trim()) {
      setGroceryList([
        ...groceryList,
        {
          id: Date.now(),
          name: newItem,
          quantity: "1 unit",
          price: 0,
          checked: false,
        },
      ]);
      setNewItem("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] px-6 pt-12 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Grocery Planning</h2>
        </div>
        <p className="text-white/90">Plan your next shopping trip</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Budget Summary */}
        <div className="bg-gradient-to-br from-[#E8D5C4] to-[#F5EDE3] rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-[#7BA884]" />
            <h3 className="text-[#3D3D3D]">Budget Summary</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl text-[#3D3D3D] mb-1">${totalCost}</p>
              <p className="text-sm text-[#8B8B8B]">Total Estimated</p>
            </div>
            <div>
              <p className="text-2xl text-[#7BA884] mb-1">${checkedCost}</p>
              <p className="text-sm text-[#8B8B8B]">Already Purchased</p>
            </div>
          </div>
        </div>

        {/* Add Item */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addItem()}
              placeholder="Add grocery item..."
              className="flex-1 bg-[#F5F1ED] rounded-xl px-4 py-3 text-[#3D3D3D] placeholder:text-[#8B8B8B] focus:outline-none focus:ring-2 focus:ring-[#7BA884]/30"
            />
            <button
              onClick={addItem}
              className="w-12 h-12 bg-[#7BA884] rounded-xl flex items-center justify-center text-white hover:bg-[#5D8C6B] transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grocery List */}
        <div className="mb-6">
          <h3 className="text-[#3D3D3D] mb-3 px-2">Shopping List</h3>
          <div className="space-y-3">
            {groceryList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.checked
                      ? "border-[#7BA884] bg-[#7BA884]"
                      : "border-[#E8D5C4]"
                  }`}
                >
                  {item.checked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </button>

                <div className="flex-1">
                  <p
                    className={`text-[#3D3D3D] ${
                      item.checked ? "line-through opacity-50" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="text-sm text-[#8B8B8B]">{item.quantity}</p>
                </div>

                <div className="text-right">
                  <p className="text-[#7BA884]">${item.price}</p>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="w-10 h-10 bg-[#E88873]/10 rounded-xl flex items-center justify-center text-[#E88873] hover:bg-[#E88873]/20 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-[#7BA884] to-[#A8C5A0] text-white py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Start Shopping</span>
        </button>
      </div>
    </div>
  );
}
