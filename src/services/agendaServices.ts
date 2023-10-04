// Aqui são feitos os Metodos e funções do projeto.
// Dica dita pelo prfessor (Otavio), sempre criar uma classe com todos os metodos e exportar
// a classe direto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class agendaServices{

    constructor(){}

    async criarAgenda(dado: any){                           
        try{
            const agenda = await prisma.agenda.create({
                data: {                                     
                    data: dado.data,
                    nomePcnt: dado.nomePcnt
                }
            });
            return agenda;
        } catch(error){
            throw new Error("Error ao criar uma nova Agenda")   
        }
    }

    async listarAgendas(){                                      
        try{
            const agenda = await prisma.agenda.findMany();
            return agenda;
        }catch (error){
                throw new Error ("Error ao listar as agendas")
            } 
    }

    async updateAgenda(id: number, dado: any){                                       
        try{
            const agenda = await prisma.agenda.update({
                where: { id : id},
                data: dado
            });
            return agenda;
        }catch (error){
            throw new Error ("Error ao Atualizar a lista")
        }
    }

    async deletarAgenda(id : number){                                      
        try{
            const agenda = await prisma.agenda.delete({
                where: {id : id}
            });
            return agenda;
        }catch(error){
            throw new Error ("Error ao Deletar a lista")
        }
    }


}

export default new agendaServices
