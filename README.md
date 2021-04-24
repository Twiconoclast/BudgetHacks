# BudgetHacks
![image](https://user-images.githubusercontent.com/70980012/115941670-339f7700-a45b-11eb-8459-fe705a3c3408.png)

## Description
This is a link to [BudgetHacks](https://budgethacks.herokuapp.com/#/), an app that allows users to track transactions and create a budget while earning rewards for keeping up with their budgets.

## Technology Used

### Front-End
* React/Redux
  * Javascript library for building user interfaces.
  * Design simple views for each state in your app. React will efficiently update and render the right component when your data changes.
* Javascript
  * A popular programming language that allows users to implement complex features on web pages.
* Chart.js
  * Efficient way to add charts and graphs to your website.

### Back-End
* Mongo DB
  * Non-relational database.
* Node.js
  * A platform built on Chrome's Javascript runtime for easily coding fast and scalable network applications. 
  * Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Dependencies
* Express.js
  * Web framework that lets you structure a web application to handle multiple HTTP requests at a specific URL. 
* Mongoose
  * Object data modeling library for Mongo DB which manages the relationship between data. 
  * Provides schema foundation.
  * Used to translate between objects in code and the representation of those objects in Mongo DB.
* Passport
  * Authentication middleware for node.js .
* Passport-Jwt
  * Lets you authenticate endpoints using jsonwebtoken.
* jsonwebtoken
  * Used to authenticate a user without storing their information in the system.
* body-parser
  * A middleware that parses data from a request object (user input).
* bcryptjs
  * Encrypts password with salt.
* Validator
  * Validates the user's inputs and sanitizes strings.

## Features

### Transaction data renders on graphs

1. **Challenge:** Filtering transactions dynamically for trailing three months to illustrate spending trends
   * **Solution:** Map over all user's transactions to check if date matches specific criteria, aggregate total over amount spend over that period

![image](https://user-images.githubusercontent.com/70980012/115942136-8bd77880-a45d-11eb-85f4-d46103fd6056.png)



### Redeem prizes by using point aquired from budgetting

1. **Challenge:** Adding points to the user's point balance for the initial budget
   * **Solution:** Added a counter to the budget schema and checked whether it was the first edit
2. **Challenge:** Updating point balance on account activity and when prize is redeemed
   * **Solution:** Add condition in backend route to check user's point balance with the cost of the prize
 
![image](https://user-images.githubusercontent.com/70980012/115942174-c17c6180-a45d-11eb-997f-d5625c8cc0eb.png)

![image](https://user-images.githubusercontent.com/70980012/115942222-fc7e9500-a45d-11eb-9a45-8605d83f85f7.png)





