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