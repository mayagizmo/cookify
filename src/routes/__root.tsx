import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Footer } from "../Footer/Footer.tsx";
import { Header } from "../Header/Header.tsx";

export const Route = createRootRoute({
  component: () => (
    <main className="max-w-[100rem] mx-auto p-4">
      <Header />

      <Outlet />

      <Footer />
    </main>
  ),
});
