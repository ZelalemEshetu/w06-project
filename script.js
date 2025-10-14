// Form submission
const form = document.getElementById('subscribeForm');
form?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save subscriber to localStorage
    localStorage.setItem('subscriber', JSON.stringify({ name, email }));

    alert(`Thank you, ${name}! You are subscribed.`);
    form.reset();
});

// Example JS array, object, template literals
const temples = [
    { name: "Salt Lake Temple", city: "Salt Lake City" },
    { name: "Paris France Temple", city: "Paris" },
    { name: "Laie Hawaii Temple", city: "Laie" }
];

// DOM manipulation: add temples to console
temples.forEach(temple => {
    console.log(`Temple: ${temple.name}, Location: ${temple.city}`);
});
