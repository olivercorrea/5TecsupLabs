const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  
  const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456'
  });
  
  newUser.save().then(() => {
    console.log('New user created!');
  }).catch((error) => {
    console.error('Error creating user:', error);
  });
  
  User.find().then((users) => {
    console.log('All users:', users);
  }).catch((error) => {
    console.error('Error retrieving users:', error);
  });
