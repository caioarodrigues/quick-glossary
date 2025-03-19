import { useSearch } from "../hooks/useSearch";

export function SearchResult() {
  const { searchContextValue } = useSearch();
  console.log("Search Result Page");
  console.log(searchContextValue);

  return (
    <div className="bg-zinc-50 rounded-lg p-2">
      {searchContextValue && (
        <h1 className="text-3xl font-bold my-2">{searchContextValue[0].word}</h1>
      )}
      {searchContextValue?.map(({ word, meanings }, wordIndex) => (
        <div key={wordIndex}>
          {meanings.map(({ definitions }, meaningIndex) => (
            <div key={meaningIndex}>
              {definitions.map(({ definition }, definitionIndex) => (
                <div key={definitionIndex} className="py-1">
                  <p
                    className={`text-md font-semibold ${
                      (wordIndex + meaningIndex + definitionIndex) % 2 === 0 &&
                      "bg-zinc-200"
                    }`}
                  >
                    [{wordIndex}.{meaningIndex}.{definitionIndex}]: {definition}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
