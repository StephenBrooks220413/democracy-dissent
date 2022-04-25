const roles = require('../models/User')

module.exports = (req, res) => {
    if(req.roles === "Admin") {
        res.render('/projects')
    }
    else {
        res.render('index')
    }
}