import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class AgendaController {
  async createAgenda(data: Date, nomePaciente: string) {
    return prisma.agenda.create({
      data: {
        data,
        nomePaciente,
      },
    });
  }

  async getAgendas() {
    return prisma.agenda.findMany();
  }

  async getAgendaById(id: number) {
    return prisma.agenda.findUnique({
      where: { id },
    });
  }

  async updateAgenda(id: number, data: Date, nomePaciente: string) {
    return prisma.agenda.update({
      where: { id },
      data: {
        data,
        nomePaciente,
      },
    });
  }

  async deleteAgenda(id: number) {
    return prisma.agenda.delete({
      where: { id },
    });
  }
}

export default AgendaController;
