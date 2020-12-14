const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- Portfolio ---- */
// get free games
app.get('/free', routes.getFree);

// get newly released games
app.get('/new', routes.getNew);

// get top rating games
app.get('/top', routes.getTopRating);




/* ---- Branch 1 ---- */
/* 
routes.getTopRating is for getting 9 games based on the rating. 
This is for the code start of the recommendation page when no 
users sign in. 
*/

app.get('/cold_start', routes.getTopRatingOnTags);

/* Recommendations based on user's favoriate list */
app.get('/recommendation/:id', routes.getRecommendation); 

//get price intervals
app.get('/prices', routes.getPrices);

//get all tags
app.get('/tags', routes.getTags);

//get all names
app.get('/names', routes.getNames);

/* Search games based on system, price and tags  */
app.get('/search/:system/:price/:tag', routes.getSearchResults);

/* Search game based on name */
app.get('/names/:name', routes.getSearchOnName);




/* ---- Branch 2 ---- */
/*
Display the most popular game in each year
*/
app.get('/popular', routes.getYearlyPopular);





/* ---- Branch 3 ---- */
// get all time intervals (5 years)
app.get('/interval', routes.getIntervals);

// get popular tags based on decades
app.get('/history/:year', routes.getPopularTags);


/*
List the games of the tag in a certain time interval
*/
app.get('/history/:year/:tag', routes.getTagHistory);





/* ---- User operations ---- */
// get user's list
app.get('/favorite/:user', routes.getFavorite);

// change the user's list based on user's clicks
app.post('/favorite', routes.changeList);

// add user when signing up
app.post('/signup', routes.addUser);

app.listen(8081, () => {
	console.log(`Server listening on PORT 8081`);
});