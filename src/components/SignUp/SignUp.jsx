import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useState } from 'react';
function SignUp() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [formData, setFormData] = useState({
        username: '',
        email: '', 
        password: '',
        password2: ''
    })
    return (
        <>

            <form className="sign-up-form" onSubmit={handleSubmit((e) => {
                console.log(e)
            })}>
                <p className="sign-up-form-title">Sign up</p>
                <div className="sign-up-input-container">
                    <input placeholder="Enter username" value={formData.username} onInput={e => setFormData({...formData, username: e.target.value})} type="text" {
                     ...register('username', {required: true})   
                    }/>
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter email" value={formData.email} onInput={e => setFormData({...formData, email: e.target.value})} type="email" {
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