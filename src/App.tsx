import { ShoppingList } from "./ShoppingList/ShoppingList.tsx";
import { Footer } from "./layouts/Footer.tsx";
import { Header } from "./layouts/Header.tsx";

export function App() {
  return (
    <>
      <Header />

      <ShoppingList />

      <Footer />
    </>
  );
}
