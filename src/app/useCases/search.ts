import { SearchData, searchSchema } from "@/domain/schemas/searchSchema";
import { ISearchRepository } from "@/domain/repositories/ISearchRepository";

export class SearchUseCase {
  constructor(private searchRepository: ISearchRepository) {}

  async execute(data: SearchData) {
    const parsedData = searchSchema.parse(data);
    const fetchedData = await this.searchRepository.search(parsedData);

    return fetchedData;
  }
}
