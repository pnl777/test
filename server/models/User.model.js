import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const User = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

User.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

User.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

User.methods.signedToken = function(){
    return jwt.sign({ id : this._id}, process.env.JWT_SECRET_TOKEN, { expiresIn : process.env.JWT_SECRET_EXPIRE })
}

export default mongoose.model('users', User)