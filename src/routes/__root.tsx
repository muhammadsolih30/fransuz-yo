import { Outlet, createRootRoute, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RegisterModal } from "../components/RegisterModal";
import { FloatingButtons } from "../components/FloatingButtons";
import { MobileCtaBar } from "../components/MobileCtaBar";
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
      { title: "France TCF O'quv Markazi — Fransuz tili orqali Kanadaga" },
      {
        name: "description",
        content:
          "Fransuz tili orqali Kanadaga Express Entry. TCF Canada, TEF, DELF, DALF imtihonlariga C1-C2 darajali ustozlardan professional tayyorgarlik. +50 CRS ball.",
      },
      { name: "theme-color", content: "#d52b1e" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: "France TCF — Fransuz tili orqali Kanadaga" },
      {
        property: "og:description",
        content: "Express Entry tizimida fransuz tili bilan +50 ball. TCF Canada'ga professional tayyorgarlik.",
      },
      { property: "og:locale", content: "uz_UZ" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
