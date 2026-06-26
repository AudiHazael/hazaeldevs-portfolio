import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-6xl font-bold text-indigo-400">404</h1>
      <p className="text-xl text-slate-300">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
