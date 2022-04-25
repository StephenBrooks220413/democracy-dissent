const User = require('../models/User');
const roles = require('../config/roles_list')

module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user)=>{
        if(error || !user)
            return res.redirect('/')
        
            next(roles)
    })
}