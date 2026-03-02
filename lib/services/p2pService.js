const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const ioClient = require("socket.io-client");
const fs = require("fs-extra");
const os = require("os");
const QRCode = require("qrcode-terminal");
const path = require("path");   


const getLocalIP = () => {
  const nets = os.networkInterfaces();

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }

  return "localhost";
};

exports.host = (courseName) => {
  const filePath = path.join(__dirname, "../../storage", `${courseName}.json`);

  if (!fs.existsSync(filePath)) {
    console.log("Course not found locally.");
    return;
  }

  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);

  io.on("connection", socket => {
    const data = fs.readJsonSync(filePath);
    socket.emit("course", data);
    console.log("📤 Course sent to peer.");
  });

  const PORT = 5000;

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log("❌ Port 5000 already in use.");
      console.log("Close previous share session or kill process.");
      process.exit(1);
    }
  });

  server.listen(PORT, () => {
    const ip = getLocalIP();
    const joinURL = `http://${ip}:${PORT}`;

    console.log("\n📡 Sharing started!");
    console.log("Scan this QR to join:\n");

    QRCode.generate(joinURL, { small: true });

    console.log("\nOr run:");
    console.log(`offline-learn join ${joinURL}`);
  });
};
exports.join = (address) => {
  const socket = ioClient(address, {
    reconnectionAttempts: 3,
    timeout: 5000
  });

  socket.on("connect", () => {
    console.log("🔗 Connected to host...");
  });

  socket.on("course", data => {
    const storagePath = path.join(__dirname, "../../storage");
    fs.ensureDirSync(storagePath);

    fs.writeJsonSync(
      path.join(storagePath, `${data.title.replace(/\s+/g, "-")}.json`),
      data
    );

    console.log("✅ Course received successfully!");
    process.exit(0);
  });

  socket.on("connect_error", () => {
    console.log("❌ Could not connect to host.");
    process.exit(1);
  });
};