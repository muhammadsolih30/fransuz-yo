import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ustoz")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "ustoz" });
  },
});
