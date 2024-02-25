import { Footer } from "./Footer/Footer.tsx";
import { Header } from "./Header/Header.tsx";
import { HomePage } from "./HomePage/HomePage.tsx";

export function App() {
  return (
    <main className="container">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
