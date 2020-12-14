var config = require('./db-config.js');
var mysql = require('mysql');

config.connectionLimit = 10;
var connection = mysql.createPool(config);

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */


/* ---- Portfolio ---- */
//free games
function getFree(req, res) {
  var query = `
  SELECT * 
  FROM Game WHERE price = 0 AND total_rating > 1000 
  ORDER BY rand() LIMIT 30;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      //console.log(rows);
      res.json(rows);
    }
  });
};

// newly released games
function getNew(req, res) {
  var query = `
    SELECT * 
    FROM Game WHERE total_rating > 1000 
    ORDER BY release_date DESC LIMIT 15;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

//top rating games
function getTopRating(req, res) {
  var query = `
    SELECT * 
    FROM Game WHERE total_rating > 100000 
    ORDER BY rating DESC LIMIT 10;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};




/* ---- Branch 1 ---- */
//code start
function getTopRatingOnTags(req, res) {
  var query = `
  WITH tmp1 AS (SELECT tag_name FROM Game_Tag GROUP BY tag_name ORDER BY COUNT(*) DESC LIMIT 10),
  tmp2 AS (SELECT game_id, T.tag_name FROM Game_Tag T JOIN tmp1 ON tmp1.tag_name = T.tag_name),
  tmp3 AS (SELECT G.game_id, name, company, platforms, price, release_date, total_rating, rating, header, movies, short_description, tmp2.tag_name
  FROM Game G JOIN tmp2 ON G.game_id = tmp2.game_id WHERE total_rating > 100000)
  SELECT game_id, name, company, platforms, price, release_date, total_rating, header, movies, short_description, Max(rating) OVER (PARTITION BY tmp3.tag_name) AS rating
  FROM tmp3 ORDER BY tag_name;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

//Recommendation based on user
function getRecommendation(req, res) {
  const id = req.params.id;
  var query = `
  WITH tmp3 AS 
	(SELECT T.* 
	FROM Game_Tag T 
	JOIN (SELECT tmp1.tag_name, 
			COUNT(*) AS num 
		FROM (SELECT T.game_id, 
					 T.tag_name
			FROM Favorite F
			JOIN Game_Tag T 
			ON T.game_id = F.game_id 
			WHERE F.user_id = "${id}") tmp1 
		GROUP BY tag_name 
		LIMIT 3) tmp2 
	ON tmp2.tag_name = T.tag_name),
tmp4 AS (SELECT G.*, tmp3.tag_name
			FROM Game G 
            JOIN tmp3 
            ON G.game_id = tmp3.game_id 
            WHERE G.total_rating > 100),
tmp5 AS (SELECT 
        tmp4.*,
        RANK() OVER (
            PARTITION BY tag_name
            ORDER BY rating DESC
        ) rating_rank
        FROM tmp4)
SELECT tmp5.*
FROM tmp5 
WHERE rating_rank <= 3 
ORDER BY tag_name, rating_rank;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

// get all prices
function getPrices(req, res) {
  var query = `
    select distinct floor(price) as price 
    from Game order by floor(price);
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      //console.log(rows);
      res.json(rows);
    }
  });
};

// get all tags
function getTags(req, res) {
  var query = `
    select distinct tag_name from Game_Tag;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};

// get all names
function getNames(req, res) {
  var query = `
    select name from Game;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};

// search on name
function getSearchOnName(req, res) {
  const name = req.params.name;
  var query = `
  select * from Game where name like '%${name}%';;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

// search on system, price interval and tag
function getSearchResults(req, res) {
  const system = req.params.system;
  const lowerPrice = req.params.price;
  const higherPrice = lowerPrice + 0.99;
  const tag = req.params.tag;
  var query = `
    SELECT *
    FROM Game G JOIN Game_Tag T ON G.game_id = T.game_id 
    WHERE T.tag_name = '${tag}' 
    AND price BETWEEN ${lowerPrice} AND ${higherPrice}
    AND G.platforms LIKE '%${system}%'
    AND total_rating > 1000
    ORDER BY rating DESC LIMIT 9;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};





/* ---- branch 2 ---- */
function getYearlyPopular(req, res) {
  var query = `
  WITH tmp1 AS (SELECT game_id, company,  name, platforms, total_rating, header, short_description AS description, year(release_date) AS release_year, rating, movies FROM Game),
tmp2 AS (SELECT tmp1.release_year, tmp1.company, tmp1.platforms, tmp1.total_rating, tmp1.name, tmp1.header, tmp1.description, tmp1.movies, Max(rating) OVER (PARTITION BY tmp1.release_year) AS rating
FROM tmp1 ORDER BY release_year, total_rating DESC, rating DESC),
tmp3 AS (SELECT tmp2.release_year, Max(tmp2.total_rating) OVER (PARTITION BY tmp2.release_year) as total_rating FROM tmp2 GROUP BY tmp2.release_year)
SELECT tmp2.* FROM tmp2 JOIN tmp3 ON tmp2.release_year = tmp3.release_year AND tmp2.total_rating = tmp3.total_rating;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
}





/* ---- Branch 3 ---- */
//get all time intervals
function getIntervals(req, res) {
	var query = `select distinct ceiling(year(release_date)/5) * 5 as year from Game;`;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
}


//get popular tags in a certain decades
function getPopularTags(req, res) {
  const end = req.params.year;
  const start = end - 4;
	var query = `SELECT tag_name FROM (
    SELECT tag_name 
      FROM Game G JOIN Game_Tag T ON G.game_id = T.game_id 
      WHERE year(G.release_date) BETWEEN '${start}' AND '${end}'
      ) tmp1 
  GROUP BY tag_name ORDER BY COUNT(*) DESC LIMIT 3;`;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
}

// get games based on tag in a certain time interval
function getTagHistory(req, res) {
  const tag = req.params.tag;
  const end = req.params.year;
  const start = end - 4;
  const query = `select * from Game g join Game_Tag t on g.game_id=t.game_id
  where tag_name='${tag}' and year(release_date) between '${start}' AND '${end}' and total_rating > 1000
  order by rating desc limit 6;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};






/* ---- User operations ---- */
// get user's favorite list
function getFavorite(req, res) {
  const userId = req.params.user;
  const query = `
    select g.game_id, name, company, platforms, price, release_date, total_rating, rating, header, movies, short_description 
    from Favorite f join Game g on f.game_id=g.game_id
    where user_id='${userId}';
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};

// change the user's favorite list
function changeList(req, res) {
  const userId = req.body.userId;
  const gameId = req.body.gameId;
  const add = req.body.add;

  let query;
  if(add) {
    query = `INSERT INTO Favorite (user_id, game_id)
    VALUES ('${userId}', ${gameId});
  `;
  } else {
    query = `delete from Favorite where user_id='${userId}' and game_id=${gameId};
  `;
  }

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};

function addUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const index = email.indexOf('@');
    const name = email.slice(0, index);

    const query = `
      insert into User (id, password, name, email)
      values ('${email}', '${password}', '${name}', '${email}');
    `;

    connection.query(query, function(err, rows, fields) {
      if (err) console.log(err);
      else {
        res.json(rows);
      }
    });

}

// The exported functions, which can be accessed in index.js.
module.exports = {
	getFree: getFree,
	getNew: getNew,
  getTopRating: getTopRating,
  getTopRatingOnTags, getTopRatingOnTags,
  getRecommendation: getRecommendation,
  getPrices : getPrices,
  getTags : getTags,
  getNames : getNames,
  getSearchOnName : getSearchOnName,
  getSearchResults : getSearchResults,
  getYearlyPopular : getYearlyPopular,
  getIntervals : getIntervals,
  getPopularTags : getPopularTags,
  getTagHistory : getTagHistory,
  getFavorite: getFavorite,
  changeList : changeList,
  addUser : addUser
}
