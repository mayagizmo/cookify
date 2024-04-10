import { Footer } from "./Footer/Footer.tsx";
import { Header } from "./Header/Header.tsx";
import { HomePage } from "./HomePage/HomePage.tsx";

export function App() {
  return (
    <main className="max-w-[100rem] mx-auto p-4">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
