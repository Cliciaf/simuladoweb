-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePcnte" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcnte" TEXT NOT NULL,
    "nomeDents" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "secretariaId" INTEGER NOT NULL,
    CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcnt" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_senha_key" ON "Paciente"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_pacienteId_key" ON "Consulta"("pacienteId");
