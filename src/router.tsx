import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { NotFoundPage } from "./components/NotFoundPage";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreloadStaleTime: 0,
    notFoundMode: "root",
    defaultNotFoundComponent: NotFoundPage,
  });

  return router;
};
