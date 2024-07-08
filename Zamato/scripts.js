// Fetch restaurant data from the backend API and populate the restaurant list
function fetchRestaurants() {
  fetch("/api/restaurants")
    .then((response) => response.json())
    .then((restaurants) => {
      const restaurantList = document.getElementById("restaurant-list");
      restaurantList.innerHTML = "";

      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement("div");
        restaurantCard.classList.add("restaurant-card");

        const name = document.createElement("h3");
        name.textContent = restaurant.name;
        restaurantCard.appendChild(name);

        const description = document.createElement("p");
        description.textContent = restaurant.description;
        restaurantCard.appendChild(description);

        // Add more details and menu items

        restaurantList.appendChild(restaurantCard);
      });
    });
}

fetchRestaurants();
