import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/kurslar")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "kurslar" });
  },
});
