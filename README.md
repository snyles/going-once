# Going Once!

Going once is a web application built to promote sustainability and recycling by creating a platform for users to share unwanted items and services with their community. 

# Getting Started

[Click Here](https://going-once.herokuapp.com) to visit Going Once deployed on Heroku

# Planning and Design

[Miro Board](https://miro.com/app/board/o9J_l5vjpXw=/)

[Figma WireFrames](https://www.figma.com/file/C138pCE67HwXMe59iTKmMU/?node-id=51%3A148)

# Design and Development Team

## Designers
Rachel Covert [LinkedIn](https://www.linkedin.com/in/rachelcovertdesign/) 

Katherine Gomez [LinkedIn](https://www.linkedin.com/in/katherine-v-gomez-34343393/)

Lena Marakova [LinkedIn](https://www.linkedin.com/in/elenamarakova/)

## Developers

Sean Niles [LinkedIn](https://www.linkedin.com/in/sean-niles/)

Matt Harold [LinkedIn](https://www.linkedin.com/in/mnharold/)

Antonio Shivers [LinkedIn](https://www.linkedin.com/in/antonioshivers/)

# Screenshots 

![Screenshot 1](https://raw.githubusercontent.com/SummerSquads-Blue/going-once/main/src/assets/screenshots/GoingOnce-screenshot1.png)
![Screenshot 2](https://raw.githubusercontent.com/SummerSquads-Blue/going-once/main/src/assets/screenshots/GoingOnce-screenshot2.png)
![Screenshot 3](https://raw.githubusercontent.com/SummerSquads-Blue/going-once/main/src/assets/screenshots/GoingOnce-screenshot3.png)
![Screenshot 4](https://raw.githubusercontent.com/SummerSquads-Blue/going-once/main/src/assets/screenshots/GoingOnce-screenshot4.png)
![Screenshot 5](https://raw.githubusercontent.com/SummerSquads-Blue/going-once/main/src/assets/screenshots/GoingOnce-screenshot5.png)

# Technologies and Resources Used
* MongoDB with Mongoose 
* Express
* Node 15.9
* React 17

* Styled Components
* Material-UI

* Google Maps Javascript API
* Google Maps Geocode API
* Google Maps Places API
  
# Running Locally
To download and run locally, clone and/or fork this repo.
After running ```npm i```, run ```npm start``` to run the React frontend, and ```node server.js``` or ```nodemon server``` to start the Express / MongoDB backend. The app should be available on localhost:3000.

## Environmental Variables

You will need the following environmental variables to run locally

```REACT_APP_GOOGLE_MAPS_API_KEY``` A Google Maps API key, you can learn more about optaining one [here](https://developers.google.com/maps/documentation/javascript/cloud-setup)

```DATABASE_URL```  A MongoDB connection string, such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

```SECRET``` Any random string, used for Json Web Token encryption
