const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports =function(app){
    app.use(
        //汽车
        '/api1',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/api1': '',
            }
        })

    );
    app.use(
        //汽车
        '/api2',
        createProxyMiddleware({
            target: 'http://wwww.localhost:4000',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': '',
            }
        })

    );

}