import Link from 'next/link';

type SearchParams = Promise<{
  estado?: string;
  area?: string;
}>;

async function getConcursos(estado?: string, area?: string) {
  const query = new URLSearchParams();

  if (estado) query.set('estado', estado);
  if (area) query.set('area', area);

  const res = await fetch(`http://localhost:3000/concursos?${query.toString()}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Erro ao carregar concursos');
  return res.json();
}

async function getMelhoresSalarios() {
  const res = await fetch('http://localhost:3000/concursos/destaques/melhores-salarios', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Erro ao carregar destaques');
  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const concursos = await getConcursos(params.estado, params.area);
  const destaques = await getMelhoresSalarios();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">ConcursoHub</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Melhores Salários</h2>
        <div className="grid gap-3">
          {destaques.map((concurso: any) => (
            <Link
              key={concurso.id}
              href={`/concurso/${concurso.id}`}
              className="border rounded-xl p-4 block bg-gray-50"
            >
              <strong>{concurso.titulo}</strong> — R$ {concurso.salario}
            </Link>
          ))}
        </div>
      </section>

      <div className="flex gap-2 mb-6">
        <Link href="/" className="border px-3 py-2 rounded-lg">Todos</Link>
        <Link href="/?estado=SP" className="border px-3 py-2 rounded-lg">SP</Link>
        <Link href="/?estado=MG" className="border px-3 py-2 rounded-lg">MG</Link>
        <Link href="/?area=TI" className="border px-3 py-2 rounded-lg">TI</Link>
      </div>

      <div className="grid gap-4">
        {concursos.map((concurso: any) => (
          <Link
            key={concurso.id}
            href={`/concurso/${concurso.id}`}
            className="border rounded-xl p-4 block"
          >
            <h2 className="text-xl font-semibold">{concurso.titulo}</h2>
            <p>{concurso.orgao}</p>
            <p>{concurso.estado} • {concurso.banca}</p>
            <p>R$ {concurso.salario}</p>
            <p>{concurso.vagas} vagas</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
