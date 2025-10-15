// Form submission
const form = document.getElementById('contactForm');
form?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple conditional branching: check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    // Save subscriber to localStorage
    const subscriber = { name, email, message };
    localStorage.setItem('subscriber', JSON.stringify(subscriber));

    alert(`Thank you, ${name}! Your message has been received.`);
    form.reset();
});

// Array of temples
const temples = [
    { name: "Salt Lake Temple", city: "Salt Lake City" },
    { name: "Paris France Temple", city: "Paris" },
    { name: "Laie Hawaii Temple", city: "Laie" }
];

// DOM manipulation: display temples on the page
const templeSection = document.querySelector('.temple-images');

temples.forEach(temple => {
    const div = document.createElement('div');
    div.classList.add('temple-card');
    div.innerHTML = `
        <h4>${temple.name}</h4>
        <p>Location: ${temple.city}</p>
        <img src="images/${temple.name.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${temple.name}" loading="lazy">
    `;
    templeSection.appendChild(div);
    console.log(`Temple: ${temple.name}, Location: ${temple.city}`);
});
