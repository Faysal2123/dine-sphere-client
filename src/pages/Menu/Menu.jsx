import React, { useEffect, useState } from "react";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredient, setIngredient] = useState("chicken"); // Default ingredient is chicken
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;

        if (ingredient === "drinks") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`;
        } else {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        let mealsWithPrice;
        if (ingredient === "drinks" && data.drinks) {
          mealsWithPrice = data.drinks.map((drink) => ({
            idMeal: drink.idDrink,
            strMeal: drink.strDrink,
            strMealThumb: drink.strDrinkThumb,
            price: (Math.random() * (15 - 5) + 5).toFixed(2),
          }));
        } else {
          mealsWithPrice = data.meals?.map((meal) => ({
            ...meal,
            price: (Math.random() * (25 - 10) + 10).toFixed(2),
          })) || [];
        }

        setMeals(mealsWithPrice);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meal data:", error);
        setError("Failed to fetch meals. Please try again later.");
        setLoading(false);
      }
    };
    fetchMeals();
  }, [ingredient]);

  if (loading)
    return <div className="text-center text-2xl mt-10">Loading meals...</div>;
  if (error)
    return (
      <div className="text-center text-2xl mt-10 text-red-600">{error}</div>
    );

  return (
    <div className="bg-gray-200 p-6 sm:p-10"> {/* Background color changed here */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-600">
        Menu
      </h1>
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {[ 
          { key: "chicken", label: "Chicken" },
          { key: "beef", label: "Beef" },
          { key: "lamb", label: "Lamb" },
          { key: "pork", label: "Pork" },
          { key: "tomato", label: "Vegetarian" },
          { key: "onion", label: "Vegan" },
          { key: "avocado", label: "Avocado" },
          { key: "drinks", label: "Drinks" },
         
          { key: "lettuce", label: "Salad" }
        ].map((item) => (
          <button
            key={item.key}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              ingredient === item.key
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-700 border-2 border-gray-300"
            }`}
            onClick={() => setIngredient(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-56 sm:h-64 object-fill rounded-xl mb-4 shadow-md"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-center text-yellow-600">
                {meal.strMeal}
              </h2>
              <p className="text-lg text-gray-700 mt-2">Price: ${meal.price}</p>
              <button className="mt-4 px-6 py-2 bg-yellow-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300">
                Order Now
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-xl sm:text-2xl text-gray-600">
            No meals found for {ingredient}. Please try a different ingredient.
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
