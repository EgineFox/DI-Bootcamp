const express = require("express");
const userRoutes = require("./routes/usersRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
