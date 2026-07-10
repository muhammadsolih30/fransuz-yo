import { Outlet, createRootRoute, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RegisterModal } from "../components/RegisterModal";
import { FloatingButtons } from "../components/FloatingButtons";
import { MobileCtaBar } from "../components/MobileCtaBar";
import { ScrollProgress } from "../components/ScrollProgress";
import { SkipToContent } from "../components/SkipToContent";
import { NotFoundPage } from "../components/NotFoundPage";
import { useReveal } from "../hooks/useReveal";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TCF Canada kursi Toshkent | France TCF — Fransuz tili orqali Kanadaga" },
      {
        name: "description",
        content:
          "Toshkentda TCF Canada, TEF, DELF/DALF tayyorgarlik. Fransuz tili orqali Express Entry va Kanada PR. C1–C2 ustozlar, online/offline kurslar.",
      },
      {
        name: "keywords",
        content:
          "TCF Canada Toshkent, fransuz tili kursi, Express Entry, Kanada immigratsiya, TEF Canada, France TCF",
      },
      { name: "theme-color", content: "#e83848" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "France TCF" },
      { property: "og:title", content: "TCF Canada kursi Toshkent | France TCF" },
      {
        property: "og:description",
        content: "Fransuz tili orqali Kanadaga. TCF Canada tayyorgarlik — Toshkent.",
      },
      { property: "og:locale", content: "uz_UZ" },
      { property: "og:url", content: "https://www.francetcf.uz/" },
      {
        property: "og:image",
        content: "https://www.francetcf.uz/image/opening/ckanada%20va%20firansiya.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.francetcf.uz/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const isAdmin = pathname.startsWith("/admin");

  useReveal([pathname, hash]);

  useEffect(() => {
    if (isAdmin) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.getElementById("main-content");
    if (!main) return;

    main.classList.remove("page-enter");
    void main.offsetWidth;
    main.classList.add("page-enter");
  }, [pathname, isAdmin]);

  if (isAdmin) {
    return (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <ScrollRestoration />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <RegisterModal />
      <FloatingButtons />
      <MobileCtaBar />
    </>
  );
}
