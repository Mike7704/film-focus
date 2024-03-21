import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //routes that anyone can access without authentication
  publicRoutes: ["/", "/about", "/home/([^/.]+)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
