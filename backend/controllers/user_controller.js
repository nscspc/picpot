const MyError = require("../models/error");
const User=require("../models/user");
const ALL_USERS=[
    {
        id:"u1",
        name:"Xyz",
        email:"xyz@picpot.com",
        password:"xyz123",

    },
    {
        id:"u2",
        name:"Mno",
        email:"mno@picpot.com",
        password:"mno123",

    },
];

// exports.getUsers = async(req, res, next) => {
//     res.status(200).json({ result: "success", message: ALL_USERS });
// };

// exports.register = async(req, res, next) => {
//     const {name, email, password}=req.body;

//     const findUser=ALL_USERS.find((user)=>{
//         return user.email===email;
//     });
//     if(findUser){
//         return next(new MyError("Email already exist",422)); // 422 is used for unprocessable entity.
//     }

//     const newuser={
//         id:"u"+Math.trunc(Math.random()*100),
//         name,
//         email,
//         password,
//     };
    
//     ALL_USERS.push(newuser);
//     res.status(201).json({result:"success", message: newuser});
// };

// exports.login = async(req, res, next) => {
//     const {email,password}=req.body;

//     const findUser=ALL_USERS.find((user)=>{
//         return user.email===email;
//     });
    
//     if(!findUser || findUser.password !== password){
//         return next(new MyError("Email or password not found", 401)); // 401 is for unauthorized.
//     }

//     res .status(200).json({result:"success",message:findUser});
// };

exports.getUsers = async(req, res, next) => {
    let all_users;
    try{
        all_users= await User.find({}, "-password"); // to not show the password of the user in the response of all users.

    } catch(err){
        return next(new MyError("Database error: Cannot get users", 500));
    }
    res.status(200).json({ result: "success", message: all_users });
};

exports.register = async(req, res, next) => {
    const {name, email, password}=req.body;
    let findUser;

    try{
        findUser=await User.findOne({email: email});
    }catch(err){
        return next(new MyError("Database Error: Something Bad happenend", 500))
    }

    if(findUser){
        return next(new MyError("Email already exist",422 ));
    }

    const newuser=new User({
        name,
        email,
        pic:req.file.path,//"https://picsum.photos/200",
        password,
        locationsid:[]
    });

    try{
        await newuser.save();
    }catch(err){
        return next(new MyError("Database Error: Cannot register:" + err, 500));
    }
    
    res.status(201).json({result:"success", message: newuser});
};

exports.login = async(req, res, next) => {
    const {email,password}=req.body;
    let findUser;
    try{
        findUser=await User.findOne({email:email});
    }catch(err){
        return next(new MyError("Database Error: Something Bad Happenend", 500));
    }
    
    if(!findUser || findUser.password !==password){
        return next(new MyError("Email or password not found", 401));
    }

res .status(200).json({result:"success",message:findUser});
};