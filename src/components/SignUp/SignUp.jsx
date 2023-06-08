import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useEffect, useState } from 'react';
function SignUp() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [users, setUsers] = useState();
    console.log(users);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    useEffect(() => {
        localStorage.setItem('currentUser', '');
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, [])
    
    function SendToHomePage() {
         navigate('/login')
    }

    return (
        <>

            <form className="sign-up-form" onSubmit={handleSubmit(e => {
                let isNew = true;
                if (users.some(v => v.username === e.username)) {
                    setFormData({ ...formData, username: '', password: '', password2: '' })
                    isNew = false;
                    alert('Username is taken')
                }
                if (users.some(v => v.email === e.email)) {
                    setFormData({ ...formData, password: '', password2: '', email: '' })
                    isNew = false;
                    alert('Email alreday in use')
                }
                if (formData.password !== formData.password2) {
                    setFormData({ ...formData, password: '', password2: '' })
                    isNew = false;
                    alert("Passwords don't match")
                }
                if (isNew) {
                    const user = {
                        "id": users.length + 1,
                        "username": e.username,
                        "password": e.password,
                        "picture": "",
                        "grade": "",
                        "email": e.email,
                        "invites": [
                        ],
                        "challenges": [
                        ]
                    }
                    const temp = users;
                    temp.push(user);
                    console.log(temp);
                    localStorage.setItem('users', JSON.stringify(temp))
                    localStorage.setItem('currentUser', user.id);
                }
            })}>
                <p className="sign-up-form-title">Sign up</p>
                <div className="sign-up-input-container">
                    <input placeholder="Enter username" value={formData.username} onInput={e => setFormData({ ...formData, username: e.target.value })} type="text" {
                        ...register('username', { required: true })
                    } />
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter email" value={formData.email} onInput={e => setFormData({ ...formData, email: e.target.value })} type="email" {
                        ...register("email", { required: true })
                    } />
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter password" value={formData.password} onInput={e => setFormData({ ...formData, password: e.target.value })} type="password" {
                        ...register("password", { required: true })
                    } />
                </div>
                <div className="sign-up-input-container">
                    <input placeholder="Enter password again" value={formData.password2} onInput={e => setFormData({ ...formData, password2: e.target.value })} type="password" {
                        ...register("password2", { required: true })
                    } />
                </div>  
                    <button button className="sign-up-submit" type="submit">Sign In</button>
                <p className="signup-link">
                    Already have an account?
                <button onClick={SendToHomePage} className="sign-up-submit" type="submit">Sign up</button>
                </p>
            </form>

        </>
    )
}
export default SignUp;