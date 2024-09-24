
# Game Hub - Game Directory

Game Hub is a web application built using the **RAWG API**, **Vite**, **React**, and **Chakra UI**. It provides a directory for video games where users can explore and filter games by various categories, such as genres, platforms, and more. This website build as part of my learning process with React.

This project is currently deployed on **Vercel**.

## Features

- **Game Directory**: Browse a wide selection of games pulled from the RAWG API.
- **Category Filtering**: Filter games based on genres, platforms, and other categories.
- **Responsive Design**: Optimized for both mobile and desktop devices using Chakra UI.

## Technologies Used

- **RAWG API**: Provides a vast dataset of video games, including detailed information about each game.
- **Vite**: A fast and modern build tool for web development.
- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library to build React applications.
- **Vercel**: Hosting platform for deployment.

## Demo

Check out the live demo [[here](https://<your-vercel-app>.vercel.app)]

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/wendddyh/game-hub.git
cd game-hub
```
### Dependencies
Install
```bash
npm install
```
Install Chakra UI
```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
This website is using data from RAWG API, so, you'll need to set up and API key. Register at [[RAWG](https://rawg.io/)] and get your key.
Create your environment file .env in the root of your project and add:
```
VITE_RAWG_API_KEY=<your-rawg-api-key>
```

### Run the app locally
```bash
npm run dev
```
### Improvements
- **Enhanced Filtering**: Streamlined the filtering area
- **Game In-depth Details**:Add detailed view for each game.
- **User account**: Create a page where user can create an account and add favourite section
