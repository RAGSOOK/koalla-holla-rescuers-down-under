# Koala Holla (the noSQL)

This time with 100% more React, Redux, Sagas, Unit Tests, and MongoDB


This must stop (again):
---------------
![Never again, for real!](https://i.makeagif.com/media/8-22-2014/GO_DT4.gif)


## Koala Holla

Our old client, Koala Holla (1976 Llama Comma Drive, Walla Walla WA), has jumped on the bandwagon and is asking for an updated web application using React.

This time around, they care very much about quality. They've read about things like "unit testing" and "small, reusable components" and are very much looking forward to having those things in their version 2.0.


## Technologies

You know so much now! Use All the Things!

* Node
* Express
* React
* Redux
* Redux-Saga
* Jest
* MongoDB and Mongoose

## Setup

- `npm install`
- `npm run server`
- `npm run client`

## Database

They want a mongo database collection that houses this information and can be viewed at any time. The client has provided a file that can imported into your database to get started. To import the data, run the following commands:

1. Make a new database `koalaholla` with robo 3T.
2. In Terminal, navigate to the project folder.
3. Run this command: `mongoimport --db koalaholla --collection koalas --file koalas.js`

## Client needs

Koala Holla has provided a table of their current inventory:

| id | name    | gender | age | ready_to_transfer | notes                            |
|----|---------|--------|-----|------------------|----------------------------------|
| 1  | Scotty  | M      | 4   | Y                | Born in Guatemala                |
| 2  | Jean    | F      | 5   | Y                | Allergic to lots of lava         |
| 3  | Ororo   | F      | 7   | N                | Loves listening to Paula (Abdul) |
| 4  | Logan   | M      | 15  | N                | Loves the sauna                  |
| 5  | Charlie | M      | 9   | Y                | Favorite band is Nirvana         |
| 6  | Betsy   | F      | 4   | Y                | Has a pet iguana                 |

They need the ability to add a Koala to the database. Make a form with the appropriate info. Save the koala in the database. 

They need the ability for mark a Koala ready for transfer. Each koala in your UI needs a button in that reads 'Ready for Transfer'. When the user clicks on the button, it should update the database for the specific Koala. The 'Ready for Transfer' button should only appear for Koalas that haven't yet been marked ready for transfer.

## Unit Testing

Use Jest to unit test wherever you can.

- Authenticated Routes
- Reducers


## STRETCH GOALS (in order of client priority)

1. Ability to delete a specific Koala from the database with a nice confirmation. No built-in `confirm()`! 
2. Ability to toggle the display of Koalas ready for transfer.
3. Add form validation. Mark any missed or broken fields with red or other styles. Don't rely on the built-in `required`.
4. Ability to click on a Koala and see a modal pop up with details
5. Ability to edit other information (Name, Age, Notes) for existing Koalas in the db. This could be done in the above modal or with a client-side route for a single koala: `/#/edit/4`
6. Use Material-UI -- Make it super polished!
