// Simulate fetching the menu from a JSON file (provided URL).
function getMenu() {
    fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
        .then(response => response.json())
        .then(data => {
            const menuDiv = document.getElementById("menu");
            let menuHtml = '<ul>';
            data.forEach(item => {
                menuHtml += `<li>${item.name} - ${item.price}</li>`;
            });
            menuHtml += '</ul>';
            menuDiv.innerHTML = menuHtml;
        })
        .catch(error => console.error('Error fetching menu:', error));
}

// Function to take an order and simulate the process.
function TakeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate choosing 3 random burgers from the menu.
            const burgers = ['Cheese Burger', 'Veggie Burger', 'Chicken Burger', 'Double Patty Burger', 'Bacon Burger'];
            const randomBurgers = [];
            while (randomBurgers.length < 3) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                if (!randomBurgers.includes(randomBurger)) {
                    randomBurgers.push(randomBurger);
                }
            }
            resolve({ order: randomBurgers });
        }, 2500); // Simulate time taken to take the order
    });
}

// Function to simulate the order preparation process.
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500); // Simulate time for food preparation
    });
}

// Function to simulate the payment process.
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000); // Simulate time for payment
    });
}

// Function to show a thank you message when the order is paid.
function thankyouFnc() {
    alert("Thank you for eating with us today!");
}

// Combine all functions using async/await to handle the promises back to back.
async function processOrder() {
    try {
        await getMenu(); // Fetch the menu when the page loads

        const order = await TakeOrder(); // Take the order
        console.log("Order Taken:", order.order);

        const prepStatus = await orderPrep(); // Prepare the order
        console.log("Order Prepared:", prepStatus);

        const paymentStatus = await payOrder(); // Process payment
        console.log("Payment Status:", paymentStatus);

        if (paymentStatus.paid) {
            await thankyouFnc(); // Show thank you message once paid
        }
    } catch (error) {
        console.error("Error processing the order:", error);
    }
}

// Event listener for the "Order Now" button to start the process
document.getElementById("orderBtn").addEventListener("click", () => {
    processOrder();
});
