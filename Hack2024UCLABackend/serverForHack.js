require('dotenv').config();
const fs = require('fs');
const cors = require("cors");
const express = require("express");
const http = require('http');
const MQTT = require('mqtt');
const APP = express();
const server = http.createServer(APP);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const CLIENTID = "frontend";

const client = MQTT.connect(process.env.CONNECT_URL, {
  clientId: CLIENTID,
  clean: true,
  connectTimeout: 3000,
  username: process.env.MQTT_USER,
  password: process.env.MQTT_PASS,
  reconnectPeriod: 10000,
  debug: true,
  rejectUnauthorized: false // Add this line for testing, should be removed in production
});

// Used for debugging 

client.on("error", function (error) {
  console.error("Connection error: ", error);
});

// client.on("close", function () {
//   console.log("Connection closed");
// });

// client.on("offline", function () {
//   console.log("Client went offline");
// });

// client.on("reconnect", function () {
//   console.log("Attempting to reconnect...");
// });

// MQTT Connection

client.on('connect', async () => {
  console.log("Connected");

  client.subscribe("ultrasonic", (err) => {
    if (err) {
      console.error("Subscription error for 'ultrasonic': ", err);
    } else {
      console.log("Subscribed to 'ultrasonic'");
    }
  });

  client.subscribe("temp&&humidity", (err) => {
    if (err) {
      console.error("Subscription error for 'temp&&humidity': ", err);
    } else {
      console.log("Subscribed to 'temp&&humidity'");
    }
  });
});


const corsOptions = {
  origin: '*'
};

APP.use(cors(corsOptions));
APP.use(express.json());

// Readings from sensors 
let latestTempHumidity = null;
let latestUltrasonic = null;

io.on("connection", (socket) => {
  console.log("Frontend connected to socket");

  // Send the latest sensor data to the newly connected client
  if (latestTempHumidity) {
    socket.emit('temp&&humidity', latestTempHumidity);
  }
  if (latestUltrasonic) socket.emit('ultrasonic', latestUltrasonic);

//test
  socket.on('example_topic', (message) => {
    console.log('Received direction message from frontend:', message);
    client.publish("example_topic_pico", message);
  });



  // Listen for direction messages from the frontend
  socket.on('send-direction', (message) => {
    console.log('Received direction message from frontend:', message);
    client.publish("direction", message);
  });

  // Listen for arm value messages from the frontend
  socket.on('send-arm-value', (message) => {
    console.log('Received arm value message from frontend:', message);
    client.publish("arm", message);
  });

  socket.on('send-pinch-value', (message) => {
    console.log('Received arm value message from frontend:', message);
    client.publish("pinch", message.toString());
  });

  socket.on("disconnect", () => {
    console.log("Frontend disconnected from socket");
  });

});

setInterval(() => {
    if (latestTempHumidity) io.emit('temp&&humidity', latestTempHumidity);
    if (latestUltrasonic) io.emit('ultrasonic', latestUltrasonic);
}, 1000);

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});

client.on('message', (TOPIC, payload) => {
  console.log("Received from broker:", TOPIC, payload.toString());
  if( TOPIC === 'temp&&humidity' ) {
    latestTempHumidity = payload.toString();
  }
  else if ( TOPIC === 'ultrasonic' ) {
    latestUltrasonic = payload.toString();
  }
});