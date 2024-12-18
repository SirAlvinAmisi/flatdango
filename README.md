# Flatdango

Flatdango is a web application for purchasing movie tickets from Flatiron Movie Theater. This project allows users to view movie details, check available tickets, and buy tickets.

## Project Setup

### Prerequisites
- Node.js and npm installed on your machine.
- json-server installed globally.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SirAlvinAmisi/flatdango.git
   cd flatdango
   ```

2. Install `json-server` if you haven't already:
   ```bash
   npm install -g json-server
   ```

3. Create a `db.json` file in the project root with the provided movie data:
  
   For the complete movie data, please refer to the [db.json](db.json) file in the project directory.

4. Run the JSON server:
   ```bash
   json-server --watch db.json
   ```

The JSON server should now be running at `http://localhost:3000`.

### Usage
1. Open `index.html` in your browser to view the application.

2. The application will fetch and display the first movie's details on page load.

3. The left side of the page will display a menu of all movies. Clicking on a movie title will display that movie's details.

4. Users can buy tickets by clicking the "Buy Ticket" button. The number of available tickets will decrease accordingly, and if there are no tickets left, the button will display "Sold Out".

## Features
- Display details of the first movie on page load, including the poster, title, runtime, showtime, and available tickets.
- Display a menu of all movies on the left side of the page.
- Buy tickets for a movie, with the available tickets count updating in real-time.
- Indicate sold-out movies by updating the button text and menu item class.

## Future Improvements
- Persist ticket purchases by updating the JSON server.
- Add a delete button to remove films from the server and UI.
- Enhance UI/UX with additional styling and animations.

## License
This project is licensed under the MIT License.

### MIT License
For the full text of the MIT License, please see [LICENSE](LICENSE).

## Contact
For any inquiries or issues, please contact:
- **GitHub**: [SirAlvinAmisi](https://github.com/SirAlvinAmisi)
- **Email**: alvomakaya@gmail.com
- **LinkedIn**: [Alvin Amisi](https://www.linkedin.com/in/alvin-amisi-3aaba9109/)

---
