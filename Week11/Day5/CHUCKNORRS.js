console.log("Starting...");

const retrieve = (category) => {
    console.log("Working ...");

    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch joke");
            }
        })
        .then((result) => {
            console.log("Joke:", result.value);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });

    console.log("Work Done ...");
};

retrieve("animal");

