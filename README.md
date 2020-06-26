# Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Delete the `.ignore` file in the `api` directory

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## Instructions

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases
1. Github
1. Objects
1. CSS/Flexbox
1. Array methods
1. Components
1. Handling user events
1. Implementing CRUD operations
1. Relational data
1. ERDs

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com", "password": "xxxxxxxxxxxxxxxxxxxxx" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "following": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage", "complete": false }
```

## Professional Requirements

1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

Be very clear that what you will be implemeting is not real authentication. It is a simulation of it using very simplistic tools.

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their email, username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to [session storage](https://javascript.info/localstorage#sessionstorage).

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
```

## Database Structure and nomenclature
Here is an example of what the database should look like.  Please ensure that variable names are identical to those listed below.
How it works:
Each user has a unique ID by which it can be associated to other tables.
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