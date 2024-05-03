document.addEventListener('click', function() {
  // select the element
  const mainHeading = document.querySelector('h1');
  
  // change its background color to red
  mainHeading.style.backgroundColor = 'red';
})


document.addEventListener('DOMContentLoaded', function() {
  // select the element
  const myButton = document.querySelector('button');
  
  // change its background color to red
  myButton.addEventListener('click', function() {
  myButton.style.backgroundColor = 'red';
});
});


// Select the h1 element
const header = document.querySelector('h1');

// Function to change the text of the h1 element to "Build an AR App"
function changeToBuildARApp() {
  header.textContent = "Build an AR App";
}

// Function to change the text of the h1 element back to "Learn ARKit"
function changeToLearnARKit() {
  header.textContent = "Learn ARKit";
}

// Add event listener for mouseenter event
header.addEventListener('mouseenter', changeToBuildARApp);

// Add event listener for mouseleave event
header.addEventListener('mouseleave', changeToLearnARKit);


// Function to remove the last element inside the hero_module element
function removeLastFeaturedProgram() {
  const heroModule = document.querySelector('.hero_module');
  if (heroModule) {
      const featuredPrograms = heroModule.querySelectorAll('.featured_program');
      const lastProgram = featuredPrograms[featuredPrograms.length - 1];
      if (lastProgram) {
          lastProgram.remove();
      }
  }
  // Remove the event listener once after it has been triggered
  document.removeEventListener('click', removeLastFeaturedProgramOnce);
}

// Add event listener to remove the last featured program once when the document is clicked
document.addEventListener('click', removeLastFeaturedProgramOnce);


document.addEventListener('DOMContentLoaded', function () {
  // Select elements to create a NodeList that holds the nodes you'll use to append the favorite buttons
  const nanodegreeCards = document.querySelectorAll('.list-nanodegrees .card');

  // Loop through each nanodegree card to add a favorite button
  nanodegreeCards.forEach(card => {
      // Create the button element
      const favoriteButton = document.createElement('button');
      favoriteButton.classList.add('button', 'button--primary');
      favoriteButton.textContent = 'Add to Favorites';

      // Append the button to the card
      card.appendChild(favoriteButton);

      // Add event listener to toggle favorite status and text on the button
      favoriteButton.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default action of navigating to Nanodegree page

          // Toggle text on the button between Add to Favorites and Remove from Favorites
          if (favoriteButton.textContent === 'Add to Favorites') {
              favoriteButton.textContent = 'Remove from Favorites';
          } else {
              favoriteButton.textContent = 'Add to Favorites';
          }

          // Toggle favorite status indicator
          const favoriteIndicator = document.createElement('span');
          favoriteIndicator.textContent = '⭐ ⭐ ⭐'; // You can adjust the indicator as needed

          // Check if favorite indicator already exists, if so remove it, otherwise add it
          if (card.querySelector('.favorite-indicator')) {
              card.querySelector('.favorite-indicator').remove();
          } else {
              card.insertBefore(favoriteIndicator, favoriteButton);
              favoriteIndicator.classList.add('favorite-indicator');
          }
      });
  });
});