import * as sciBase from "../output/index.js"

const sampleRoutes = {
    getResponse: (req, res) => {
        console.log("on getResponse")
        console.log("ip: "+req.ip)
        console.log("ips: "+req.ips)
        console.log("rawHeaders: "+req.rawHeaders)
        console.log(JSON.stringify(req.body, null, 4))
        const response = {ok:true}
        res.send(response)
    }
}

function oneMiddlewareFunction(req, res, next) {
    console.log("MiddleWare here!")
    next()
}
function otherMiddlewareFunction(req, res, next) {
    console.log("Other MiddleWare here!")
    next()
}

const allMiddleWare = [oneMiddlewareFunction, otherMiddlewareFunction]
// sciBase.prepareAndExpose(allMiddleWare, sampleRoutes)
sciBase.prepareAndExpose(oneMiddlewareFunction, sampleRoutes)