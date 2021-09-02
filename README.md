# Get Some Tennis AJAX

- Fork
- Clone
- `npm install` to get all of the dependencies (just `express` for now)

Install [Postman](https://www.getpostman.com/downloads/), if you haven't already.


## Base

- Look at the pattern for the working `/players` AJAX request. The client side is all set up for `/tournaments`, but the server side code isn't there. Add the server side code. Test with Postman!
- Add a POST route to the server.js file to allow a new player to be added. Test with Postman!
- Add inputs to the `index.html` & update `client.js` to do an Ajax POST request, allowing a new player to be added.

## Stretch


- Our `.then` is getting cluttered. Let's move the appending looping code into their own functions
- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `player.js` and `tournament.js` would be good).
- The `/player` and `/tournament` requests are working! Add a third array for `/winner` that has the `firstName` and `lastName` of the player, as well as the `tournamentName` for the tournament.
- Server-side validation. If the player being added to the `/winner` array is not in our players array, the server should return a `400` error.
- Most recent winner. The most recent winner of any tournament should be displayed prominently at the top of the page.
- Track total wins. The players array should have another property called `wins`, and whenever that player wins a tournament, the number of wins should increase by one. The number of wins should be displayed in the players table on the `index.html`