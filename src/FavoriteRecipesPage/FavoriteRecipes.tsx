import { useEffect, useState } from "react";

export function FavoriteRecipesPages() {
  type StorageItem = {
    key: string;
    value: string;
  };

  const [storageItems, setStorageItems] = useState<Array<StorageItem>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const items: Array<StorageItem> = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null) {
          const value = localStorage.getItem(key);
          items.push({ key, value: value || "" });
        }
      }
      setStorageItems(items);
    } catch (e) {
      setError(
        "Unable to access localStorage. It might be disabled in your browser.",
      );
      console.error("Error accessing localStorage:", e);
    }
  }, []);

  return <div>Test</div>;
}
