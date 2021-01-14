const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const createError = require("http-errors");
const ToDo = require("./models/todo.model");

require("dotenv").config();

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

// EXPRESS SERVER INSTANCE
const app = express();

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost",
      "http://127.0.0.1",
      "http://127.0.0.1:3000",
    ],
  })
);

// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 30 * 24 * 60 * 60, // 30 days
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

// MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ROUTER
// GET '/TODOLIST' Get all products
app.get("/todo-list/:user", (req, res, next) => {
  console.log("Get todo list");

  console.log("req :>> ", req);
  const user = req.params.user;
  console.log("user :>> ", user);
  ToDo.find({ user: user })
    .then((toDoList) => {
      // console.log("productList :>> ", productList);
      res.status(200).json(toDoList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// POST CREATE TODO ITEM
app.post("/todo-list", (req, res, next) => {
  console.log("Create todo list item");
  const { user, title, body } = req.body;
  ToDo.create({ user, title, body })
    .then((toDoListItm) => {
      // console.log("productList :>> ", productList);
      res.status(200).json(toDoListItm);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// DELETE DELETE TODO ITEM
app.delete("/todo-list", (req, res, next) => {
  console.log("Delete todo list item");
  const { toDoId } = req.body;
  console.log("toDoId :>> ", toDoId);
  ToDo.findByIdAndDelete(toDoId)
    .then((toDoItm) => {
      res.status(200).json(toDoItm);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// PUT UPDATE WHOLE TODO ITEM
app.put("/todo-list", (req, res, next) => {
  console.log("Delete todo list item");
  const { user, title, body } = req.body;
  console.log("toDoId :>> ", toDoId);
  ToDo.findByIdAndUpdate(toDoId, { user, title, body })
    .then((toDoItm) => {
      res.status(200).json(toDoItm);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// PUT UPDATE WHOLE TODO ITEM
app.put("/todo-list", (req, res, next) => {
  console.log("Delete todo list item");
  const { user, title, body } = req.body;
  console.log("toDoId :>> ", toDoId);
  ToDo.findByIdAndUpdate(toDoId, { user, title, body })
    .then((toDoItm) => {
      res.status(200).json(toDoItm);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});
// ERROR HANDLING
//  Catch 404 and respond with error message
// Shows a 404 error with a message when no route is found for the request
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" }); // .send( JSON.stringify(  { code: 'not found' }  ) )
});

// Catch `next(err)` calls
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;
