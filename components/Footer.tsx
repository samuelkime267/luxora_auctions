import { footerLinks } from "@/data/footer-links.data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white mt-4 md:mt-8">
      <div className="max-w-screen-2xl p-4 md:p-8 mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {footerLinks.map(({ links, title }, i) => (
            <div key={i}>
              <p className="capitalize text-xl mb-2 md:mb-4">{title}</p>

              <div className="flex items-start justify-start flex-col gap-1 md:gap-2">
                {links.map(({ name, link }, i) => (
                  <Link
                    key={i}
                    href={link}
                    className="capitalize font-light hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full my-4 md:my-8 border-t border-neutral-800" />

        <div className="text-center">
          <small className="text-white/40">
            © {new Date().getFullYear()} Luxora Auctions
          </small>
        </div>
      </div>
    </footer>
  );
}
