const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true, 
      required: [true, "Email is required"], 
      match: [
        
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      required: true, 
    },
    isAdmin:{
      type:Boolean,
      default:false
    },
    firstName: {
      type: String,
      required: true, 
      trim: true, 
    },
    lastName: {
      type: String,
      required: true, 
      trim: true, 
    },
    title: {
      type: String,
      trim: true, 
    },
    phoneNumber: {
      type: String,
      match: /^[+0-9-]+$/, 
    },
    isActive: {
      type: Boolean,
      default: false, 
    },
    estate: {
      estateId: {
        type: Number,
        required: true, 
      },
      estateName: {
        type: String,
        required: true, 
        trim: true, 
      },
      estateLocation: {
        type: String,
        required: true, 
        trim: true, 
      },
    },
    apartment: {
      apartmentId: {
        type: Number,
        required: true,
      },
      apartmentName: {
        type: String,
        required: true, 
        trim: true, 
      },
      apartmentFloor: {
        type: String,
        trim: true, 
      },
      apartmentType: {
        type: String,
        trim: true,
      },
    },
    electricityBalance: {
      type: Number,
      default: 0, 
    },
    authCode: {
      type: String,
      trim: true, 
    },
    authCodeCreationTime: {
      type: Date,
    },
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
