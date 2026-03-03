const mongoose = require("mongoose");

const getDBStatus = () => {
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting"
  };
  return states[mongoose.connection.readyState] || "unknown";
};

module.exports = getDBStatus;
