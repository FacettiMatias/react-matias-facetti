import { TextField } from "@mui/material";
import {React, useState } from "react";

const Checkout = () => {
    const [info,setInfo] =useState({
        nombre:"",
        apellido:"",
        email:""
    })
    
   const handleChange= (event) => {
    let {name,value} =event.target
    setInfo({...info,[name]:value})
    }
    
    
    const handleSubmit = (event) =>{
        event.preventDefault()
       console.log(info);
        
    }
    return (
        <form onSubmit={handleSubmit}>
			<TextField  id="standard-basic" variant="standard" type="text" onChange={handleChange} label="nombre" name="nombre" />
			<TextField id="standard-basic" variant="standard" type="text" onChange={handleChange}  label="apellido" name="apellido" />
			<TextField id="standard-basic" variant="standard" type="email"  onChange={handleChange} label="email" name="email"/>
            <button>submit</button>
		</form>
	);
};

export default Checkout;
