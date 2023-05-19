LibLabs Lord of the Rings API Project
========================================

This is a React Vite project that allows you to make requests to an API of the Lord of the Rings. The project is set up with Vite.

 ![Screen_Recording_2023-05-19_at_14_23_13_AdobeExpress](https://github.com/gabrielmaxgb/gabriel_max_Project/assets/38226225/4978bfd4-480a-4ad0-b62a-e1e7332c91ce)

Project Setup
-------------

To get started with this project, please follow these steps:

1.  Clone the repository to your local machine using the following command:

    `git clone https://github.com/gabrielmaxgb/gabriel_max_Project.git`

2.  Navigate to the project directory:

    `cd gabriel_max_Project`

3.  Install the dependencies using npm or Yarn:

    `npm install`

4.  Create a `.env` file in the root of the project and add the following API endpoint and API key:

    `VITE_BASE_URL=https://the-one-api.dev/v2`<br> 
    `VITE_API_KEY=y6NuZPtW3Lc8VXb29KhV`

5.  Start the development server:

    `npm run dev`

    This will start the development server probably at `http://localhost:5173` and open the project in your default browser.

Features
--------

### 1\. Fetch features

The project provides a simple example of fetching characters from the Lord of the Rings API. The `CharacterList` component is already set up to make a request to the API and display the list of movies, characters and quotes.

### 2\. API Integration

The project uses ReactQuery, a popular HTTP client, to make requests to the Lord of the Rings API. The API base URL is stored in the `.env` file as `VITE_API_URL`. You can modify this value to point to a different API if needed.

The example in this project fetches movies, characters and quotes, but you can make requests to other endpoints of the API by creating new functions or components and using ReactQuery to send the requests.

### 3\. Routing

React Router is set up in the project to handle routing. Currently, there is only four routes defined. You can add more routes by modifying the `/routes/AppRoutes.ts` component.

### 4\. Styling

This project uses Material UI with emotion for styling.


AlegreyaSC-Regular.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-Italic.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-Medium.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-MediumItalic.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-Bold.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-BoldItalic.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-ExtraBold.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-ExtraBoldItalic.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-Black.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
AlegreyaSC-BlackItalic.ttf: Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)
