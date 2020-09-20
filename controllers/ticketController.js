import Ticket from "../models/Ticket"


exports.newTicket =(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const projectName = req.body.projectName;
    const assignee = req.body.assignee;
    const priority = req.body.priority;
    const status = req.body.status;
    const type = req.body.type;

    const newTicket = new Ticket({
    	title,
    	description,
    	projectName,
        assignee,
    	priority,
    	status,
    	type,
    });

    newTicket.save()
     	.then(() => res.json('Ticket successfully created.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.getTicketById=(req,res)=>{
    Ticket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(err => res.status(400).json('Error: ' + err));
}


exports.allTickets=(req,res)=>{
    Ticket.find()
		.then(tickets => res.json(tickets))
		.catch(err => res.status(400).json('Error: ' + err));
}

exports.updateTicket=(req,res)=>{
    Ticket.findById(req.params.id)
    .then(ticket => {
        ticket.title = req.body.title;
        ticket.description = req.body.description;
        ticket.projectName = req.body.projectName;
        ticket.assignee = req.body.assignee;
        ticket.priority = req.body.priority;
        ticket.status = req.body.status;
        ticket.type = req.body.type;

        ticket.save()
            .then(() => res.json('Ticket updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteTicket=(req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
        .then(ticket => res.json('Ticket deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
