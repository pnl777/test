import mongoose from 'mongoose'

const DB_CONNECTION = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
        console.log('Database connected.')
    } catch (error) {
        console.log('Database connection error.')
    }
}

export default DB_CONNECTION