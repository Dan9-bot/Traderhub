const WebSocket = require("ws");

const appId = process.env.DERIV_APP_ID;

const socket = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${appId}`
);

socket.on("open", () => {
    console.log("Connected to Deriv");
});

socket.on("message", (data) => {
    console.log(data.toString());
});

socket.on("error", (err) => {
    console.log(err);
});
