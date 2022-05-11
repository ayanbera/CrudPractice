var Userdb = require('../model/model');

//Cerate and save user
exports.create = (req, res) => {

    //validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not empty"});
        return;
    }

    //new users create a new instance of Userdb and storing in the variabale
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    
    //save user in the database
    user.save(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while creating a create operation"
        });
    });
}

//retireve and return all users//retrieve and return a single user
exports.find = ( req, res) => {

}

//Update
exports.update = ( req, res) => {

};

exports.delete = ( req, res) => {

};
