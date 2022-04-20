const User = require('../models/User')

module.exports = async (req, res) => {
    const users = await User.find({}).limit(30).sort({_id: -1})
    console.log(req.session)
    res.render('profiles', {
        users
    })
}