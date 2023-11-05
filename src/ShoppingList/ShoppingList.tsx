import { SearchBar } from "./SearchBar.tsx";
import { ShoppingItem } from "./ShoppingItem.tsx";

export function ShoppingList() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
      </div>
    </>
  );
}
