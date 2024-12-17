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
   ```json
   {
     "films": [
       {
         "id": "1",
         "title": "The Giant Gila Monster",
         "runtime": "108",
         "capacity": 30,
         "showtime": "04:00PM",
         "tickets_sold": 27,
         "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
       },
       {
         "id": "2",
         "title": "Manos: The Hands Of Fate",
         "runtime": "118",
         "capacity": 50,
         "showtime": "06:45PM",
         "tickets_sold": 44,
         "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
       },
       // Include the rest of the movie data as provided
     ]
   }
   ```

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
```
MIT License

Copyright (c) 2024 SirAlvinAmisi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact
For any inquiries or issues, please contact:
- **GitHub**: [SirAlvinAmisi](https://github.com/SirAlvinAmisi)
- **Email**: alvomakaya@gmail.com

---