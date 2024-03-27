const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  outlookEmail: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  outgoingLocation: {
    type: String,
    required: true
  },
  exitTime: {
    type: Date,
    default: new Date
  },
  rollNumber: {
    type: Number, 
    required: true
  },
  entryTime: {
    type: Date,
    default: null
  },
  roomNumber: {
    type: String,
  },
  hostel: {
    type: String,
  },
  department: {
    type: String,
  },
  program: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true
  },
  exitTime: {
    type: String,
  },
}, {
  timestamps: true,
});

const khokhaEntryModel = mongoose.model('KhokhaEntryModel', formSchema);

module.exports = khokhaEntryModel;