document.getElementById("new-joke-btn").addEventListener("click", fetchJoke);

function fetchJoke() {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = "Loading a killer joke...";
    
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        jokeElement.textContent = data.joke;
    })
    .catch(error => {
        jokeElement.textContent = "Oops! Something went wrong. Try again.";
        console.error("Error fetching joke:", error);
    });
}
