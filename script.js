    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');
    const episodeSelect = document.getElementById('episode-select');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
    });

    // Function to handle search bar functionality
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const options = episodeSelect.querySelectorAll('option');

        options.forEach(option => {
            const optionText = option.textContent.toLowerCase();
            if (optionText.includes(query)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    });
    
    
    // Handle form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
        contactForm.reset(); // Clear the form fields
    } else {
        alert('Please fill in all fields before submitting.');
    }
});


// Handle accordion toggle
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Toggle the active class to show the hide button
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});