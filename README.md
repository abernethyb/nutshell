
<!-- Beginning of Readme to present -->
# MyNutshell: The Revolution in Informational Dashboards

## Description: 
Note: This dashboard is not for the fainthearted. There's a difference between us. You think the people of this country exist to provide you with position. I think your position exists to provide those people with freedom. And I go to make sure that they have it. This dashboard is to provide you and your associates the ability to disseminate information between one another or cute dog pics. All in the name of FREEEEDDDDOOOMMMM! 

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Serve the JSON file database.json utilizing the json-server -p 8088 -w database.json in terminal. Note: you must have npm installed.
1. Now serve main.js in scripts directory. 
1. Open google chrome web browser and go to the port that you have served the site to. You should be seeing the webpage at this point in chrome. 
1. Register and begin your journey in the world of free flowing information. 


> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## JSON folder
Your JSON folder will be automatically populated with the information you and your allies add into the dashboard. Do not worry if this is blank at start up but, if it stays blank after registration, please check your ports for proper flow path of information. 


## Support

Support and assistance can be found from your fellow allies at NSS-day-cohort-41/nutshell-the-grave-and-the-rose. Don't worry, we ARE NOT the British. 

## Release

Expected release should be July 2, 2020 but we are coders so be prepared for delays. 

## Authors and Acknowledgements

The Creators of this dashboard are: Chad Jones, Erik Lindstrom, Brendan Abernathy, Rob Mixon, and William Wallace. Contributions were made form Madi Peper and Brenda Long. 


## I am William Wallace!


## License
[MIT](https://choosealicense.com/licenses/mit/)

<!-- End of readme to present -->


<!-- JSON files to get us started begins-->


```js
sessionStorage.removeItem("activeUser")
```

## Database Structure and nomenclature
Here is an example of what the database should look like.  Please ensure that variable names are identical to those listed below.

###### How it works:

Each user has a unique ID by which it can be associated with other tables.
Each table has a unique ID and a reference to an associated user via the user's id; this is represented by "userId".

In the case of the "friends" table, each object is to be thought of as a relationship.  Each object, or "relationship", is represented with a unique ID.  The essence of the relationship is constructed by the "userId" and the "followingUserId", wherein the "userId" represents the user and the "followingUserId" represents the friend of the user. 

In the example code below Jane, userId 3, is friends with both Billy, userId 2, and Bob, userId 1; consequently Billy and Bob are both friends with Jane. So in the first and second relationship object, in the "friends" table, userId 3 has a followingUserId of 2 in the relationship with the ID of 1 and followingUserId of 1 in the relationship with the ID of 2. Thus, Jane is friends with both Billy and Bob.

-Brendan Abernethy

```json
{
    "users": [
      {
        "username": "Bob Robertson",
        "email": "anemailaddress@emailplace.com",
        "password": "super$ecret@wesom3pas$w0rd",
        "id": 1
      },
      {
        "username": "Billy Wiliamson",
        "email": "billy@emailplace.com",
        "password": "reallybadpassword",
        "id": 2
      },
      {
        "username": "Jane Janson",
        "email": "jane@emailplace.com",
        "password": "tH313e$tp@s$wOrd",
        "id": 3
      }
      
    ],
    "friends": [
      {
        "userId": 3,
        "followingUserId": 2,
        "id": 1
      },
      {
        "userId": 3,
        "followingUserId": 1,
        "id": 2
      },
      {
        "userId": 1,
        "followingUserId": 3,
        "id": 3
      },
      {
        "userId": 2,
        "followingUserId": 3,
        "id": 4
      }
    ],
    "articles": [
      {
        "UserId": 3,
        "title": "IBM Condemns Use Of Facial Recognition Software For Anything Other Than Matching People With Their Celebrity Doppelganger",
        "description": "I had to look twice here; didn't realize it was onion at first.",
        "url": "https://www.theonion.com/ibm-condemns-use-of-facial-recognition-software-for-any-1844146414",
        "date": "2020-06-24",
        "id": 1
      },
      {
        "UserId": 1,
        "title": "Tide Accused Of Over-Inflating Number Of Children Who Roll Around In Mud Puddles Before Running Into House",
        "description": "I guess kids these days just don't play outside no more",
        "url": "https://www.theonion.com/tide-accused-of-over-inflating-number-of-children-who-r-1844161395",
        "date": "2020-06-24",
        "id": 2
      }
    ],
    "tasks": [
        {
            "UserId": 1,
            "title": "make a database",
            "description": "make a boilerplate database for this project to ensure that all team-members use identical variable names",
            "expetedCompletionDate": "2020-06-26",
            "complete": "true",
            "id": 1
          },
        {
            "UserId": 1,
            "title": "make an API call function",
            "description": "this function will retreive data from the database and make it usable throughout the program",
            "expetedCompletionDate": "2020-06-26",
            "complete": "false",
            "id": 2
        },
        {
            "UserId": 2,
            "title": "take out trash",
            "description": "The house is starting to smell bad.  Taking the trash that is inside of the house and moving it to a location that is not inside the house should help resolve this issue.  It will also help prevent all of the interior volume of the house from inevitably becoming filled with trash.",
            "expetedCompletionDate": "2000-01-01",
            "complete": "false",
            "id": 3
        }
    ],
    "events": [
        {
            "UserId": 3,
            "title": "Cleanup day at Billy's house",
            "location": "Billy's house, 123 Main street, Bucksnort, TN 37140",
            "date": "2020-08-1",
            "id": 1
          },
        {
            "UserId": 3,
            "title": "Yard Sale",
            "location": "my house, 126 Main street, Bucksnort, TN 37140",
            "date": "2020-08-2",
            "id": 2
        }
    ],
    "messages": [
        {
            "UserId": 1,
            "content": "I'm baby ennui wayfarers quinoa waistcoat air plant iPhone.",
            "date": "2020-06-26",
            "id": 1
          },
        {
            "UserId": 1,
            "content": "Heirloom cardigan etsy pinterest yuccie tumeric, banh mi shabby chic venmo before they sold out ugh humblebrag bicycle rights cred.",
            "date": "2020-06-26",
            "id": 2
        },
        {
            "UserId": 3,
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "2020-06-26",
            "id": 3
        },
        {
            "UserId": 2,
            "content": "Fashion axe distillery slow-carb cliche, cold-pressed pork belly four loko try-hard lyft.",
            "date": "2020-06-26",
            "id": 4
        }
    ]
  }
```
