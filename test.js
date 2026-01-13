const getMessage = require("./app");

if (getMessage() !== "Hello from Production Build 🚀") {
  console.error("❌ Test failed");
  process.exit(1);
}

console.log("✅ Test passed");
