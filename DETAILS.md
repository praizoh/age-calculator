# Age Calculator - Backend Assessment    

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bd3eb371f01940c493769504387a2154)](https://www.codacy.com/gh/praizoh/age-calculator/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=praizoh/age-calculator&amp;utm_campaign=Badge_Grade)

A simple api that calculates the age of a person when given the date of birth as timestamp(Unix).

___

**Features Implemented**
1. Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`
2. Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller
___

## Technologies Used
* [Node.js](https://nodejs.org/en/) - A runtime environment based off of Chromes's V8 Engine for writing Javascript server-side applications.
* [Express.js](https://expressjs.com/) - Web application framework based on Node.js.
___

## Testing Tools
* [Jest](https://www.npmjs.com/package/jest) - A JavaScript test framework.
___

## API Information
The API endpoints are hosted on Heroku - [Age Calculator](https://pipeline-age-calculator.herokuapp.com)

|METHOD  |DESCRIPTION                        |ENDPOINT                    |Required Field   |
|------- |-----------------------------------|----------------------------|-----------------|
|GET    |Calculate age                       |/howold                     | dob             |

___
## The Endpoints can be accessed remotely or locally.

#### Accessing the endpoints remotely via POSTMAN
You will need to have [POSTMAN](https://www.getpostman.com/downloads/) app installed on your computer.

##### Example 
###### Sign In
1. Launch POSTMAN
2. Click the dropdown menu to the left of the URL bar and select POST as a method.
3. To access the HowOld endpoint, at the end of Age Calculator's URL attach the sign in endpoint to it as seen in step 4
4. https://pipeline-age-calculator.herokuapp.com/howold
5. Then paste the full URL in the URL bar.
6. Click 'Params' tab below the URL, then add the key "dob" and a valid timestamp as value.
7. Click the blue Send button to the right of the URL bar.
8. And wait for a response below.


#### Accessing the endpoints locally via POSTMAN

1. On the terminal of your computer, navigate into the cloned repo's folder
2. Click [npm](https://www.npmjs.com/get-npm) and [Node.js](https://nodejs.org/en/) to get npm and node respectively.
3. Clone Quick Credit repo `https://github.com/joaquinto/QuickCredit.git` on your local machine.
4. Run `$ npm install` to install All of Quick Credit's dependencies.
5. Run `$ npm start` to power up the server.
6. The procedure for using POSTMAN here is the same as when accessing the endpoint remotely except that you make use of http://localhost:3000 as the full URL's prefix in place of the app's URL on heroku
e.g To access Sign In endpoint you will have a full URL like http://localhost:3000/api/v1/auth/signin

#### Project Structure
The project structure is given below
```sh
src/
├── controllers/
|    └── age.controller.js
├── middlewares/
|    └── index.js
|    └── joiMiddleware.js # middleware for validating user request
|    └── rateLimiter.js # middleware for handling rate limiting on the end point
├── routes/
|    └── age.route.js 
├── services/
|    └── age.service.js # contains logic for calculating age of user
├── validators/
|    └── rule.js
└── app.js
└── properties.json
└── server.js
```

#### How Does This Work
1. The howold url is called by a client
2. The middleware for rate limitter is called to confirm that client has not called the endpoint more than
    3 times in a second.
3. If step 2 passes, the next middleware is called to validate the query parameters passed with the url, in this case, dob.
4. The validation rules for this dob attribute confirms that it is a timestamp, and not mroe than today. Since it is expected that the user is already given birth to. Anything otherwise, the client gets a bad bad request error message.
5. If the validation rules for dob passes, the request is directed to the controller. 
6. The controller converts the timestamp to datetime format ("YYYY-MM-DD hh:mm:ss") which will be used by the service for calculating the age.
7. The service file for calculating age, has a function that accepts an argument(datetime) and returns the difference in years from the current datetime to the datetime the user was given birth to. 
8. For date conversions, moment(`https://momentjs.com/`) library was used.

___

## Author
### Akande Oremei Chamuke