interface ShoppingItem {
  name: string;
  quantity?: string;
  isChecked: boolean;
  isDeleted: boolean;
  createdAt: Date;
}

const shoppingListData: Array<ShoppingItem> = [
  {
    name: "Tomato",
    quantity: "5 very red ones",
    isChecked: false,
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    name: "Mushroomies",
    quantity: "500g",
    isChecked: true,
    isDeleted: false,
    createdAt: new Date(),
  },
];

export function ShoppingList() {
  console.log("shoppingListData", shoppingListData);

  return (
    <ul>
      {shoppingListData.map((item) => (
        <li>
          {item.name} - {item.isChecked ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}
