exports.handler = async (event) => {

    if (event.rawPath === '/hello' && event.requestContext.http.method === 'GET') {
        const response = {
            statusCode: 200,
            
            message: 'Hello from Lambda',
        
        };
        return response;
    }

 
    const response = {
        statusCode: 400,
        body: JSON.stringify({
            message: `Bad request syntax or unsupported method. Request path: ${event.rawPath}. HTTP method: ${event.requestContext.http.method}`,
        }),
    };
    return response;
};
