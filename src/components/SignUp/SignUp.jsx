import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SignUp.css'
function SignUp() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    return (
        <>

            <form className="sign-up-form" onSubmit={handleSubmit((e) => {
                console.log(e)
            })}>
                <p className="sign-up-form-title">Sign up</p>
                <div className="sign-up-input-container">
                    <input placeholder="Enter username" type="text" {
                     ...register('usernmae', {required: true})   
                    }/>
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter email" type="email" {
                     ...register("email", {required: true})   
                    }/>
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter password" type="password" {
                     ...register("password", {required: true})   
                    }/>
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter password again" type="password" {
                     ...register("password2", {required: true})   
                    }/>
                </div>
                <button className="sign-up-submit" type="submit">
                    Sign up
                </button>
                <p className="signup-link">
                Already have an account?
                <Link to={'/login'}>Sign In</Link>
            </p>
            </form>

        </>
    )
}
export default SignUp;