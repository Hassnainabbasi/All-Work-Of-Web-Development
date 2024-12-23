import bycrpt from 'bcryptjs'
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bycrpt.hash(this.password, 10);
    }
    next();
  });

const User = mongoose.model('User', userSchema);

export default User;