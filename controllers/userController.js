import User from "../models/User"

exports.addUser=(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;

    const newUser = new User({
    	name,
    	email,
    	role,
    });

    newUser.save()
        .then(() => res.json('User successfully created!'))
        .catch(err => res.status(400).json('Error: ' + err));
}


exports.getUsers=(req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.deleteUser=(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
}