 let mongoose = require('mongoose');
  express = require('express')
  router = express.Router();
let UserSchema=  require('../models/usermodel')


router.route('/').get((req,res)=>{

    console.log('sucess')
    res.send('work')
})



router.route('/add').post(async(req,res)=>{
    try{
        
    const {name,email,mobile,password} = req.body;


    let User = new UserSchema({

        name,email,mobile,password

    })


    const saveUser = await User.save();
    console.log(saveUser);

    res.status(200).json(saveUser)
    }
    catch(e){

        console.log(e)
    }
})

router.route('/get').get(async(req,res)=>{

    await UserSchema.find((err,data)=>{

        if(err){

            res.json(err)

            console.log(err)
        }
        else{

            res.json(data)
        }
    })
})


router.route('/delete/:id').delete(async(req,res)=>{


    await UserSchema.findByIdAndDelete(req.params.id,(err,data)=>{


        if(err){

            res.json(err)

            console.log(err)
        }
        else{

            res.json(data)
            console.log(data)
        }
    })
})


router.route('/get/:id').get(async(req,res)=>{

    await UserSchema.findById(req.params.id,(err,data)=>{

        if(err){

            res.json(err)

            console.log(err)
        }
        else{

            res.json(data)
            console.log(data)
        }

    })
})





  module.exports = router;