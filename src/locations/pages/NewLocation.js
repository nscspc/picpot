import React, {useState} from "react";
import "./NewLocation.css";

const NewLocation =()=>{
    const [newlocation, setNewlocation]=useState({
        title:'',
        desc:'',
        address:'',
    });

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("new location page : ", newlocation);
    };
    const changeHandler=(event)=>{
        const inputname= event.target.name; // newlocationtitle
        const newValue=event.target.value; // eg :- aaaa

        setNewlocation(previousValue =>{
        if(inputname==="newlocationtitle"){ // as at one time one input will be used
            return {
                title: newValue,
                desc: previousValue.desc,
                address: previousValue.address
            }
        }
        else if (inputname==="newlocationdesc"){
            return {
                title:previousValue.title,
                desc: newValue,
                address:previousValue.address
            }
        }
        else if(inputname==="newlocationaddr"){
            return{
                title: previousValue.title,
                desc: previousValue.desc,
                address:newValue
            }
        }
        })
    };
    return ( 
        <form className="location-form" onSubmit={submitHandler}>
            <div className ="form-control">
                <label>
                    Title 
                    <input 
                        name ="newlocationtitle" 
                        type="text" 
                        required  
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className ="form-control">
                <label>
                    Description
                    <textarea 
                        name ="newlocationdesc" 
                        type="text" 
                        rows="3"
                        required 
                        onChange={changeHandler} 
                    />
                </label>
                </div>
                <div className ="form-control">
                <label>
                    Address
                    <input 
                        name ="newlocationaddr" 
                        type="text" 
                        required  
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>
            

        </form>
          
    )
};

export default NewLocation;