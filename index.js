const dishes = [
    { id: 1, name: "Noodles & egg curry", chef: "John Kivalya", image: "https://i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Italian spaghetti", chef: "Kelvin Musyoka", image: "https://i.pinimg.com/236x/10/fb/b5/10fbb5f46b9e4a6b66fd73927c700eb5.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Chinese noodles", chef: "Louis Njeru", image: "https://i.pinimg.com/236x/db/07/2d/db072d20bc9a2de134c1a39b52f320a3.jpg", rating: 3, comment: "too salty" }
];

// Function to display dish images with names
function displayDishes() {
    const dishMenu = document.getElementById('dish-menu');
    dishMenu.innerHTML = ''; // Clear existing images
    
    dishes.forEach(dish => {
        const dishContainer = document.createElement('div');
        dishContainer.classList.add('dish-container');
        
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        img.classList.add('dish-image');
        img.addEventListener('click', () => handleClick(dish));

        const dishName = document.createElement('p');
        dishName.textContent = dish.name;
        dishName.classList.add('dish-name');
        
        dishContainer.appendChild(img);
        dishContainer.appendChild(dishName);
        dishMenu.appendChild(dishContainer);
    });
}

// Function to handle dish image click
function handleClick(dish) {
    document.getElementById('dish-name').textContent = dish.name;
    document.getElementById('dish-chef').textContent = dish.chef;

    const selectedDishImage = document.getElementById('selected-dish-image');
    selectedDishImage.src = dish.image;
    selectedDishImage.alt = dish.name;

    document.getElementById('rating-value').textContent = dish.rating !== null ? dish.rating : 'N/A';
    document.getElementById('comment-value').textContent = dish.comment !== null ? dish.comment : 'N/A';

    document.getElementById('selected-dish-container').style.display = 'block';
}

// Function to toggle the form visibility
function toggleForm() {
    const form = document.getElementById('new-dish-form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}

// Main function to initialize the app
function main() {
    displayDishes();
    addSubmitListener();
    document.getElementById('add-dish-button').addEventListener('click', toggleForm); // Toggle form visibility on button click
}

// Wait for the DOM content to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', main);