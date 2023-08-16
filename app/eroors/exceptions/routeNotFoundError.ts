class RouteNotFoundError extends Error {
    name: string = 'route_not_found'
    status: number = 404
    message: string = 'local data not found!'
}

export default new RouteNotFoundError