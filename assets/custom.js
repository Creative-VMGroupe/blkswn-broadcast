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
// Select all elements with the 'data-header-expanded' attribute
const headerElements = document.querySelectorAll('[data-header-expanded]');
const mainHeader = document.querySelector('header')
  
// Function to update the attribute based on scroll position
function updateHeaderExpanded() {
    const isAtTop = window.scrollY === 0;

    headerElements.forEach(headerElement => {
        if (isAtTop) {
            headerElement.setAttribute('data-header-expanded', 'true');
        } else {
            headerElement.setAttribute('data-header-expanded', 'false');
        }
    });
}
//Check for Homepage
const isHP = () => {
  const currentURL = window.location.href;
  const baseURL = window.location.origin + '/';


  return currentURL === baseURL;
}

if(isHP()) {
//Applies styles only when on HP
mainHeader.classList.add('animate-header')
// Add event listener to update on scroll
window.addEventListener('scroll', updateHeaderExpanded);

// Initial check in case the page is not loaded at the top
updateHeaderExpanded();
  
}  










  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
