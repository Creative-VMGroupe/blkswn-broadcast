/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
// Select the element with the 'data-header-expanded' attribute
const headerElement = document.querySelector('[data-header-expanded]');

// Function to update the attribute based on scroll position
function updateHeaderExpanded() {
    if (window.scrollY === 0) {
      console.log("Top")
      
        headerElement.setAttribute('data-header-expanded', 'true');
    } else {
      console.log("Not Top")
          console.log(headerElement)
        headerElement.setAttribute('data-header-expanded', 'false');
    }
}

// Add event listener to update on scroll
window.addEventListener('scroll', updateHeaderExpanded);

// Initial check in case the page is not loaded at the top
updateHeaderExpanded();









  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
