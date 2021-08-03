import User from '../models/User.model.js'

export const register = async (req,res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(401).json({
                success : false,
                message : 'Email already exist'
            })
        }
        await User.create({
            username,
            email,
            password
        })
        res.status(201).json({
            success : true,
            message : 'Registration successful.'
        })
    } catch (error) {
        res.status(401).json({
            success : false,
            message : 'Registration failed.'
        })
    }
}