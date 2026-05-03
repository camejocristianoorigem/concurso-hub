'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <header className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="font-bold">Concurso Hub</h1>

      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-xl bg-black text-white"
      >
        Sair
      </button>
    </header>
  );
}
