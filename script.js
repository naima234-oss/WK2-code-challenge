// Array to store shopping list items
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item');
const markAllPurchasedButton = document.getElementById('mark-all-purchased');
const shoppingListContainer = document.getElementById('shopping-list');
const clearListButton = document.getElementById('clear-list');

// Function to render the shopping list
function renderList() {
  shoppingListContainer.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    if (item.purchased) listItem.classList.add('purchased');

    // Add a button to mark as purchased
    const purchaseButton = document.createElement('button');
    purchaseButton.textContent = item.purchased ? 'Unmark' : 'Mark Purchased';
    purchaseButton.addEventListener('click', () => {
      shoppingList[index].purchased = !shoppingList[index].purchased;
      renderList();
    });

    listItem.appendChild(purchaseButton);
    shoppingListContainer.appendChild(listItem);
  });
}

// Add new item
addItemButton.addEventListener('click', () => {
  const newItem = itemInput.value.trim();
  if (newItem) {
    shoppingList.push({ name: newItem, purchased: false });
    itemInput.value = '';
    renderList();
  }
});

// Mark all items as purchased
markAllPurchasedButton.addEventListener('click', () => {
  shoppingList = shoppingList.map(item => ({ ...item, purchased: true }));
  renderList();
});

// Clear the list
clearListButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear the list?')) {
    shoppingList = [];
    renderList();
  }
});

// Initial render
renderList();
