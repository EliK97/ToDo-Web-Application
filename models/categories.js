const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const categorySchema = new Schema({   
    title: { type: String, required: true},
    description: String,
  
  workout:{
    type: String,
    enum: ['Torso','Lower','Back'],
   
  },
   travels:{
   type:String,
   enum:['Japan','Greece','United Kingdom'],
  
   },
   motivations:{
    type:String,
    enum:['Health','Study','Reading'],
   },},
   {
    timestamps: true
  });
 
  module.exports = mongoose.model('Category',categorySchema);
  
  