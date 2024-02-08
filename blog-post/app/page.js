import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 AAWWWWWWWWWWWW YEEEEEAAH! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
