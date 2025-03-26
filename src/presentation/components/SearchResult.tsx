import { useSearch } from "../hooks/useSearch";

interface Definition {
  definition: string;
}

interface Meaning {
  definitions: Definition[];
}

interface Word {
  word: string;
  meanings: Meaning[];
}

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
        {searchContextValue?.map(({ meanings }: Word, wordIndex: number) => (
          <div key={wordIndex}>
            {meanings.map(({ definitions }: Meaning, meaningIndex: number) => (
              <div key={meaningIndex}>
                {definitions &&
                  Array.isArray(definitions) &&
                  definitions.map(({ definition }: Definition, definitionIndex: number) => (
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
