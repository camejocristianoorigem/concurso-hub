type PageProps = {
  params: Promise<{ id: string }>;
};

async function getConcurso(id: string) {
  const res = await fetch(`http://localhost:3000/concursos/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erro ao carregar concurso');
  }

  return res.json();
}

export default async function ConcursoPage({ params }: PageProps) {
  const { id } = await params;
  const concurso = await getConcurso(id);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{concurso.titulo}</h1>

      <div className="space-y-2">
        <p><strong>Órgão:</strong> {concurso.orgao}</p>
        <p><strong>Banca:</strong> {concurso.banca}</p>
        <p><strong>Estado:</strong> {concurso.estado}</p>
        <p><strong>Área:</strong> {concurso.area}</p>
        <p><strong>Cargo:</strong> {concurso.cargo}</p>
        <p><strong>Salário:</strong> R$ {concurso.salario}</p>
        <p><strong>Vagas:</strong> {concurso.vagas}</p>
        <p><strong>Nível:</strong> {concurso.nivel}</p>
        <p><strong>Status:</strong> {concurso.status}</p>
        <p><strong>Edital:</strong> <a href={concurso.linkEdital} className="text-blue-600 underline">Abrir</a></p>
      </div>
    </main>
  );
}
