class InvalidArgumentError extends Error{
    name: string = 'invalid_argument'
    status: number = 204
    message: string = 'invalid argument !'
}

export default new InvalidArgumentError