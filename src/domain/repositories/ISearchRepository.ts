import { SearchData } from "../schemas/searchSchema";

export interface ISearchRepository {
  search(data: SearchData): Promise<string>;
  //search(data: SearchData): Promise<void>;
}
