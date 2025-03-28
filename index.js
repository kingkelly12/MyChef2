document.addEventListener('DOMContentLoaded', function() {

    // Function to fetch dishes from the server
    async function fetchDishes() {
        try {
            const response = await fetch('https://kingkelly12.github.io/host.api/db.json'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching dishes:', error);
            return []; // Return an empty array in case of an error
        }
    }

    const orderFoodButton = document.getElementById('order-food-button');
    const hireChefButton = document.getElementById('hire-chef-button');
    const messageDisplay = document.getElementById('message-display');

    orderFoodButton.addEventListener('click', async function() { // Added async here
        messageDisplay.textContent = 'Ordering food... Please select your dishes!';
        const dishes = await fetchDishes(); // Fetch dishes when the button is clicked
        if (dishes && dishes.length > 0) {
            console.log('Fetched dishes:', dishes);
            // Process the fetched dishes here 
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
        } else {
            messageDisplay.textContent = 'Failed to fetch dishes.';
        }
    });

    hireChefButton.addEventListener('click', function() {
        messageDisplay.textContent = 'Hiring a chef... Please provide your requirements!';
    });
});
  

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