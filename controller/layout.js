const layout = require('../model/layout');
const LayoutModel = require('../model/layout')

//CRUD Operations on Layout
//Create Layout
exports.createLayout = (req, res, next) => {
    if (req.body) {
        const document = new LayoutModel(req.body)
        document.save().then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }
    else{
        res.status(400).send("Bad Request!")
    }
}

//Read Layout
exports.readLayout = async (req, res, next) => {
    if(req.params && req.params.id){
        LayoutModel.findById(req.params.id.toString()).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }
    else{
        res.status(400).send("Bad Request!")
    }
}

//Update Layout
exports.updateLayout = (req, res, next) => {
    if (req.params && req.params.id && req.body) {
        LayoutModel.findByIdAndUpdate(req.params.id.toString(), req.body).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }
    else {
        res.status(400).send("Bad Request!")
    }
}

//Delete Layout
exports.deleteLayout = (req, res, next) => {
    if (req.params && req.params.id) {
        LayoutModel.findByIdAndDelete(req.params.id.toString()).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }
    else{
        res.status(400).send("Bad Request!")
    }
}