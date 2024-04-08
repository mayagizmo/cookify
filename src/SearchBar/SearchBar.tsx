import { useId, useState } from "react";
import { CgClose, CgOptions } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);
  const [freeTextSearch, setFreeTextSearch] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const freeTextSearchId = useId();
  const ingredientsId = useId();
  const mealId = useId();
  const timeId = useId();

  const ingredientOptions = [
    "Mushrooms",
    "Spinach",
    "Pasta",
    "Rice",
    "Tofu",
    "Tomatoes",
  ];
  const mealOptions = ["Breakfast", "Lunch", "Dinner", "Desert", "Cocktails"];

  const timeOptions = [
    "<30min",
    "<60min",
    "<90min",
    "<120min",
    "Too much work",
  ];

  function handleSearch() {
    console.log("Search submitted.");
  }

  function toggleFilters() {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="border border-neutral-content mb-4 rounded-lg"
    >
      <div className="flex">
        <button type="submit" className="p-4 text-primary">
          <FaMagnifyingGlass />
        </button>

        <input
          type="text"
          className="input w-full"
          id={freeTextSearchId}
          value={freeTextSearch}
          onChange={(e) => setFreeTextSearch(e.target.value)}
          placeholder="Search recipes"
        />
        <button type="button" className="text-xl p-4" onClick={toggleFilters}>
          {showFilters ? <CgClose /> : <CgOptions />}
        </button>
      </div>

      {showFilters && (
        <div className="flex flex-col gap-4 p-4 border-t border-neutral-content">
          <select
            className="select select-bordered"
            id={mealId}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealOptions.map((value) => (
              <option value={selectedMeal} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered"
            id={ingredientsId}
            onChange={(e) => setSelectedIngredient(e.target.value)}
          >
            {ingredientOptions.map((value) => (
              <option value={selectedIngredient} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered"
            id={timeId}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {timeOptions.map((value) => (
              <option value={selectedTime} key={value}>
                {value}
              </option>
            ))}
          </select>

          <button className="btn btn-primary" type="submit">
            Apply filter
          </button>
        </div>
      )}
    </form>
  );
}
