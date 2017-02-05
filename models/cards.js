
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var cardSchema = new mongoose.Schema({
    src: String,
    title: String,
    content: String,
    link: String,
    titleButton: String
});

// Return model
module.exports = restful.model('Cards', cardSchema);
