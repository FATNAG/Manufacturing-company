require('dotenv').config();
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASSWORD;
var dbHost = process.env.DB_HOST;
module.exports = {
    //urlDatabase:'mongodb+srv://admin:1234@cluster0.edu3m.mongodb.net/reok?retryWrites=true&w=majority'
    urlDatabase: `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}`
}