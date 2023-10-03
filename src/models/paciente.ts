import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PacienteController {
  async createPaciente(nome: string, senha: number, usuario: string) {
    return prisma.paciente.create({
      data: {
        nomePaciente: nome,
        senha,
        usuario,
      },
    });
  }

  async getPacientes() {
    return prisma.paciente.findMany();
  }

  async getPacienteById(id: number) {
    return prisma.paciente.findUnique({
      where: { id },
    });
  }

  async updatePaciente(id: number, nome: string, senha: number, usuario: string) {
    return prisma.paciente.update({
      where: { id },
      data: {
        nomePaciente: nome,
        senha,
        usuario,
      },
    });
  }

  async deletePaciente(id: number) {
    return prisma.paciente.delete({
      where: { id },
    });
  }
}

export default PacienteController;
