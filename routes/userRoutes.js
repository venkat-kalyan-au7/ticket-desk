import express from "express"
const router = express.Router()

import {addUser,
        getUsers,
        deleteUser} from "../controllers/userController"


router.post('/create',addUser)
router.get('/',getUsers)
router.delete('/:id',deleteUser)

module.exports = router