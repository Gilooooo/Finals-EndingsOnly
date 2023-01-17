import styles from "./register.module.css";

export default function REG (){
    return(
        <div className={styles.container}>
            <div className={styles.LEFT}>
                <h1>Registration Form</h1>
                <br></br>
            </div>

            <div className={styles.RIGHT}>
                <h6>Firstname</h6>
                <input type="text"/>
                <h6>Lastname</h6>
                <input type="text"/>
                <h6>Email</h6>
                <input type="text"/>
                <h6>Mobile</h6>
                <input type="number"/>
                <h6>Address</h6>
                <input type="text"/>
                <h6>Old TUP Student?</h6>
                <input type="radio" id="yes" name="Options" value="Yes"/>
<label for="yes">Yes</label><br></br>
                <input type="radio" id="no" name="Options" value="No"/>
<label for="no">No</label>
                <br></br>
                <textarea rows="4" cols="50" placeholder="Why do you want to study here?"> 
                    
                </textarea>
                <br></br>
                <button id="btn">SIGN UP</button>
            </div>
        </div>
    )
}
