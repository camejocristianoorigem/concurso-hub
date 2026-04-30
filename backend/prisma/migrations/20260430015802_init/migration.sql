-- CreateTable
CREATE TABLE "public"."Concurso" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "banca" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "salario" DOUBLE PRECISION NOT NULL,
    "vagas" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "dataInscricaoInicio" TIMESTAMP(3) NOT NULL,
    "dataInscricaoFim" TIMESTAMP(3) NOT NULL,
    "linkEdital" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Concurso_pkey" PRIMARY KEY ("id")
);
