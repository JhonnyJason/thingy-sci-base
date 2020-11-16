const sciBase = require("../output/index.js")

const sampleRoutes = {
    getResponse: (req, res) => {
        console.log("on getResponse")
        console.log(JSON.stringify(req.body, null, 4))
        const response = {ok:true}
        res.send(response)
    }
}

sciBase.prepareAndExpose(sampleRoutes)