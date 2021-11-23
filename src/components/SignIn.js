import { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import styles from "./login.module.css"
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const passwordDisplay = () => {
        setShowPassword(!showPassword)
        //    preventDefault(e)
    }
    const sendData=(e)=>{
        // e.preventDefault()
    }
    return (
        <Fragment>
            <div className={styles.box}>
                <form onSubmit={sendData}>
                    <h4>Email</h4>
                    <input type="email" placeholder="E-mail" />
                    <h4>Password</h4>
                    <input type={showPassword ? "text" : "password"} placeholder="Password" />
                    <p> <input type="checkbox"  /> Admin ? </p>
                    <button type="submit">Sign In</button>
                </form>
                <button  className={styles.showPassword} onClick={passwordDisplay}>{showPassword?"hide":"show"} password</button>
            </div>
        </Fragment>
    )
}
export default SignIn