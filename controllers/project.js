const Project = require('../models/Project')

module.exports = async (req, res) => {
    const project = await Project.findById(req.params.id)
    res.render('project', {
        project
    })
}