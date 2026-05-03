-- CreateTable
CREATE TABLE "public"."Match" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "concursoId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_userId_concursoId_key" ON "public"."Match"("userId", "concursoId");

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_concursoId_fkey" FOREIGN KEY ("concursoId") REFERENCES "public"."Concurso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
