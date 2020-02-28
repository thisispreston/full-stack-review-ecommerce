require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  authCtrl = require("./controllers/authController"),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET
  })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database Connected")
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
})

//AUTH ENDPOINTS
// app.post('/api/login')
// app.post('/api/register')
// app.post('/api/logout')
// app.get('/api/check')

//PRODUCT ENDPOINTS
// app.get('/api/products')

//CART ENDPOINTS
// app.post('/api/carts')
// app.get('/api/carts')


