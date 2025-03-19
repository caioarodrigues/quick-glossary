import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { searchSchema, SearchData } from "@/domain/schemas/searchSchema";
import { SearchUseCase } from "@/app/useCases/search";
import { SearchRepository } from "@/infra/repositories/SearchRepository";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useSearch } from "../hooks/useSearch";

export function SearchInputForm() {
  const { setSearchContextValue } = useSearch();
  const form = useForm<SearchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      word: "",
    },
  });

  async function onSubmit(value: SearchData) {
    try {
      const searchRepository = new SearchRepository();
      const searchUseCase = new SearchUseCase(searchRepository);
      const result = await searchUseCase.execute(value);
      setSearchContextValue(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
      <Form {...form}>
        <FormField
          control={form.control}
          name="word"
          render={() => (
            <FormItem>
              <FormLabel>Quick Glossary App</FormLabel>
              <FormControl>
                <Input placeholder="Enter a word" {...form.register("word")} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </Form>
    </form>
  );
}
