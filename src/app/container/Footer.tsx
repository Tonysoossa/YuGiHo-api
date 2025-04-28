import Link from "next/link";
import Image from "next/image";
import yugihoCart from "@/app/assets/logo/yugihoCart.webp";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[var(--background)] py-2 h-10">
      <div className="mx-auto flex items-center justify-center font-germania text-lg">
        <Link
          target="_blank"
          href="https://ygoprodeck.com/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Image src={yugihoCart} alt="Yu-Gi-Oh Cart" className="w-3 pb-0.5" />
          <p>Yu-Gi-Oh community site here !</p>
        </Link>
      </div>
    </footer>
  );
}
