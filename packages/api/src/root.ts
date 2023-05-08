import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { usersRouter } from "./router/users";
import { useradminsRouter } from "./router/useradmins";
import { teamsRouter } from "./router/teams";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  users: usersRouter,
  useradmins: useradminsRouter,
  teams: teamsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
