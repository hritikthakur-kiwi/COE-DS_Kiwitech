import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  email:  {
    type: String,
    required: true,
    unique: true,
  },
  username:  {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type:String,
    required: true
  }
}, { timestamps: {} });

const Users = models.Users || model('Users', userSchema);

export default Users;