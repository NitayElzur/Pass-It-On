import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useEffect, useState } from 'react';

function Login() {
    const { formState = { errors }, register, handleSubmit, } = useForm()
    const [data, setData] = useState([]);
    const [adminData, setAdminData] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('users')));
        setAdminData(JSON.parse(localStorage.getItem('admin')))
        localStorage.setItem('currentUser', '')
    }, [])
    return (
        <form className="login-form" onSubmit={handleSubmit((e) => {
            console.log(adminData);
            if (adminData?.some(v => v.username === e.username && v.password === e.password)) {
                localStorage.setItem('currentUser', adminData.find(v => v.id).id);
                setAdminData([])
                navigate('/')
            }
            else {
                if (!data.some(v => v.username === e.username)) {
                    setFormData({ password: '', username: '' })
                    alert('Username does not exist')
                }
                else if (!data.some(v => v.username === e.username && v.password === e.password)) {
                    setFormData({ ...formData, password: '' })
                    alert('Incorrect password')
                }
                else {
                    localStorage.setItem('currentUser', JSON.stringify(data.filter(v => v.username === e.username && v.password === e.password)[0].id))
                    setData([])
                    navigate('/profile')
                }
            }
        })}>
            <p className="login-form-title">Sign in to your account</p>
            <div className="login-input-container">
                <input placeholder="Enter username" value={formData.username} onInput={e => setFormData({ ...formData, username: e.target.value })} type="text" {
                    ...register("username", { required: true })
                } />
                <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <div className="login-input-container">
                <input placeholder="Enter password" value={formData.password} onInput={e => setFormData({ ...formData, password: e.target.value })} type="password"{
                    ...register("password", { required: true })
                } />

                <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <button className="login-submit" type="submit">
                Sign in
            </button>

            <p className="signup-link">
                No account?
                <Link to={'/sign-up'}>Sign Up</Link>
            </p>
        </form>

    )
}
export default Login;