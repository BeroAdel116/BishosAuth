import BadRequestError from "../errors/bad-request.js"
import unauthenticatedError from "../errors/unauthenticated.js"
import { StatusCodes } from "http-status-codes"

const signUp = async (req,res)=>{
    const user = 'create user in db'
    const token = 'create token'
    res.status(StatusCodes.CREATED).send('done')
}

const login = async (req,res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('please enter email and password')
    }
    const user = 'search for email'
    if(!user){
        throw new unauthenticatedError('invalid credintials')
    }
    const isPasswordCorrect = 'compare password'
    if(!isPasswordCorrect){
        throw new unauthenticatedError('invalid credntials')
    }
}

export default login