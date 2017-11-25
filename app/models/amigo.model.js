var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AmigoSchema = new Schema({
  name: String,
  amigo: String
});

mongoose.model('Amigo', AmigoSchema);
