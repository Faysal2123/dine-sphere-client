import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Menu = () => {
  const { user } = useContext(AuthContext); // useContext should be outside useEffect
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredient, setIngredient] = useState("chicken"); // Default ingredient is chicken
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        let url =
          ingredient === "drinks"
            ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
            : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

        const response = await fetch(url);
        const data = await response.json();

        let mealsWithPrice = ingredient === "drinks" && data.drinks
        ? data.drinks
            .filter(drink => drink.idDrink !== "15182")
            .map((drink) => ({
              idMeal: drink.idDrink,
              strMeal: drink.strDrink,
              strMealThumb: drink.strDrinkThumb,
              price: (Math.random() * (15 - 5) + 5).toFixed(2),
            }))
        : data.meals?.map((meal) => ({
            ...meal,
            price: (Math.random() * (25 - 10) + 10).toFixed(2),
          })) || [];
        setMeals(mealsWithPrice);
      } catch (error) {
        console.error("Error fetching meal data:", error);
        setError("Failed to fetch meals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [ingredient]);

  const handleOrder = async (meal) => {
    if (!user?.email) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to place an order.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const orderData = { ...meal, userEmail: user.email };

    try {
      const response = await fetch("https://dine-sphere-server.vercel.app/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Order Successful!",
          text: `You have ordered ${meal.strMeal} for $${meal.price}.`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        throw new Error(result.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire({
        title: "Order Failed",
        text: "Something went wrong, please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-gray-200 p-6 pt-20">
      <h1 className="text-3xl text-center text-yellow-600 font-bold mb-6 sm:text-4xl">
        Menu
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["chicken", "beef", "lamb", "pork", "tomato", "onion", "avocado", "drinks", "lettuce"].map((key) => (
          <button
            key={key}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              ingredient === key
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-700 border-2 border-gray-300"
            }`}
            onClick={() => setIngredient(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="text-2xl text-center mt-10">Loading meals...</div>
      ) : error ? (
        <div className="text-2xl text-center text-red-600 mt-10">{error}</div>
      ) : meals.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="flex flex-col bg-white p-6 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl items-center transform transition-all"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="h-56 rounded-xl shadow-md w-full mb-4 object-cover sm:h-64"
              />
              <h2 className="text-center text-xl text-yellow-600 font-semibold sm:text-2xl">
                {meal.strMeal}
              </h2>
              <p className="text-gray-700 text-lg mt-2">Price: ${meal.price}</p>
              <button
                className="bg-yellow-600 rounded-lg shadow-md text-white hover:bg-yellow-700 mt-4 px-6 py-2"
                onClick={() => handleOrder(meal)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-xl sm:text-2xl">
          No meals found for {ingredient}. Please try a different ingredient.
        </div>
      )}
    </div>
  );
};

export default Menu;
