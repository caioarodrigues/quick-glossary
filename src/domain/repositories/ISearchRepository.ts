import { searchResponse } from "@/presentation/types/SearchContextProps";
import { SearchData } from "../schemas/searchSchema";

export interface ISearchRepository {
  search(data: SearchData): Promise<searchResponse[]>;
  //search(data: SearchData): Promise<void>;
}
