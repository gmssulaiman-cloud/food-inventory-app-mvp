import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AddItemScreen from "./screens/AddItemScreen";
import BarcodeScannerScreen from "./screens/BarcodeScannerScreen";
import PantryScreen from "./screens/PantryScreen";
import ExpiryAlertsScreen from "./screens/ExpiryAlertsScreen";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RecipeSuggestionsScreen from "./screens/RecipeSuggestionsScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import GroceryPlanningScreen from "./screens/GroceryPlanningScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/dashboard",
    Component: DashboardScreen,
  },
  {
    path: "/add-item",
    Component: AddItemScreen,
  },
  {
    path: "/scanner",
    Component: BarcodeScannerScreen,
  },
  {
    path: "/pantry",
    Component: PantryScreen,
  },
  {
    path: "/expiry-alerts",
    Component: ExpiryAlertsScreen,
  },
  {
    path: "/item/:id",
    Component: ItemDetailsScreen,
  },
  {
    path: "/settings",
    Component: SettingsScreen,
  },
  {
    path: "/recipes",
    Component: RecipeSuggestionsScreen,
  },
  {
    path: "/recipe/:id",
    Component: RecipeDetailsScreen,
  },
  {
    path: "/grocery-planning",
    Component: GroceryPlanningScreen,
  },
]);
