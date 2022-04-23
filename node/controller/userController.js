
const mongoose = require('mongoose');

const User = mongoose.model('User');
const bcrypt = require('bcryptjs');



module.exports.register = (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}


module.exports.signIn = (req, res, next) => {
    console.log("signIn");
   
    var u = new User();
    u.username = req.body.username;
    u.email = req.body.email;
    u.password = req.body.password;
    User.findOne({email : u.email}, (err, user) => {
        console.log("hello"); 
        console.log(u.password + " "+u.email);
        if(!err){
            console.log(u.email);
            if(user){
                console.log("user");
                bcrypt.compare(u.password, user.password, (err, data) => {
                    //if error than throw error
                    if (err) throw err
    
                    //if both match than you can do anything
                    if (data) {
                        return res.status(200).json({ msg: "Login success" })
                    } else {
                        return res.status(401).json({ msg: "Invalid credencial" })
                    }
    
                })
            }

            else
                return res.status(400).send('User not registerd');
       }
           
                   
           else
                   console.log('Error in fetching data: ' + JSON.stringify(err, undefined, 2));

   }) 
    
            }
        
  
         
                 
            
