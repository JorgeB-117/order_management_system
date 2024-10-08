// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: "Hot Chocolate", price: 5, quantity: 10},
    {name: "Latte", price: 7, quantity: 12},
    {name: "Americano", price: 4, quantity: 15},
    {name: "Cappuccino", price: 6, quantity: 8},
];

// Task 2: Create an Orders Array of Order Objects

let orders = [];

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, itemOrdered) {
    // Find the product in the inventory
    let productInventory = inventory.find(product => product.name === itemOrdered.itemName);

    // Check if it exists and stock
    if (productInventory && productInventory.quantity >= itemOrdered.itemQuantity) {
        // Updates inventory
        productInventory.quantity -= itemOrdered.itemQuantity;

        // Add order to the orders array
        orders.push({
            customerName: customerName,
            items: { name: itemOrdered.itemName, quantity: itemOrdered.itemQuantity },
            status: "Pending"
        });

        // Output success message
        console.log(`Order placed for ${customerName}. Remaining ${itemOrdered.itemName}: ${productInventory.quantity}`);
    } else {
        // Output error message
        if (!productInventory) {
            console.log(`Error: Product ${itemOrdered.itemName} not found.`);
        } else {
            console.log(`Error: Insufficient stock for ${itemOrdered.itemName}.`);
        }
    }
}
// example order gives correct output
placeOrder('Hazel Gomez', {itemName: 'Latte', itemQuantity: 1 }); 

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(itemOrdered) {
    return itemOrdered.reduce((total, currentItem) => {
        let productInventory = inventory.find(product => product.name === currentItem.name); //find the product 
        if (productInventory) {
            return total + (currentItem.itemQuantity * productInventory.price); //if found, calculate total price
        }
        return total;
    }, 0); 
}

let order = orders.find(order => order.customerName === 'Hazel Gomez');
let total = calculateOrderTotal(order);
console.log(`Total for order of Hazel Gomez: $${total}`);


// Task 5: Create a Function to Mark an Order as Completed

function completeOrder (customerName, orders) {
    let customerOrder = orders.find(order => order.customerName === customerName); // find the order of the customer
    if (customerOrder) {
        customerOrder.status = "Complete" //if order found
        console.log(`Order for ${customerName} is now marked as Completed.`);
    } else {
        console.log("Error: order not found") //if order not found
    }
};  

completeOrder('Hazel Gomez');

// Task 6: Create a Function to Check Pending Orders

function checkPendingOrders (orders) {
    let pendingOrders = orders.filter(order => order.status === "Pending")
    pendingOrders.forEach(order => { console.log(`Order from customer ${order.customerName} is Pending`) })
}; 

checkPendingOrders();
