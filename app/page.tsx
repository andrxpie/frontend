import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden after:absolute after:inset-0 after:z-1 after:content-[''] after:bg-hero-overlay">
      <Image
        src="/hero-bg-1000.png"
        className="h-full w-full select-none object-cover"
        width={1920}
        height={880}
        loading="eager"
        fetchPriority="high"
        alt=""
      />
    </section>
  );
}
