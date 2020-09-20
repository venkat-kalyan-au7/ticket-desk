import express from "express"
const router = express.Router()

import {newTicket,
    getTicketById,
    allTickets,
    updateTicket,
    deleteTicket} from "../controllers/ticketController"


router.post('/create',newTicket)

router.get('/:id',getTicketById)

router.get('/',allTickets)

router.put('/update/:id',updateTicket)

router.delete('/:id',deleteTicket)

module.exports = router
