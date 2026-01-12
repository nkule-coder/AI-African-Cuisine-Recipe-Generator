document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Fixed form selector
  const recipe = document.querySelector("#recipe");

  if (!form) {
    console.error("Form element not found");
    return;
  }

  if (!recipe) {
    console.error("Recipe element not found");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    recipe.style.display = "block";
  });
});
