const Project = require('../models/Project');
const path = require("path");

module.exports = (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..' ,'public/uploads', image.name),async(error)=>{
        await Project.create({
            ...req.body,
            image: '/uploads/' + image.name
        })
        res.redirect('/')
    })
}