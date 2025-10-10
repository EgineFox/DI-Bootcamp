// Giphy API key
const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Get references to HTML elements
const gifForm = document.getElementById('gifForm');           // Form element
const categoryInput = document.getElementById('categoryInput'); // Input field for category
const gifContainer = document.getElementById('gifContainer');   // Container to hold GIFs
const deleteBtnAll = document.getElementById('deleteAllBtn');   // Button to delete all GIFs

// Event listener for form submission
gifForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    const category = categoryInput.value.trim(); // Get and trim input value
    if (!category) return; // Exit if input is empty

    // Construct Giphy API URL with category tag
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${category}&rating=g`;

    try {
        // Fetch data from Giphy API
        const response = await fetch(url);
        /* const json = await response.json();
        const data = json.data;*/
        const {data} = await response.json(); // Extract 'data' from response with 1code string (destructuring);

        const gifUrl = data.images.original.url; // Get GIF URL from 'images' object

        // Create a container for the GIF and its delete button
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';

        // Create the image element for the GIF
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = category;

        // Create the DELETE button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'DELETE';

        // Add event listener to DELETE button to remove only this GIF
        deleteBtn.addEventListener('click', () => {
            gifItem.remove(); // Remove the specific GIF container
        });

        // Append image and button to the GIF container
        gifItem.appendChild(img);
        gifItem.appendChild(deleteBtn);

        // Append the GIF container to the main container
        gifContainer.appendChild(gifItem);
    } catch (error) {
        // Log any errors that occur during fetch
        console.error('Error fetching GIF:', error);
    }

    // Clear the input field after submission
    categoryInput.value = '';
});

// Event listener for DELETE ALL button
deleteBtnAll.addEventListener('click', () => {
    gifContainer.innerHTML = ''; // Clear all GIFs from the container
});
