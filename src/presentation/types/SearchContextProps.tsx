import { SearchUseCase } from "@/app/useCases/search";

export type searchResponse = {
  word: string;
  phonetic: string;
  phonetics: [];
  origin: string;
  meanings: [];
}

export type SearchContextProps = {
  searchUseCase: SearchUseCase;
  searchContextValue: searchResponse[] | null;
  setSearchContextValue: (value: searchResponse[]) => void;
};