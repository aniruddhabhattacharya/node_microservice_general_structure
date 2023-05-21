const mongoose = require('mongoose');

// // Define the user schema
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });






/* Professional Ways
*********************
// Create the User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 100,
    lowercase: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  age: {
    type: Number,
    min: 0,
    max: 150,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Virtual property for full name
userSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

// Pre-save middleware for hashing password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // Hash password logic here
    // Example using bcrypt:
    // this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Static method to find users by name
userSchema.statics.findByName = function (name) {
  return this.find({ name });
};

// Instance method to validate password
userSchema.methods.validatePassword = async function (password) {
  // Password validation logic here
  // Example using bcrypt:
  // return bcrypt.compare(password, this.password);
};


*/






// Create the User model
const User = mongoose.model('User', userSchema);

var models = {
    getAllData: async (req, res) => {
        const userId = req.params.id;
        const query = { ...queries.getUserById }; // Create a copy of the query object
        query.query._id = userId; // Replace the <id> placeholder with the actual user ID
        const Model = mongoose.model(query.model);

        Model.findOne(query.query, query.options)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json(user);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    }
}

module.exports = models;
