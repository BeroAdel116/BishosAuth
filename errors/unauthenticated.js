import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class unauthenticatedError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.UNAUTHORIZED
    }
}

export default unauthenticatedError