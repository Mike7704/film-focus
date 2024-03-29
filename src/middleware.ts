import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //routes that anyone can access without authentication
  publicRoutes: ["/", "/movie-catalogue", "/movie/([^/.]+)", "/movie-picker"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
