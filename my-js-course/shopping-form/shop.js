const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// & we ne3ed an array to hold our state
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    // if its empty then dont submit it
    if (!name) return;

    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    // & push the items into our state
    items.push(item);
    console.log(item.name);
    console.log(`There are now ${items.length} items in the list`);
    console.log(name);
    console.log(items);
    // & CLEAR THE FORM
    e.target.reset();

    // &fire off a custom event that will tell anyone else who cares that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    console.log(items);
    const html = items
        .map(
            (item) => `<li class="shopping-item">
        <input value="${item.id}" type="checkbox"
        ${item.complete ? 'checked' : ''}><span class="itemName">${item.name}
        </span>
        <button aria-label="Remove ${item.name}"
        value="${item.id}"
        >&times;</button>
        </li>`
        )
        .join('');
    console.log(html);
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    console.log('saving mirror to local storage...');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info('restoring from local storage...');
    // & pull the items from localStorage
    const lsItems = JSON.parse(localStorage.getItem('items'));
    // & if there are items in localStorage, push them into our state
    if (lsItems) {
        if (lsItems.length) {
            // items = lsItems;
            // lsItems.forEach((item) => {
            // items.push(item);
            // });
            items.push(...lsItems);
            // items.push(lsItems[0]);
            list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
    }
}

function handleDelete(id) {
    console.log(`Deleting item with ${id}`);
    // & update our items array without this one
    items = items.filter((item) => item.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    console.log('markAsComplete', id);
    const itemRef = items.find((item) => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// & Event Delegation: We listen for the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', (e) => {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        handleDelete(id);
    }
    if (e.target.matches("input[type='checkbox']")) {
        markAsComplete(id);
    }
});

restoreFromLocalStorage();