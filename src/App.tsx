import { ShoppingList } from "./ShoppingList/ShoppingList.tsx";
import { Footer } from "./layouts/Footer.tsx";
import { Header } from "./layouts/Header.tsx";
import "./global.scss";

export function App() {
  return (
    <main className="container">
      <Header />

      <ShoppingList />

      <Footer />
    </main>
  );
}
