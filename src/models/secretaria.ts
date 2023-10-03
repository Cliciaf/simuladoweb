import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class SecretariaController {
  async createSecretaria(nome: string, RG: number) {
    return prisma.secretaria.create({
      data: {
        nome,
        RG,
      },
    });
  }

  async getSecretarias() {
    return prisma.secretaria.findMany();
  }

  async getSecretariaById(id: number) {
    return prisma.secretaria.findUnique({
      where: { id },
    });
  }

  async updateSecretaria(id: number, nome: string, RG: number) {
    return prisma.secretaria.update({
      where: { id },
      data: {
        nome,
        RG,
      },
    });
  }

  async deleteSecretaria(id: number) {
    return prisma.secretaria.delete({
      where: { id },
    });
  }
}

export default SecretariaController;
