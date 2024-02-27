// Get all the item divs
let itemDivs = Array.from(document.querySelectorAll('#avon'));

// Create an items array from the item divs
let items = itemDivs.map(div => div.textContent || div.innerText);

// Get the input element
let searchInput = document.getElementById('search');

let noResultsMessage = document.getElementById('no-results');
let secondSection = document.querySelector('#exit');

// Add an event listener for the input event
searchInput.addEventListener('input', function(e) {
  // Get the current value of the input field
  let searchValue = e.target.value.toLowerCase();

  // Filter the items array
  let filteredItems = items.filter(item => item.toLowerCase().includes(searchValue));

  // Hide all item divs
  itemDivs.forEach(div => div.style.display = 'none');

  // Show only the divs that match the search value
  filteredItems.forEach(item => {
    let matchingDiv = itemDivs.find(div => (div.textContent || div.innerText) === item);
    if (matchingDiv) {
      matchingDiv.style.display = 'block';
    }
  });

  if (filteredItems.length === 0) {
    noResultsMessage.classList.remove('hidden');
    secondSection.classList.add('hidden');
  } else {
    noResultsMessage.classList.add('hidden');
    secondSection.classList.remove('hidden');
  }
});