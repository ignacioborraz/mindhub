import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        email: { type: String, require: true },
        password: { type: String, require: true },
        photo: { type: String, require: true },
        role: { type: Number, require: true },
        is_online: { type: Boolean, require: true },
        is_verified: { type: Boolean, require: true },
        verify_code: { type: String, require: true }
    },{
        timestamps: true
    }
)

export const User = mongoose.model('users',schema)