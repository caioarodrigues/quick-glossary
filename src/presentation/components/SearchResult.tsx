/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearch } from "../hooks/useSearch";

export function SearchResult() {
  const { searchContextValue } = useSearch();

  return (
    <div className="h-full">
      {searchContextValue && (
        <span className="text-2xl font-medium my-2">
          {searchContextValue[0]?.word}
        </span>
      )}
      <div
        className={`bg-zinc-100 rounded-md ${
          searchContextValue && searchContextValue.length > 0 ? "p-2" : ""
        }`}
      >
        {searchContextValue?.map(({ word, meanings }, wordIndex) => (
          <div key={wordIndex}>
            {meanings.map(({ definitions }, meaningIndex) => (
              <div key={meaningIndex}>
                {definitions.map(({ definition }, definitionIndex) => (
                  <div
                    key={definitionIndex}
                    className={`text-md p-2 hover:bg-zinc-50 delay-50 transition-colors first:rounded-t-md last:rounded-b-md ${
                      (wordIndex + meaningIndex + definitionIndex) % 2 === 0
                        ? "bg-zinc-300"
                        : "bg-zinc-200"
                    }`}
                  >
                    <p>
                      [{wordIndex}.{meaningIndex}.{definitionIndex}]:{" "}
                      {definition}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
