document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#Recipe");
  const input = document.querySelector(".input");
  const recipeDiv = document.querySelector("#recipe");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dish = input.value.trim();
    if (!dish) return;

    // Show loading
    recipeDiv.style.display = "block";
    recipeDiv.innerHTML = "Fetching recipe... 🍲";

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
      .then((response) => {
        const meals = response.data.meals;

        if (!meals) {
          recipeDiv.innerHTML = "Sorry, no recipe found 😔";
          return;
        }

        const meal = meals[0];

        recipeDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%;max-width:300px;border-radius:8px;" />
            <p>${meal.strInstructions}</p>
          `;
      })
      .catch((error) => {
        console.error(error);
        recipeDiv.innerHTML = "Something went wrong. Please try again.";
      });
  });
});
