angular.module('dateJarApp')
	.service('mainService', function() {
		var data = {
	      "atHome": [
	        "Netflix and chill. Easy.",
	        "Read a book together and have meaningful conversations about the book.",
	        "You pick the movie, your significant other makes the food+dessert.",
	        "Get competitive and play some video games together!",
	        "Play some board games! May I suggest Scrabble and Twister?",
	        "Find a random recipe and make it together. The harder it is, the more fun it'll be!",
	        "Binge watch an entire movie series. Having junk food is a plus.",
	        "Binge watch an entire TV series. Junk food? Even better.",
	        "Plan a romantic DAY/MORNING. Brunch is a must.",
	        "Make a drinking game out of your favorite movie. Make it even more adventurous by switching off between who picks the movie and who picks the alcohol.",
	        "Plan a romantic EVENING. Bubble baths, flowers, the works.",
	        "NERF GUN FIGHT. Loser cooks dinner or washes the dishes, whichever is worse.",
	        "No technology day. That means no social media, calling or texting. Live a little!",
	        "Have a photoshoot. See what each person thinks looks good on the other person!",
	        "Get artsy and do some painting or drawing together!",
	        "Karaoke night. Youtube is your best friend tonight.",
	        "Finger foods only dinner. Pizza, wings, whatever else you can get your hands on!",
	        "Homemade pizza night. Your significant other must LOVE anchovies on their pizza, too, right?",
	        "Breakfast in bed. It's easy and simple, but really makes their mornings.",
	        "Babysit for a friend and see what you two would be like with kids! Good luck.",
	        "Theme night. Spend an entire day watching and eating Italian things or explore a new culture. Korean food/movies are bomb, yo.",
	        "Relive your relationship's past! Look at photo albums (or Instagram for most of you), remember the good times, and just enjoy each other's company.",
	        "DIY night. Doesn't matter if you're making tables or jewelry. Be creative!",
	        "Chances are, you only have Instagram/Polaroid photos. Start scrapbooking right now. Seriously."
	      ],
	      "outside": [
	        "Have a picnic! Bonus points if you both cook the food yourselves!",
	        "Go wine tasting. Don't know what you're doing? Neither does most of the world.",
	        "Whisky tasting. See each other enjoying it or squirming for help.",
	        "Visit LACMA! Get involved with the arts and culture.",
	        "You pick the movie and your significant other picks the dinner. No complaining!",
	        "Take a drive to the Santa Monica Pier. Spend a beach day, window shop around, bask in the glory of California weather.",
	        "Take a tour of a company! May I suggest Google or Riot Games?",
	        "Get physical and go hiking. Bring lots of water and be prepared to be a crutch for the other person!",
	        "Go buy some googly eyes and put them on everything imagineable. Don't get caught!",
	        "Griffith Park is a nice way to spend some time together.",
	        "Drive along PCH and enjoy the view as well as each other's company.",
	        "Go window shopping at Rodeo Drive! Just because you might not be able to afford it doesn't mean you can't enjoy it!",
	        "Look at the stars from the Griffith Observatory. Romantic and simple.",
	        "Get cultural and take a visit to Olvera Street!",
	        "Take a stroll and bask in the citylife that is Los Angeles.",
	        "Enjoy city life near the beach and take a walk around Downtown San Diego.",
	        "Go to a mall. Shop, spend, eat, be silly.",
	        "Go on a second \"first date\". Dress up, be nervous, and remember what it felt like falling in love all over again!",
	        "Little Tokyo isn't far and has tons of things to look at!",
	        "Go birdwatching. If that get's boring, go people watching afterwards.",
	        "Sit down somewhere and simply people watch. Maybe pretend what theyre thinking and saying.",
	        "Beach day. Sun bathe, surf, walk in the sand, whatever floats your boat when you're at the beach!",
	        "Take a look at Yelp and eat somewhere new! Don't be scared of anything unfamiliar!",
	        "The Cinespia at Hollywood Forever Cemetary. Who knew a cemetary could be romantic?",
	        "Go to the Exposition Rose Garden. Take a walk, take some pictures, enjoy.",
	        "Go to Signal Hill and look at the city lights at night. Griffith Observatory works just as well!",
	        "The Getty Villa. Beautiful, artsy, and cultural.",
	        "Museum of Contemporary Art (MOCA). Nothing like a good time appreciating and trying to understand art.",
	        "Wayfarer's Chapel. Incredibly beautiful, rustic, and secretive.",
	        "Take a visit to one of the Botanical Gardens. Just enjoy walking in a beautiful area with your beautiful significant other.",
	        "The Descanso Gardens are a perfect getaway for an afternoon.",
	        "If you appreciate graffiti as a form of art, take a visit to Murphy Ranch. Historical and touristy.",
	        "Go to the cliffs in San Diego. Sure won't see anything like this in LA.",
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
	        "Spend a day eating at the best places in San Diego. Phil's BBQ and Oscar's comes to mind.",
	        "Go biking along the beach. It's not a race so enjoy your time together! (Or assert your dominance and race each other)"
	      ],
	      "free": [
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
			"Go wine tasting. Don't know what you're doing? Neither does most of the world.",
	        "Take a drive to the Santa Monica Pier. Spend a beach day, window shop around, bask in the glory of California weather.",
	        "Take a tour of a company! May I suggest Google or Riot Games?",
	        "Get physical and go hiking. Bring lots of water and be prepared to be a crutch for the other person!",
	        "Griffith Park is a nice way to spend some time together.",
	        "Drive along PCH and enjoy the view as well as each other's company.",
	        "Go window shopping at Rodeo Drive! Just because you might not be able to afford it doesn't mean you can't enjoy it!",
	        "Look at the stars from the Griffith Observatory. Romantic and simple.",
	        "Get cultural and take a visit to Olvera Street!",
	        "Take a stroll and bask in the citylife that is Los Angeles.",
	        "Enjoy city life near the beach and take a walk around Downtown San Diego.",
	        "Go birdwatching. If that get's boring, go people watching afterwards.",
	        "Sit down somewhere and simply people watch. Maybe pretend what theyre thinking and saying.",
	        "Beach day. Sun bathe, surf, walk in the sand, whatever floats your boat when you're at the beach!",
	        "The Cinespia at Hollywood Forever Cemetary. Who knew a cemetary could be romantic?",
	        "Go to the Exposition Rose Garden. Take a walk, take some pictures, enjoy.",
	        "Go to Signal Hill and look at the city lights at night. Griffith Observatory works just as well!",
	        "The Getty Villa. Beautiful, artsy, and cultural.",
	        "Wayfarer's Chapel. Incredibly beautiful, rustic, and secretive.",
	        "Take a visit to one of the Botanical Gardens. Just enjoy walking in a beautiful area with your beautiful significant other.",
	        "The Descanso Gardens are a perfect getaway for an afternoon.",
	        "If you appreciate graffiti as a form of art, take a visit to Murphy Ranch. Historical and touristy.",
	        "Go to the cliffs in San Diego. Sure won't see anything like this in LA.",
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
	        "Go biking along the beach. It's not a race so enjoy your time together! (Or assert your dominance and race each other)",
	        "Check out some tidepools in Newport/Laguna Beach!"
	      ],
	      "pricey": [
	        "Disneyland is pretty self-explanatory. Watch some shows you haven't seen, experience World of Color, draw some iconic characters, and more!",
	        "Sea World isn't doing too hot lately, but it doesn't give you an excuse not to go see all the aquatic wonders it has to offer!",
	        "Vegas is only a couple of hours away! Explore sin city and see what it has to offer!",
	        "Go to a music festival! Maybe explore some new genres or listen to what your significant other enjoys!",
	        "Plan a trip to San Francisco. It doesn't have to be for too long, but sightseeing is always fun!",
	        "Go camping! Embrace and enjoy life as it exists.",
	        "Take a trip to Seattle! Explore the rainy city and how hipsters truly live.",
	        "Fly straight to the windy city and see how Chicago lives.",
	        "The big apple. New York has so much to offer, so plan accordingly!",
	        "Plan a staycation. Stay at an amazing hotel like the Ritz Carlton and order the finest foods available. Enjoy yourselves.",
	        "Universal Studios is always a good way to spend a day. If possible, enjoy their Horror Nights as well!",
	        "Knott's Berry Farm! It's not as iconic as Disneyland, but it's small and a good change every now and then!",
	        "Have a romantic dinner at a 4/5 star restaurant. Make sure you pair your wines properly and order your food to perfection.",
	        "Start planning for a trip to Asia. Or Europe. I'll be lenient with this one, but start planning! The world is so vast and you don't have all the time in the world to see it.",
	        "Go to a dine-in movie theater. Eat while you watch and watch while you eat.",
	        "Spend all day in Los Angeles. Eat there, explore the city, and just spend quality time with one another.",
	      	"Spend all day in San Diego. Eat there, explore the city, and just spend quality time with one another.",
	      	"Spend all day in Orange County. Eat there, explore different cities, and just spend quality time with one another.",
	      	"Take a visit to the San Diego Zoo! See exotic species, pretend the animals can talk, and see which animals resemble whom!",
	      	"Spend an afternoon at the Aquarium of the Pacific. Touch stingrays and watch the cute sea otters!"
	      ],
	      "couple": [
	        "Board game night. Have fun competing or playing with another couple. Even better, be THAT couple and assert your dominance.",
	        "Double date, triple date, etc. night. Go to a local show or fair and have fun!",
	        "Take a class! You can go dancing or painting or whatever you guys agree on doing.",
	        "Paint Nite. Paint and drink wine and see who's the worst painter of the group.",
	        "Bonfire and beach days! The more the merrier!",
	        "Group dinner or lunch. Everyone has to contribute with the food!",
	        "Game night. In this case, football, basketball, whatever sport you're into. Make some bomb food and sit back and relax! Even better with rival fans!",
	        "Groupon is amazing. Take advantage of it and have some fun!",
	        "DIY game night. Whether it's mini golf, pool, or True American, compete and have fun!",
	        "Go camping! Go paddle boarding! Do something outdoorsy in nature!",
	        "Click on the Pricey button and do it with another couple!",
	        "Click on the Outside button and do it with another couple!",
	        "Click on the Free button and do it with another couple!",
	        "Go clubbing! Groups are always safer, have more energy and are more fun!",
	        "Karaoke night! Place your insecurities away and sing your hearts out!",
	        "Go to an Escape Room! Work together and see if everyone's a team player.",
	        "Go see a game. Watch the USC football team or watch the Lakers at Staples Center! Sports are ALWAYS fun.",
	        "Pick up a new outdoor activity. Some ideas are rock climbing, paddle boating, and hiking!",
	        "Hit the arcade or fair and see who can win the most prizes/tickets!",
	        "Get ready to laugh your lungs out and go to a comedy club.",
	        "Go bowling! Losers buy dinner or dessert!"
	      ]
	    };

		var allData = {
	      "jesus": [
	        "Netflix and chill. Easy.",
	        "Read a book together and have meaningful conversations about the book.",
	        "You pick the movie, your significant other makes the food+dessert.",
	        "Get competitive and play some video games together!",
	        "Play some board games! May I suggest Scrabble and Twister?",
	        "Find a random recipe and make it together. The harder it is, the more fun it'll be!",
	        "Binge watch an entire movie series. Having junk food is a plus.",
	        "Binge watch an entire TV series. Junk food? Even better.",
	        "Plan a romantic DAY/MORNING. Brunch is a must.",
	        "Make a drinking game out of your favorite movie. Make it even more adventurous by switching off between who picks the movie and who picks the alcohol.",
	        "Plan a romantic EVENING. Bubble baths, flowers, the works.",
	        "NERF GUN FIGHT. Loser cooks dinner or washes the dishes, whichever is worse.",
	        "No technology day. That means no social media, calling or texting. Live a little!",
	        "Have a photoshoot. See what each person thinks looks good on the other person!",
	        "Get artsy and do some painting or drawing together!",
	        "Karaoke night. Youtube is your best friend tonight.",
	        "Finger foods only dinner. Pizza, wings, whatever else you can get your hands on!",
	        "Homemade pizza night. Your significant other must LOVE anchovies on their pizza, too, right?",
	        "Breakfast in bed. It's easy and simple, but really makes their mornings.",
	        "Babysit for a friend and see what you two would be like with kids! Good luck.",
	        "Theme night. Spend an entire day watching and eating Italian things or explore a new culture. Korean food/movies are bomb, yo.",
	        "Relive your relationship's past! Look at photo albums (or Instagram for most of you), remember the good times, and just enjoy each other's company.",
	        "DIY night. Doesn't matter if you're making tables or jewelry. Be creative!",
	        "Chances are, you only have Instagram/Polaroid photos. Start scrapbooking right now. Seriously.",
	        "Have a picnic! Bonus points if you both cook the food yourselves!",
	        "Go wine tasting. Don't know what you're doing? Neither does most of the world.",
	        "Whisky tasting. See each other enjoying it or squirming for help.",
	        "Visit LACMA! Get involved with the arts and culture.",
	        "You pick the movie and your significant other picks the dinner. No complaining!",
	        "Take a drive to the Santa Monica Pier. Spend a beach day, window shop around, bask in the glory of California weather.",
	        "Take a tour of a company! May I suggest Google or Riot Games?",
	        "Get physical and go hiking. Bring lots of water and be prepared to be a crutch for the other person!",
	        "Go buy some googly eyes and put them on everything imagineable. Don't get caught!",
	        "Griffith Park is a nice way to spend some time together.",
	        "Drive along PCH and enjoy the view as well as each other's company.",
	        "Go window shopping at Rodeo Drive! Just because you might not be able to afford it doesn't mean you can't enjoy it!",
	        "Look at the stars from the Griffith Observatory. Romantic and simple.",
	        "Get cultural and take a visit to Olvera Street!",
	        "Take a stroll and bask in the citylife that is Los Angeles.",
	        "Enjoy city life near the beach and take a walk around Downtown San Diego.",
	        "Go to a mall. Shop, spend, eat, be silly.",
	        "Go on a second \"first date\". Dress up, be nervous, and remember what it felt like falling in love all over again!",
	        "Little Tokyo isn't far and has tons of things to look at!",
	        "Go birdwatching. If that get's boring, go people watching afterwards.",
	        "Sit down somewhere and simply people watch. Maybe pretend what theyre thinking and saying.",
	        "Beach day. Sun bathe, surf, walk in the sand, whatever floats your boat when you're at the beach!",
	        "Take a look at Yelp and eat somewhere new! Don't be scared of anything unfamiliar!",
	        "The Cinespia at Hollywood Forever Cemetary. Who knew a cemetary could be romantic?",
	        "Go to the Exposition Rose Garden. Take a walk, take some pictures, enjoy.",
	        "Go to Signal Hill and look at the city lights at night. Griffith Observatory works just as well!",
	        "The Getty Villa. Beautiful, artsy, and cultural.",
	        "Museum of Contemporary Art (MOCA). Nothing like a good time appreciating and trying to understand art.",
	        "Wayfarer's Chapel. Incredibly beautiful, rustic, and secretive.",
	        "Take a visit to one of the Botanical Gardens. Just enjoy walking in a beautiful area with your beautiful significant other.",
	        "The Descanso Gardens are a perfect getaway for an afternoon.",
	        "If you appreciate graffiti as a form of art, take a visit to Murphy Ranch. Historical and touristy.",
	        "Go to the cliffs in San Diego. Sure won't see anything like this in LA.",
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
	        "Spend a day eating at the best places in San Diego. Phil's BBQ and Oscar's comes to mind.",
	        "Go biking along the beach. It's not a race so enjoy your time together! (Or assert your dominance and race each other)",
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
			"Go wine tasting. Don't know what you're doing? Neither does most of the world.",
	        "Take a drive to the Santa Monica Pier. Spend a beach day, window shop around, bask in the glory of California weather.",
	        "Take a tour of a company! May I suggest Google or Riot Games?",
	        "Get physical and go hiking. Bring lots of water and be prepared to be a crutch for the other person!",
	        "Griffith Park is a nice way to spend some time together.",
	        "Drive along PCH and enjoy the view as well as each other's company.",
	        "Go window shopping at Rodeo Drive! Just because you might not be able to afford it doesn't mean you can't enjoy it!",
	        "Look at the stars from the Griffith Observatory. Romantic and simple.",
	        "Get cultural and take a visit to Olvera Street!",
	        "Take a stroll and bask in the citylife that is Los Angeles.",
	        "Enjoy city life near the beach and take a walk around Downtown San Diego.",
	        "Go birdwatching. If that get's boring, go people watching afterwards.",
	        "Sit down somewhere and simply people watch. Maybe pretend what theyre thinking and saying.",
	        "Beach day. Sun bathe, surf, walk in the sand, whatever floats your boat when you're at the beach!",
	        "The Cinespia at Hollywood Forever Cemetary. Who knew a cemetary could be romantic?",
	        "Go to the Exposition Rose Garden. Take a walk, take some pictures, enjoy.",
	        "Go to Signal Hill and look at the city lights at night. Griffith Observatory works just as well!",
	        "The Getty Villa. Beautiful, artsy, and cultural.",
	        "Wayfarer's Chapel. Incredibly beautiful, rustic, and secretive.",
	        "Take a visit to one of the Botanical Gardens. Just enjoy walking in a beautiful area with your beautiful significant other.",
	        "The Descanso Gardens are a perfect getaway for an afternoon.",
	        "If you appreciate graffiti as a form of art, take a visit to Murphy Ranch. Historical and touristy.",
	        "Go to the cliffs in San Diego. Sure won't see anything like this in LA.",
	        "Find a nice spot in Anaheim and watch the fireworks from Disneyland. Free and romantic, what a bargain!",
	        "Go biking along the beach. It's not a race so enjoy your time together! (Or assert your dominance and race each other)",
	        "Check out some tidepools in Newport/Laguna Beach!",
	        "Disneyland is pretty self-explanatory. Watch some shows you haven't seen, experience World of Color, draw some iconic characters, and more!",
	        "Sea World isn't doing too hot lately, but it doesn't give you an excuse not to go see all the aquatic wonders it has to offer!",
	        "Vegas is only a couple of hours away! Explore sin city and see what it has to offer!",
	        "Go to a music festival! Maybe explore some new genres or listen to what your significant other enjoys!",
	        "Plan a trip to San Francisco. It doesn't have to be for too long, but sightseeing is always fun!",
	        "Go camping! Embrace and enjoy life as it exists.",
	        "Take a trip to Seattle! Explore the rainy city and how hipsters truly live.",
	        "Fly straight to the windy city and see how Chicago lives.",
	        "The big apple. New York has so much to offer, so plan accordingly!",
	        "Plan a staycation. Stay at an amazing hotel like the Ritz Carlton and order the finest foods available. Enjoy yourselves.",
	        "Universal Studios is always a good way to spend a day. If possible, enjoy their Horror Nights as well!",
	        "Knott's Berry Farm! It's not as iconic as Disneyland, but it's small and a good change every now and then!",
	        "Have a romantic dinner at a 4/5 star restaurant. Make sure you pair your wines properly and order your food to perfection.",
	        "Start planning for a trip to Asia. Or Europe. I'll be lenient with this one, but start planning! The world is so vast and you don't have all the time in the world to see it.",
	        "Go to a dine-in movie theater. Eat while you watch and watch while you eat.",
	        "Spend all day in Los Angeles. Eat there, explore the city, and just spend quality time with one another.",
	      	"Spend all day in San Diego. Eat there, explore the city, and just spend quality time with one another.",
	      	"Spend all day in Orange County. Eat there, explore different cities, and just spend quality time with one another.",
	      	"Take a visit to the San Diego Zoo! See exotic species, pretend the animals can talk, and see which animals resemble whom!",
	      	"Spend an afternoon at the Aquarium of the Pacific. Touch stingrays and watch the cute sea otters!",
	        "Board game night. Have fun competing or playing with another couple. Even better, be THAT couple and assert your dominance.",
	        "Double date, triple date, etc. night. Go to a local show or fair and have fun!",
	        "Take a class! You can go dancing or painting or whatever you guys agree on doing.",
	        "Paint Nite. Paint and drink wine and see who's the worst painter of the group.",
	        "Bonfire and beach days! The more the merrier!",
	        "Group dinner or lunch. Everyone has to contribute with the food!",
	        "Game night. In this case, football, basketball, whatever sport you're into. Make some bomb food and sit back and relax! Even better with rival fans!",
	        "Groupon is amazing. Take advantage of it and have some fun!",
	        "DIY game night. Whether it's mini golf, pool, or True American, compete and have fun!",
	        "Go camping! Go paddle boarding! Do something outdoorsy in nature!",
	        "Click on the Pricey button and do it with another couple!",
	        "Click on the Outside button and do it with another couple!",
	        "Click on the Free button and do it with another couple!",
	        "Go clubbing! Groups are always safer, have more energy and are more fun!",
	        "Karaoke night! Place your insecurities away and sing your hearts out!",
	        "Go to an Escape Room! Work together and see if everyone's a team player.",
	        "Go see a game. Watch the USC football team or watch the Lakers at Staples Center! Sports are ALWAYS fun.",
	        "Pick up a new outdoor activity. Some ideas are rock climbing, paddle boating, and hiking!",
	        "Hit the arcade or fair and see who can win the most prizes/tickets!",
	        "Get ready to laugh your lungs out and go to a comedy club.",
	        "Go bowling! Losers buy dinner or dessert!"
	      ]
	    };

		this.getData = function () {
			return data;
		}

		this.getAllData = function() {
			return allData;
		}
	});