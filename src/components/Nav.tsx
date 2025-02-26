"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },    
  { name: "Work", href: "/work" },
];  

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-medium transition-all duration-500 ${
            link.href === pathname
              ? "text-accent"
              : "text-gray-500 hover:text-accent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
