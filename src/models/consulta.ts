import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class ConsultaController {
  async createConsulta(data: Date, nomePaciente: string, nomeDentista: string) {
    return prisma.consulta.create({
      data: {
        data,
        nomePaciente,
        nomeDentista,
      },
    });
  }

  async getConsultas() {
    return prisma.consulta.findMany();
  }

  async getConsultaById(id: number) {
    return prisma.consulta.findUnique({
      where: { id },
    });
  }

  async updateConsulta(id: number, data: Date, nomePaciente: string, nomeDentista: string) {
    return prisma.consulta.update({
      where: { id },
      data: {
        data,
        nomePaciente,
        nomeDentista,
      },
    });
  }

  async deleteConsulta(id: number) {
    return prisma.consulta.delete({
      where: { id },
    });
  }
}

export default ConsultaController;
