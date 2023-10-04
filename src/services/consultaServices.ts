// Aqui são feitos os Metodos e funções do projeto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Consulta{

    constructor(){}

    async criarConsulta(data: any) {
        try {
          const consulta = await prisma.consulta.create({
            data: {
              data: data.data,
              nomePcnte: data.nomePcnte,
              nomeDents: data.nomeDents,
              pacienteId: data.pacienteId,
              secretariaId: data.secretariaId
            }
          });
          return consulta;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao criar consulta");
        }
    }

    async listarConsulta(){
        try{
            const consulta = await prisma.consulta.findMany()
            return consulta;
        }catch(error){
            throw new Error ("Error ao listar as Consultas")
        }
    }

    async updateConsulta(id: number, dado: any) {
        try {
          const consulta = await prisma.consulta.update({
            where: { id: id },
            data: dado
          });
          return consulta;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao atualizar consulta");
        }
      }

    async deletarConsulta(id: number){
        try{
            const consulta = await prisma.consulta.delete({
                where: {id: id}
            });
            return consulta;
        }catch(error){
            throw new Error ("Error ao Deletar as consultas")
        }
    }
}

export default new Consulta