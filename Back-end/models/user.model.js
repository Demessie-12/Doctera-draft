import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 10,
  },
  role: {
    type: String,
    default: "customer",
    enum: ["customer", "merchant", "admin", "owner"],
  },
  address: {
    type: String,
  },
  companyName: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
