import { useSearch } from "../hooks/useSearch";

export function SearchResult() {
  const { searchContextValue } = useSearch();
  console.log(searchContextValue);

  return (
    <div className="bg-zinc-200">
    </div>
  );
}
