import Project from "../models/Project"

exports.addNewProject=(req,res)=>{
    const name = req.body.name;

    const newProject = new Project({
    	name,
    });

    newProject.save()
        .then(() => res.json('Project successfully created!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.getAllProjects=(req,res)=>{
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteProject=(req,res)=>{
    Project.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}