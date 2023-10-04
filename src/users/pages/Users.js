// import React from "react";
// import UsersList from "../components/UsersList";

// const Users = () => {

//     const ALL_USERS =
//     [
//         {
//             id:"u1",
//             name:"XYZ",
//             pic:"https://picsum.photos/200",
//             numberoflocations:5,
//         },
//         {
//             id:"u2",
//             name:"MNO",
//             pic:"https://picsum.photos/200",
//             numberoflocations: 1,
//         },
//     ];

//     return(
//         <UsersList items = {ALL_USERS}/>
//     );
// }

// export default Users;


import React, { useState, useEffect} from "react";
import UserList from "../components/UsersList";
const Users =()=>{
    
    const [savedUsers, setSavedUsers]=useState();
    const [error, setError]=useState();
    
    useEffect(()=> {
        const sendRequest= async()=>{
            try{
                const response = await fetch("http://localhost:4000/api/users");
                
                const responseData= await response.json();
                // console.log(responseData.message);
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                setSavedUsers(responseData.message);
                
            }catch(err){
                alert(err.message, ()=>{
                    setError(null);
                });
                setError(err.message);
            }
        };
        sendRequest();
    }, []);

    console.log(error);

    return(
        <React.Fragment>
            {
                savedUsers && <UserList items={savedUsers} />
            };
        </React.Fragment>
    );
};

export default Users;