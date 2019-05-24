const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

 const userModel = mongoose.model('Users', userSchema);

 export function  createUser(userData) {
    const user = new User(userData);
    return user.save();
}

return User.findById(id).then((result) => {
    result = result.toJSON();
    delete result._id;
    delete result.__v;
    return result;
});
};