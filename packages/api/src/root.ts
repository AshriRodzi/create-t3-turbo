import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { usersRouter } from "./router/users";
import { useradminsRouter } from "./router/useradmins";
import { teamsRouter } from "./router/teams";
import { supportticketsRouter } from "./router/supporttickets";
import { sessionsRouter } from "./router/sessions";
import { organisationsRouter } from "./router/organisations";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  users: usersRouter,
  useradmins: useradminsRouter,
  teams: teamsRouter,
  supporttickets: supportticketsRouter,
  sessions: sessionsRouter,
  organisations: organisationsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
