import { ISearchRepository } from "@/domain/repositories/ISearchRepository";
import { SearchData } from "@/domain/schemas/searchSchema";
import { DICTIONARY_API_URL } from "@/core/constants/endpoints";
import { searchResponse } from "@/presentation/types/SearchContextProps";

export class SearchRepository implements ISearchRepository {
  async search(data: SearchData): Promise<searchResponse[]> {
    const endpoint = `${DICTIONARY_API_URL}/${data.word}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    return response.json();
  }
}
