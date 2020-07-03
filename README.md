
<!-- Beginning of Readme to present -->
# MyNutshell: The Revolution in Informational Dashboards

## Description: 
Nutshell is a single page application where users can creat, read, update, and delete events, tasks, and articles they would like to keep track of.  Users can log in and out of the platform and add or delete other users as friends.

## Setup:

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Serve the JSON file database.json utilizing the json-server -p 3000 -w database.json in terminal. Note: you must have npm installed.  If serving the json server from a different url, just be sure to include that url in the API method parameter.
1. Now serve main.js in scripts directory. 
1. Open google chrome web browser and go to the port that you have served the site to. You should be seeing the webpage at this point in chrome. 
1. Register and begin your journey.


> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

###### How it works:

Each user has a unique ID by which it can be associated with other tables.
Each table has a unique ID and a reference to an associated user via the user's id; this is represented by "userId".

In the case of the "friends" table, each object is to be thought of as a relationship.  Each object, or "relationship", is represented with a unique ID.  The essence of the relationship is constructed by the "userId" and the "activeUserId", wherein the "activeUserId" represents the user and the "userId" represents the friend of the user. 


## JSON folder
Your JSON folder will be automatically populated with the information you and your allies add into the dashboard. Do not worry if this is blank at start up but, if it stays blank after registration, please check your ports for proper flow path of information. 

## Database Structure and nomenclature
For reference of what the database should look like, see "example.json" in the API directory.  Please ensure that variable names are identical to those listed in the example file.


## Authors and Acknowledgements

The Creators of this dashboard are: Chad Jones, Erik Lindstrom, Brendan Abernethy, Rob Mixon. Contributions were made form Madi Peper and Brenda Long. 