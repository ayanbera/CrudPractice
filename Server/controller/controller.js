var Ayan = require('../model/model');

//Cerate and save user
exports.createUser = (req, res) => {

    //validate request
    if(!req.body) {
        res.status(400).send({message: "Content can not empty"});
        return;
    }

    //new users create a new instance of Userdb and storing in the variabale
    const user = new Ayan({
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
    Ayan.find()
  .then(user => {
      res.send(user)
  })
  .catch(err => {
      res.status(500).send({message: err.message || "Error Occured"})
  })
}

//Update
exports.update = async ( req, res) => {
    if(!req.body) {
       return res
       .status(400)
       .send({message: err.message || "Empty body"})
    }

    const id = req.params.id;
    await Ayan.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: `cannot update user with ${id} Maybe user not found`});
        } else {
            res.status(200).send(data);
        }
    })
    .catch(err => {
        res.status(500).send({message:"Error update user infromation"});
    })
};

exports.del = ( req, res) => {
    const id = req.params.id;
    Ayan.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res.status(404).send({message:`Data cannot delete with this ${id}`});
        } else {
            res.send({
                message: "User deleted successfully"
            })
        }
    })
    .catch(err => {
        res.status(500).send({message:`Could not delete user with iD ${id}`});
    })
};
