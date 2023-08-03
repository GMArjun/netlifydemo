import Link from "next/link";

export default function Home() {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      {numbers.map((number, index) => (
        <div className="card" key={number}>
          <Link href={`/detail/${index}`}>{index}</Link>
        </div>
      ))}
    </main>
  );
}
