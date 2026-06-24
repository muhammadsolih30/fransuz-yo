import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/haqimizda")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "haqimizda" });
  },
});
