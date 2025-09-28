"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useContext, ReactNode } from "react";
import { LoaderContext } from "@/context/LoaderContext";
import type { Url } from "url";

interface NavLinkProps extends Omit<LinkProps, "href"> {
  href: string | Url; // ✅ accept string or Url object
  children: ReactNode;
  className: string;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { setLoading } = useContext(LoaderContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (pathname === href) {
        setTimeout(() => setLoading(false), 200);
      } else {
        // Convert Url object to string if needed
        const hrefString = typeof href === "string" ? href : href.toString();
        router.push(hrefString);
      }
    }, 100);
  };

  return (
    <Link className={className} href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
