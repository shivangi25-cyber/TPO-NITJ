import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ['CSE', 'ECE', 'EE', 'ME', 'CE', 'IT', 'CH','ICE','BT','TT','IPE'],
  },
  year: {
    type: String,
  },
  batch: {
    type: String,
  },
  course:{
    type:String,
    enum:["B.Tech","M.Tech","MBA"]
  },
  address: {
    type: String,
    },
  cgpa: {
    type: String,
   },
  gender: {
    type:String,
     enum: ['Male', 'Female', 'Other'],
  },
  active_backlogs: {
    type: Boolean,
  },
  image: {
    type: String,
    },
  placementstatus: {
        type: String,
        enum: ['notplaced','Below Dream', 'Dream', 'Super Dream'  ],
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
