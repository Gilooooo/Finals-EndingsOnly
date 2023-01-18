import styles from "../components/Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import Axios from "axios";

export default function FORM (){
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
        old_stud: yup.string().required("Are you old student or not?"),
        Reason: yup.string().required(),
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
        <div  className={styles.main}>
            <div className={styles.register}>
                <h1>Registration Form</h1>
            </div>
                <div onSubmit={handleSubmit(submitForm)} className={styles.container1}>
                    <form  className={styles.container2}>
                        <div className={styles.names}>
                            <div>
                                <h3>FIRST NAME</h3>
                                <input type="text" 
                                    {...register("firstName")} 
                                    onChange={(e) => {setfirstName(e.target.value)}}
                                    />
                                    <p>{errors.firstName?.message}</p><br />
                            </div>
                            <div>
                                <h3>LAST NAME</h3>
                                <input type="text" 
                                    {...register("LastName")}
                                    onChange={(e) =>{setLastName(e.target.value)}}
                                    /> 
                                    <p>{errors.LastName?.message}</p><br />
                            </div>            
                        </div>
                        <div className={styles.enumber}>
                            <div>
                                <h3>EMAIL</h3>
                                <input type="text" 
                                    {...register("Email")}
                                    onChange={(e) =>{setEmail(e.target.value)}}
                                    />
                                    <p>{errors.Email?.message}</p><br />
                            </div>
                            <div>
                                <h3>MOBILE NUMBER</h3>
                                <input type="number" 
                                    {...register("Mobile")}
                                    onChange={(e)=>{setMobile(e.target.value)}}
                                    />
                                    <p>{errors.Mobile?.message}</p><br />  
                            </div>      
                        </div>
                        <div className={styles.oldaddress}>      
                            <div className={styles.address}>
                                <h3>ADDRESS</h3>
                                    <input type="text" 
                                        {...register("Address")}
                                        onChange={(e) => {setAddress(e.target.value)}}
                                        />
                                        <p>{errors.Address?.message}</p><br />
                                        
                            </div>                               
                                <div className={styles.old}>
                                    <h3 className={styles.olds}>OLD TUP STUDENT?</h3>
                                        <div className={styles.options}>
                                            
                                            <label htmlFor="Yes">Yes</label>
                                            <input type="radio" name="option" value="Yes"  
                                                {...register("old_stud")}
                                                onChange={(e) =>{setold_stud(e.target.value)}}
                                                />
                                        <label htmlFor="No">No</label>
                                            <input type="radio" name="option" value="No"
                                                {...register("old_stud")}
                                                onChange={(e) =>{setold_stud(e.target.value)}}
                                                />  
                                        </div>  
                                        <p>{errors.old_stud?.message}</p><br />                                
                                </div>
                                
                        </div>
                        <div className={styles.reason}>
                            <input type="text" placeholder="Why do you want to study here?" 
                                {...register("Reason")}
                                onChange={(e) =>{setReason(e.target.value)}}
                                />
                                
                                    
                        </div>
                        <p>{errors.Reason?.message}</p><br /> 
                                    <button>SUBMIT</button>
                        <div>
                            
                        </div>
                    </form>
                    <div>        
                        <img src="image-removebg-preview (1) 2.png" />
                    </div>   
            </div>      
        </div>
    )
}