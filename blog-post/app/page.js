import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Hello my fellow watcher, it finally worked!</h1>
      <p>🔥 AAWWWWWWWWWWWW YEEEEEAAH! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
