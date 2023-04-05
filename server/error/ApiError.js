class ApiError {
    constructor(status, mess) {
        this.status= status
        this.mess = mess

    }

    static badRequest(mess){
        return new ApiError(404, mess)
    }

    static internal(mess){
        return new ApiError(500, mess)
    }
    static forbidden(mess){
        return new ApiError(403, mess)
    }
}

module.exports = ApiError