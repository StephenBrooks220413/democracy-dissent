const User = require('../models/User')

module.exports = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.render('profile', {
        user
    })
}