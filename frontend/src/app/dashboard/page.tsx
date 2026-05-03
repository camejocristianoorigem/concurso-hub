'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import Header from '@/components/Header';

export default function DashboardPage() {
  const router = useRouter();
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    async function load() {
      await apiFetch('/matching/generate', { method: 'POST' });
      const data = await apiFetch('/matching');
      setMatches(data);
    }

    load();
  }, [router]);

  return (
    <main className="min-h-screen">
      <Header />

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Concursos para você
        </h1>

        <div className="grid gap-4">
          {matches.map((item) => (
            <div key={item.id} className="border rounded-2xl p-4">
              <h2 className="text-xl font-semibold">
                {item.concurso.titulo}
              </h2>
              <p>{item.concurso.estado}</p>
              <p>{item.concurso.area}</p>
              <p>Score: {item.score}%</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
