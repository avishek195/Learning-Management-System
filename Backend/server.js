import app from "./app.js";
import connectionToDb from "./config/dbConnection.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectionToDb();
  console.log(`App is Running at http:localhost:${PORT}`);
});
