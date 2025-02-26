import TicketModel from "../models/ticket.model.js";

class TicketDAO {
  async create(ticket) {
    return await TicketModel.create(ticket);
  }

  async findById(id) {
    return await TicketModel.findById(id);
  }

  async findAll() {
    return await TicketModel.find();
  }
}

export default new TicketDAO();