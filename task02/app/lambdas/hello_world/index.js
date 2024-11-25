exports.handler = async (event) => {

    if (event.rawPath === '/hello' && event.requestContext.http.method === 'GET') {
        const response = {
            statusCode: 200,
            message: 'Hello from Lambda',
        };
        return response;
    }
    // TODO implement
    const response = {
        statusCode: 200,
        message: 'Hello from Lambda',
    };
    return response;
};