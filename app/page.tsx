import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col min-h-screen flex-col items-center justify-center bg-primary">
      <section className="relative overflow-hidden after:absolute after:inset-0 after:z-1 after:content-[''] after:bg-hero-overlay ">
        <Image
          src="/hero-bg-1000.png"
          className="w-full h-full object-cover select-none"
          width={1920}
          height={880}
          loading="eager"
          alt="Hero background"
        />
      </section>
    </main>
  );
}
