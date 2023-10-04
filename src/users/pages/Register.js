import React, {useState , useContext} from "react";
import {useHistory} from "react-router-dom";
import { LoginContext } from "../../common/components/context";
import "./Register.css";

const Register =()=>{
    const loggedin= useContext(LoginContext);
    const history= useHistory();
    const [error, setError]=useState(null);
    const [picture, setPicture]=useState();
    const [newlogin, setNewlogin]=useState({
        name:"",
        email:"",
        password:""
    });
    const submitHandler= async (event)=>{
        event.preventDefault();
        setError(null);
        try{
            const formdata= new FormData();
            formdata.append("name", newlogin.name);
            formdata.append("email", newlogin.email);
            formdata.append("password", newlogin.password);
            formdata.append("pic", picture);
            const response =await fetch("http://localhost:4000/api/users/register",
                {
                    method: "POST",
                    body: formdata,
                    // headers:{
                    //     "Content-type":"application/json",
                    // },
                    // body: JSON.stringify({
                    //     name: newlogin.name,
                    //     email: newlogin.email,
                    //     password: newlogin.password,
                    // }),
                }
            );

            const responseData= await response.json();
            console.log("register page :", responseData);
            if(!response.ok){
                throw new Error(responseData.message);
            }
            history.push('/login');
            // loggedin.login(responseData.message._id);
        }
        catch(err){
            alert(err.message, ()=>{
                setError(null);
            });
            setError(err.message);
        }
    };
    
    const changeHandler=(event)=>{
        const inputname=event.target.name;
        const newValue= event.target.value;

        setNewlogin(previousValue=>{
            if(inputname ==="signupname"){
                return{
                    name:newValue,
                    email:previousValue.email,
                    password:previousValue.password,
                };
            }
            else if (inputname==="signupemail"){
                return{
                    name:previousValue.name,
                    email:newValue,
                    password:previousValue.password,
                };
            }
            else if (inputname==="signuppassword"){
                return{
                    name:previousValue.name,
                    email:previousValue.email,
                    password:newValue,
                };
            }
        });
    };

    const getPicHandler=(event)=>{
        let picfile;
        if(event.target.files && event.target.files.length === 1){
            picfile=event.target.files[0];
            setPicture(picfile);
    // console.log(picfile);
        }else{
            alert("Photo not uploaded", ()=>{
                setError(null);
            });
        }
    };

    console.log(error);
    console.log(loggedin);

    return (
        <form className ="login-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label>
                    Name
                    <input 
                        name="signupname"
                        type="name"
                        required
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div className="form-control">
                <label>
                    Email
                    <input 
                        name="signupemail"
                        type="email"
                        required
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div className="form-control">
                <label>
                    Password
                    <input 
                        name="signuppassword"
                        type="password"
                        required
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Upload Picture
                    <input name ="newimagefile"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    required
                    className="inputfile"
                    onChange={getPicHandler}/>
                </label>
            </div>
            <div className="form-control">
                <button>Signup</button>
            </div>

        </form>
    )

}

export default Register;