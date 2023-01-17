import styles from "../components/form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



export default function FORM(){
    const schema = yup.object().shape({
        firstName: yup.string().required("The First Name is Required!"),
        LastName: yup.string().required("The Last Name is Required!"),
        Email: yup.string().email().required(),
        Mobile: yup.number().required("The Mobile Number is required!"),
        Address: yup.string().required(),
        Option: yup.string().required(),
        Reason: yup.string().required()
    });
    
    const{register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
    } 
    return(
        <div>
            <div className={styles.form}>
                <h1>REGISTRATION FORM</h1>
            </div>
                <div onSubmit={handleSubmit(submitForm)} className={styles.container1}>          
                        <div  className={styles.container2}>
                            <form >
                                <h3>FIRSTNAME</h3>
                                <input type="text"  className={styles.input} {...register("firstName")}/><br /><br />
                                <p>{errors.firstName?.message}</p><br />

                                <h3>EMAIL</h3>
                                <input type="text"  className={styles.input} {...register("Email")}/><br /><br />
                                <p>{errors.Email?.message}</p><br />

                                <h3>ADDRESS</h3>
                                <input type="text"  className={styles.input} {...register("Address")}/><br /><br />
                                <p>{errors.Address?.message}</p><br />
                            </form>
                            <form >
                                <h3>LASTNAME</h3>
                                <input type="text"  className={styles.input} {...register("LastName")}/><br /><br />
                                <p>{errors.LastName?.message}</p><br />

                                <h3>MOBILE NUMBER</h3>
                                <input type="number"  className={styles.input} {...register("Mobile")}/><br /><br />
                                <p>{errors.Mobile?.message}</p><br />

                                <div className={styles.option}>
                                    <h3>OLD TUP STUDENT?</h3><br />
                                    <label for="yes" >YES</label>
                                    <input type="radio" name="Option" value="yes" className={styles.radio} {...register("Option")}/>
                                    <label for="no" >NO</label>
                                    <input type="radio" name="Option" value="no" className={styles.radio} {...register("Option")}/><br />
                                    <p>{errors.Option?.message}</p><br />
                                </div>    
                                        <input type="text"  placeholder="Why do you want to study here?" className={styles.reason} {...register("Reason")}/><br />  
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