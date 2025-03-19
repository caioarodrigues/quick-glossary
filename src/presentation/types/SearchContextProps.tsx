import { SearchUseCase } from "@/app/useCases/search";

export type SearchContextProps = {
  searchUseCase: SearchUseCase;
  searchContextValue: string;
  setSearchContextValue: (value: string) => void;
};