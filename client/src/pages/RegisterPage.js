import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../redux/user/user.action'
import Loader from '../components/loader/Loader'
import Message from '../components/message/Message'
import '../main.styles.scss'

const RegisterPage = () => {

    const dispatch = useDispatch()

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const reg = useSelector((state) => {
        return state.registerUser
    })

    const { error, loading, userInfo } = reg

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(username === '' || email === '' || password === '') {
            setMessage('All fields are required.')
        } else if(password !== confirmPassword){
            setMessage('Password does not match.')
        }else {
            dispatch(registerAction(username,email,password))
            setMessage('')
        }
    }

    return (
        <div className='container mt-4'>
            <h1 className='mb-4'>Register Page</h1>
            { message && <Message variant='alert alert-danger text-center'>{message}</Message>}
            { loading ? <Loader/> : error ? <Message variant='alert alert-danger text-center'>{error}</Message> : Object.keys(userInfo).length === 0 ? '' : <Message variant='alert alert-success text-center'>{userInfo.message}</Message>}
            <form onSubmit={onSubmitHandler} className='mt-4'>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}

export default RegisterPage
