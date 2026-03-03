console.log("=== PHASE 0.3 DEPENDENCY TEST START ===");

try {
  require("xlsx");
  console.log("✔ XLSX OK");
} catch (e) {
  console.log("✘ XLSX FAILED");
}

try {
  require("pdf-parse");
  console.log("✔ PDF-PARSE OK");
} catch (e) {
  console.log("✘ PDF-PARSE FAILED");
}

try {
  require("multer");
  console.log("✔ MULTER OK");
} catch (e) {
  console.log("✘ MULTER FAILED");
}

try {
  require("socket.io");
  console.log("✔ SOCKET.IO OK");
} catch (e) {
  console.log("✘ SOCKET.IO FAILED");
}

try {
  require("express-rate-limit");
  console.log("✔ RATE-LIMIT OK");
} catch (e) {
  console.log("✘ RATE-LIMIT FAILED");
}

try {
  require("helmet");
  console.log("✔ HELMET OK");
} catch (e) {
  console.log("✘ HELMET FAILED");
}

try {
  require("express-validator");
  console.log("✔ EXPRESS-VALIDATOR OK");
} catch (e) {
  console.log("✘ EXPRESS-VALIDATOR FAILED");
}

try {
  require("bcryptjs");
  console.log("✔ BCRYPT OK");
} catch (e) {
  console.log("✘ BCRYPT FAILED");
}

try {
  require("jsonwebtoken");
  console.log("✔ JWT OK");
} catch (e) {
  console.log("✘ JWT FAILED");
}

try {
  require("@tensorflow/tfjs");
  console.log("✔ TENSORFLOW OK");
} catch (e) {
  console.log("✘ TENSORFLOW FAILED");
}

console.log("=== PHASE 0.3 DEPENDENCY TEST END ===");
