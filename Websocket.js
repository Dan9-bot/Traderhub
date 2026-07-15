const WebSocket = require("ws");

function connectDeriv(appId, token) {
    const socket = new WebSocket(
        `wss://ws.derivws.com/websockets/v3?app_id=${appId}`
    );

    socket.on("open", () => {
        console.log("Connected to Deriv");

        socket.send(JSON.stringify({
            authorize: token
        }));
    });

    socket.on("message", (data) => {
        console.log(data.toString());
    });

    socket.on("error", (err) => {
        console.error("WebSocket Error:", err.message);
    });

    socket.on("close", () => {
        console.log("Connection closed");
    });

    return socket;
}

module.exports = connectDeriv;
