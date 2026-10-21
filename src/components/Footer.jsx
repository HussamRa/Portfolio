
import { ArrowUpRightIcon } from "lucide-react";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/HussamRa",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/hussam.ratlh005/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/husam-ratlh-6b70202ab/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-100 w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10"

      />
      <div className="container">
        <div className="border-t border-white py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>&copy; 2027. Hussam Ratlh.All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};