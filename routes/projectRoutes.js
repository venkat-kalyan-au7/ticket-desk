import express from "express"

const router = express.Router()

import {addNewProject,
    getAllProjects,
    deleteProject} from "../controllers/projectController"

router.post('/create',addNewProject)

router.get('/',getAllProjects)

router.delete('/:id',deleteProject)

module.exports = router