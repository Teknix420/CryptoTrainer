const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
const store = new MongoDBStore({
    mongooseConnection: mongoose.connection
})
const sess = {
    secret: 'cryptonite',
    cookie: {},
    resave: true,
    saveUninitialized: true,
    store: store
}

store.on('error', function (error) {
    console.log(error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(session(sess));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.listen(PORT, () => {
    console.log(`App running now on port ${PORT}!`);
});