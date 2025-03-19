import { createContext } from "react";
import { SearchContextProps } from "@/presentation/types/SearchContextProps";

export const SearchContext = createContext<SearchContextProps | null>(null);
