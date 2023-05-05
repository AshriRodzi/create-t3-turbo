import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { usersRouter } from "./router/users";
import { useradminsRouter } from "./router/useradmins";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  users: usersRouter,
  useradmins: useradminsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
