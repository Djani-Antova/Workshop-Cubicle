const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },        
    imageUrl: {
        type: String,
        required: true,
        // Add http/http validation

    },
    description: {
        type: String,
        required: true,
        maxLength: 50  
    }, 
    // cubes: {
    //     type: isObjectIdOrHexString,
    //     ref: CubesModel  
    // }
  }); 
  const Accessory = mongoose.model('Accessory', accessorySchema);

  module.exports = Accessory;