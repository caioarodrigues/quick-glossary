import { SearchContextProps } from "@/presentation/types/SearchContextProps";
import { SearchContext } from "../context/search/SearchContext";
import { useContext } from "react";

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch deve ser usado dentro de um UserProvider");
  }
  return context;
};
