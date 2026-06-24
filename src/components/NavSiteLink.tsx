import { Link, useRouterState } from "@tanstack/react-router";
import type { SiteLink } from "../lib/site-content";

type Props = {
  link: SiteLink;
  className?: string;
  activeClassName?: string;
  /** Scroll-spy yoki qo'lda belgilangan faol holat */
  active?: boolean;
  onClick?: () => void;
};

export function NavSiteLink({ link, className, activeClassName, active, onClick }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isRouteActive = !link.hash && pathname === link.to;
  const isActive = active ?? isRouteActive;
  const mergedClass = isActive && activeClassName ? activeClassName : className;

  if (link.hash) {
    return (
      <Link to="/" hash={link.hash} onClick={onClick} className={mergedClass} aria-current={isActive ? "page" : undefined}>
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      to={link.to}
      onClick={onClick}
      className={mergedClass}
      activeProps={activeClassName ? { className: activeClassName } : undefined}
      aria-current={isActive ? "page" : undefined}
    >
      {link.label}
    </Link>
  );
}
