document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display the first movie's details
    fetch("http://localhost:3000/films/1")
      .then(response => response.json())
      .then(data => {
        displayMovieDetails(data);
      });
  
    // Fetch and display the menu of all movies
    fetch("http://localhost:3000/films")
      .then(response => response.json())
      .then(data => {
        displayMovieMenu(data);
      });
  
    // Function to display movie details
    function displayMovieDetails(movie) {
      document.getElementById("poster").src = movie.poster;
      document.getElementById("title").textContent = movie.title;
      document.getElementById("description").textContent = movie.description;
      document.getElementById("runtime").textContent = movie.runtime;
      document.getElementById("showtime").textContent = movie.showtime;
      document.getElementById("available-tickets").textContent = movie.capacity - movie.tickets_sold;
  
      const buyButton = document.getElementById("buy-ticket");
      buyButton.textContent = "Buy Ticket";
      buyButton.disabled = false;
  
      if (movie.capacity - movie.tickets_sold === 0) {
        buyButton.textContent = "Sold Out";
        buyButton.disabled = true;
      }
  
      // Event listener for buying a ticket
      buyButton.onclick = () => {
        const availableTickets = movie.capacity - movie.tickets_sold;
        if (availableTickets > 0) {
          movie.tickets_sold += 1;
          document.getElementById("available-tickets").textContent = movie.capacity - movie.tickets_sold;
  
          // Update the number of tickets sold on the server (Extra Bonus)
          fetch(`http://localhost:3000/films/${movie.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tickets_sold: movie.tickets_sold
            })
          });
  
          if (movie.capacity - movie.tickets_sold === 0) {
            buyButton.textContent = "Sold Out";
            buyButton.disabled = true;
            // Update the film item in the menu to indicate sold out
            const li = document.querySelector(`#films li[data-id="${movie.id}"]`);
            li.classList.add("sold-out");
          }
        }
      };
    }
  
    // Function to display the menu of all movies
    function displayMovieMenu(movies) {
      const ul = document.getElementById("films");
      ul.innerHTML = ''; // Clear the existing content
  
      movies.forEach(movie => {
        const li = document.createElement("li");
        li.className = "film item";
        li.textContent = movie.title;
        li.setAttribute('data-id', movie.id); // Set data-id for identifying the movie
        ul.appendChild(li);
  
        if (movie.capacity - movie.tickets_sold === 0) {
          li.classList.add("sold-out");
        }
  
        // Event listener to fetch and display movie details when clicked
        li.onclick = () => {
          fetch(`http://localhost:3000/films/${movie.id}`)
            .then(response => response.json())
            .then(data => {
              displayMovieDetails(data);
            });
        };
  
        // Create and append delete button (Extra Bonus)
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        li.appendChild(deleteButton);
  
        // Event listener to delete the movie
        deleteButton.onclick = (event) => {
          event.stopPropagation(); // Prevent triggering the li.onclick
          fetch(`http://localhost:3000/films/${movie.id}`, {
            method: 'DELETE'
          })
          .then(() => {
            li.remove(); // Remove the li from the DOM
          });
        };
      });
    }
  });
  