# Find It Quickly


## Video Demo: https://youtu.be/etIsGT6Zo9U


## Description:
	This project, "Find It Quickly", is a simple website which purpose is to be a fast way to find specific kinds of venues and services close to your current location.
	It has been made using Python with Flask, HTML, CSS and JS. It uses browser's Geolocation API and consumes Google Maps APIs from the client side.
	It has a simple interface and it is very easy to navigate.
	It has been uploaded to a Heroku server via git where it is currently available on:
##	https://find-it-q.herokuapp.com


## Project Files

# app.py
	This file is where the main logic of the app takes place. Here it's decided which of the 2 templates will be used, based on the parameters passed (type).
	If the "type" parameter exists, it's because it has been picked from the options, then the map if loaded with the places that belong to the mentioned typed.
	If the parameter doesn't exist, it means the user didn't pick a ype, so the list is displayed.
	It also reads list.json where the supported types of places are defined, based on Google's Maps API's list of supported types of places.
	After reading this list, it send the list to the template as a parameter to populate the diverse places where these are enumerated.

# static/css/style.css
	This is the file containing the personalized styles used on the site, aditional to the ones used on Bootstrap.
	It has very few styles, mostly for simple animations and personalization in the maps.

# static/js/inicio.js
	Here can be found the code that animates the text in inicio.html. It uses a list of words, the same used to populate the other lists of places. It toggles the classes in the elements of the lists, one at a time, making them visible and invisible.
	Here we can also find the code that shape the buttons in the list in inicio.html to squares. It's done by getting div's width, defined using CSS, and setting height to that value.

# static/js/mapa.js
	This is the JS where most of the work has gone, it took some effort to understand how to interact with Google Maps API and how to make it after we get geolocation from the browser.
	First, we get the geolocation from the browser's Geolocation API, with a simple request.
	The hard part was to make map's API call wait for the location. I know it can be done with promises, but that's still hard to understand at the moment.
	After getting the location we follow the next steps:
	* Define the site's elements where the maps will be drawn.
	* Set the current position as the middle of the map, and set the maps parameters.
	* Define the users marker and icon, and the action if it's clicked.
	* Retrieve the list of places around the users location.
	* Draw the markers and define their action if clicked.
	At the moment the places are limited to 1000m around the user, because if we request the API for a larger radius, it retrieves an empty list.
	Since it's necesary to display a map with the user's position, and thinking that would be apropiate to use client's machine resources instead of the server's, the call to the maps API is made from user's machine and not from our server. This way our server wouldn't be burdened everytime the user refreshes the map, Google's server would be, though.

# templates/pagina.html
	This is the base template for the other website's HTMLs.
	Here is located the head, main menu and footer of the page.

# templates/inicio.html
	This is the template for the landing page. It extends pagina.html
	It has the words that are animated using inicio.js. It also has a list populated with the information on list.json.

# templates/mapa.html
	This is the template for the map itself. It extends pagina.html
	Here is defined the containers for the map and related elements.
	It uses the code located on mapa.js to get the user location and generate a map using Google's Maps API. The behaviour is explained in  mapa.js section.

# static/list.json
	This is the content source for the app.
	Here is defined the supported types of places, based on Google's Maps API's official list of supported types of places.
	This list defines 3 values for each type of place:
	* "name": The name to be displayed.
	* "string": The string used on the API, and other HTML "internal stuff".
	* "img": the name of the image to be displayed on the buttons on inicio.html.
	This information is used to dynamically populate the list in the main menu, the animated text and the buttons on inicio.html.

# static/img
	Here are saved the images and icons which are used in the app.

# venv, .gitignore, Procfile, requirements.txt
	There were some files modified and generated to make the applicatio work on Heroku's server. this where not uploaded as part as the code, since they appear to be specific to Heroku, but worth noting their existence.
	Ther app worked correctly on localhost without them.
	venv: it defines the virtual environment where Heroku will run the app.
	.gitignore: git file to set the files that wouldn't be uploaded to the server via git.
	Procfile: it defines the group of programs that Heroku would need to run this app.
	requirements.txt: generated by pip with all the requirements to be installed.