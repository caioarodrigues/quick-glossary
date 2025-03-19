import { ReactNode, useState } from "react";
import { SearchRepository } from "@/infra/repositories/SearchRepository";
import { SearchUseCase } from "@/app/useCases/search";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const searchRepository = new SearchRepository();
  const searchUseCase = new SearchUseCase(searchRepository);
  const [searchContextValue, setSearchContextValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchUseCase, searchContextValue, setSearchContextValue }}>
      {children}
    </SearchContext.Provider>
  );
};
