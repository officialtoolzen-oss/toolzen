import type { ReactNode } from "react";
import Link from "next/link";

type SmartLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  title?: string;
};

export default function SmartLink({
  href,
  className,
  children,
  target,
  rel,
  title,
}: SmartLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        title={title}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        data-smart-link="true"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} title={title} data-smart-link="true">
      {children}
    </Link>
  );
}
