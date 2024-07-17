# fomoFactoryProj

# Real-Time Stock and Crypto Tracker

## Project Overview

This project is a real-time stock and cryptocurrency tracker that fetches data from an API, stores it in a MongoDB database, and displays the most recent data entries in a dynamic table on a web frontend. The frontend also includes a modal to change the stock or crypto being tracked.

## Technologies Used

## Backend: Node.js, Express, MongoDB

## Frontend: React, TypeScript, Redux

## State Management: Redux without localStorage

Features

## Backend

Polls real-time data every few seconds for 5 stocks or cryptocurrencies.
Uses a free demo API CoinGecko to fetch the data.
Stores the fetched data in a MongoDB database.
Frontend
Fetches the most recent 20 real-time data entries for a particular stock or cryptocurrency from the MongoDB database.
Displays the data in a dynamic table that updates in real-time.
Includes a button that opens a modal/popup to allow users to change the stock or cryptocurrency being tracked.

# Project Setup

## Backend:

1.  `cd backend`
    `npm install`
2.  Add the .env file for variables used in the app, it should look like:
    PORT=5000
    MONGO_URI=mongodb://localhost:{PORT}/stock-prices
    API_KEY=CG-\***\*URr\*\***\***\*\***d
3.  To run the backend use `npm run start`.

## Frontend:

1.  `cd frontend`
    `npm install`
2.  To run the frontend use `npm start`.
