import styles from "../components/form.module.css";

export default function FORM(){
    return(
        <div>
            <div className={styles.form}>
                <h1>REGISTRATION FORM</h1>
            </div>
                <div className={styles.container1}>          
                        <div className={styles.container2}>
                            <form>
                                <h3>FIRSTNAME</h3>
                                <input type="text" className={styles.input}/><br /><br />
                                <h3>EMAIL</h3>
                                <input type="text" className={styles.input}/><br /><br />
                                <h3>ADDRESS</h3>
                                <input type="text" className={styles.input}/><br /><br />
                            </form>
                            <form>
                                <h3>LASTNAME</h3>
                                <input type="text" className={styles.input}/><br /><br />
                                <h3>MOBILE NUMBER</h3>
                                <input type="number" className={styles.input}/><br /><br />
                                <div className={styles.option}>
                                    <h3>OLD TUP STUDENT?</h3><br />
                                    <label for="yes" >YES</label>
                                    <input type="radio" name="option" value="yes" className={styles.radio}/>
                                    <label for="no" >NO</label>
                                    <input type="radio" name="option" value="no" className={styles.radio}/><br />
                                </div>    
                                        <input type="text" placeholder="Why do you want to study here?" className={styles.reason}/><br />
                                        <button>SUBMIT</button>
                            </form>
                        </div>
                    <div className={styles.image}>
                        <img src="image-removebg-preview (1) 2.png" />
                    </div>  
                
                </div>
                    
        </div>
    )   
}