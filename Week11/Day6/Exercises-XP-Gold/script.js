// Giphy API key
const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Get references to HTML elements
const gifForm = document.getElementById('gifForm');           // Form element
const gifContainer = document.getElementById('gifContainer');   // Container to hold GIFs
const deleteBtnAll = document.getElementById('deleteAllBtn');   // Button to delete all GIFs

// Event listener for form submission
gifForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    // Construct Giphy API URL with category tag
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}?`;

    try {
        // Fetch data from Giphy API
        const response = await fetch(url);
        const data  = await response.json(); // Extract 'data' from response
        console.log(data); // testing response
        const gifUrl = data.data.images.original.url; // Get GIF URL from 'images' object

        // Create a container for the GIF 
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';

        // Create the image element for the GIF
        const img = document.createElement('img');
        img.src = gifUrl;
                
        // Append image to the GIF container
        gifItem.appendChild(img);
        
        // Append the GIF container to the main container
        gifContainer.appendChild(gifItem);
    } catch (error) {
        // Log any errors that occur during fetch
        console.error('Error fetching GIF:', error);
    }

    
});

// Event listener for DELETE ALL button
deleteBtnAll.addEventListener('click', () => {
    gifContainer.innerHTML = '<button id="deleteAllBtn">DELETE ALL</buttun> <br>'; // Clear all GIFs from the container
});
