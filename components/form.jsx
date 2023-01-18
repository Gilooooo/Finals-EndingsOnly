import styles from "../components/form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import Axios from "axios";

export default function FORM(){
    const [firstName, setfirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Address, setAddress] = useState("")
    const [old_stud, setold_stud] = useState("")
    const [Reason, setReason] = useState("")
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object().shape({
        firstName: yup.string().required("The First Name is Required!"),
        LastName: yup.string().required("The Last Name is Required!"),
        Email: yup.string().email().required(),
        Mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        Address: yup.string().required(),
        old_stud: yup.string().required(),
        Reason: yup.string().required("Are you old student or not?"),
    });
    
    const{register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        Axios.post("http://localhost:8080/api/insert", {
            firstName:firstName,
            LastName:LastName,
            Email:Email,
            Mobile:Mobile,
            Address:Address,
            old_stud:old_stud,
            Reason:Reason,
    }).then(() => {
        alert("successful insert");
    });
    }; 

    return(
        <div>
            <div className={styles.form}>
                <h1>REGISTRATION FORM</h1>
            </div>
                <div onSubmit={handleSubmit(submitForm)} className={styles.container1}>          
                        <div  className={styles.container2}>
                            <form >
                                <h3>FIRSTNAME</h3>
                                    <input type="text"  className={styles.input} {...register("firstName")} 
                                    onChange={(e) => {setfirstName(e.target.value)}}/><br /><br />
                                        <p>{errors.firstName?.message}</p><br />

                                <h3>EMAIL</h3>
                                    <input type="text"  className={styles.input} {...register("Email")}
                                    onChange={(e) =>{setEmail(e.target.value)}}/><br /><br />
                                        <p>{errors.Email?.message}</p><br />

                                <h3>ADDRESS</h3>
                                    <input type="text"  className={styles.input} {...register("Address")}
                                    onChange={(e) => {setAddress(e.target.value)}}/><br /><br />
                                        <p>{errors.Address?.message}</p><br />
                            </form>
                            <form >
                                <h3>LASTNAME</h3>
                                    <input type="text"  className={styles.input} {...register("LastName")}
                                    onChange={(e) =>{setLastName(e.target.value)}}/><br /><br />
                                        <p>{errors.LastName?.message}</p><br />

                                <h3>MOBILE NUMBER</h3>
                                    <input type="number"  className={styles.input} {...register("Mobile")}
                                    onChange={(e)=>{setMobile(e.target.value)}}/><br /><br />
                                        <p>{errors.Mobile?.message}</p><br />

                                <div className={styles.option}>
                                    <h3>OLD TUP STUDENT?</h3><br />
                                    <div className={styles.option1}>
                                        <label htmlfor="yes" >YES</label>
                                            <input type="radio" name="Option" value="yes" className={styles.radio} {...register("old_stud")}
                                            onChange={(e) =>{setold_stud(e.target.value)}}/>
                                        <label htmlfor="no" >NO</label>
                                            <input type="radio" name="Option" value="no" className={styles.radio} {...register("old_stud")}
                                            onChange={(e) =>{setold_stud(e.target.value)}} /><br />
                                                
                                    </div>
                                        <p>{errors.old_stud?.message}</p><br />
                                </div>    
                                        <input type="text" placeholder="Why do you want to study here?" className={styles.reason} {...register("Reason")}
                                        onChange={(e) =>{setReason(e.target.value)}}/><br />  
                                            <p>{errors.Reason?.message}</p><br />     
                                                <button >SUBMIT</button>
                                        
                            </form>
                        </div>
                    <div className={styles.image}>
                        <img src="image-removebg-preview (1) 2.png" />
                    </div>  
                
                </div>
                    
        </div>
    )   
}