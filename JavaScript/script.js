//loading screen config
let startTime = new Date().getTime();
window.addEventListener('load', () => {
  let endTime = new Date().getTime();
  let loadTime = endTime - startTime;
  let delay = Math.max(2000 - loadTime, 0); 
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
  }, delay);
});



// Search bar script config: To filter out the result from the page

// Wait for the DOM content to be loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the search input element
    const searchInput = document.getElementById('search-input');
  
    // Get a reference to the search button element
    const searchButton = document.getElementById('search-button');
  
    // Get a reference to all game box elements
    const gameBoxes = document.querySelectorAll('.box');
  
    // Add an event listener to the search button to call the searchGames function when clicked
    searchButton.addEventListener('click', searchGames);
  
    // Define the searchGames function
    function searchGames() {
      // Get the value of the search input and convert it to lowercase
      const searchValue = searchInput.value.toLowerCase();
  
      // Initialize a variable to store the first matched game box
      let firstMatch = null;
  
      // Loop through each game box element
      gameBoxes.forEach((box) => {
        // Get the text content of the h4 element (game title) and convert it to lowercase
        const gameTitle = box.querySelector('h4').textContent.toLowerCase();
  
        // Check if the game title includes the search value
        if (gameTitle.includes(searchValue)) {
          // If it does, display the game box
          box.style.display = 'block';
  
          // If this is the first match, store the game box in the firstMatch variable
          if (!firstMatch) {
            firstMatch = box;
          }
        } else {
          // If it doesn't, hide the game box
          box.style.display = 'none';
        }
      });
  
      // If there's at least one match, scroll the first match into view
      // if (firstMatch) {
      //   // Add a small delay to ensure the element is visible before scrolling
      //   setTimeout(() => {
      //     // Scroll the first matched game box into view
      //     firstMatch.scrollIntoView({ behavior: 'smooth', block: 'top' });
      //   }, 100); 
      // }
    }
  });
  
  

  

  //   Onclick to show dropdown menu 
  // Wait for the DOM content to be loaded before executing the script
  document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the dropdown toggle element
    const dropdownToggle = document.querySelector('.dropdown-toggle');
  
    // Get a reference to the dropdown menu element
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    // Get a reference to the links within the dropdown menu
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
  
    // Function to close the dropdown menu
    const closeDropdown = () => {
      dropdownMenu.classList.remove('show');
    };
  
    // Check if both elements exist before adding the event listeners
    if (dropdownToggle && dropdownMenu) {
      // Add an event listener to the dropdown toggle element
      dropdownToggle.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();
  
        // Toggle the 'show' class on the dropdown menu element
        dropdownMenu.classList.toggle('show');
      });
  
      // Add an event listener to the document to close the dropdown when clicking outside
      document.addEventListener('click', (e) => {
        // Check if the click is outside the dropdown toggle and menu
        if (dropdownMenu.classList.contains('show') && !dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          closeDropdown();
        }
      });
  
      // Add an event listener to the links within the dropdown menu
      dropdownLinks.forEach((link) => {
        link.addEventListener('click', () => {
          closeDropdown();
        });
      });
    }
  });


  // clicked to display the desire page by removing the default one and showing up different page
  // Wait for the DOM to be loaded
  document.addEventListener('DOMContentLoaded', () => {
  // Get all category links
  const categoryLinks = document.querySelectorAll('.category-link');

  // Get all game boxes
  const gameBoxes = document.querySelectorAll('.box');

  // Hide all game boxes initially
  gameBoxes.forEach((box) => {
    box.style.display = 'none';
    box.parentNode.style.display = 'none';
  });

  // Show action games by default (you can change this to any category)
  const defaultCategory = 'action';
  const defaultGames = document.querySelectorAll(`.box[data-category="${defaultCategory}"]`);
  defaultGames.forEach((box) => {
    box.style.display = 'block';
    box.parentNode.style.display = 'flex';
  });

  // Add event listener to each category link
  categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();

      // Get the category from the link's data-category attribute
      const category = link.getAttribute('data-category');

      // Filter games based on selected category
      filterGames(category);
    });
  });

  // Function to filter games based on selected category
  function filterGames(category) {
    // Loop through all game boxes
    gameBoxes.forEach((box) => {
      // Check if the game box matches the selected category
      if (box.getAttribute('data-category') === category) {
        // Show the game box and its parent
        box.style.display = 'block';
        box.parentNode.style.display = 'flex';
      } else {
        // Hide the game box
        box.style.display = 'none';

        // Hide the parent if it doesn't contain any game boxes in the selected category
        if (!box.parentNode.querySelector(`[data-category="${category}"]`)) {
          box.parentNode.style.display = 'none';
        }
      }
    });
  }
  });


  // SCript for creating active link when get cliked
  // Always remmember to call a variable or value before adding event listener
  const categoryLinks = document.querySelectorAll('.category-link');

  // Add event listener to each category link
  categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Remove active class from all links   
    categoryLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add active class to the current link
    link.classList.add('active');

    // Get the category from the link's data-category attribute
    const category = link.getAttribute('data-category');

    // Filter games based on selected category
    filterGames(category);
  });

});


 
  
  



