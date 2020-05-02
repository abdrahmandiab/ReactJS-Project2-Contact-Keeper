// When using Node, we cannot use import unless we use TypeScript or Babble etc.
// Otherwise we have to use this syntax which is called Common JS
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
