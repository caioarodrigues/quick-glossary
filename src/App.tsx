import { SearchInputForm } from "./presentation/components/SearchInputForm";
import { SearchResult } from "./presentation/components/SearchResult";
import { SearchProvider } from "./presentation/context/search/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <div className="bg-blue-400 grid grid-cols-12 gap-2 p-2 md:gap-4 md:p-4 h-screen">
        <div className="col-span-12 md:h-full h-fit md:col-span-4 bg-white p-4 rounded-lg border-2 border-zinc-600 shadow-md">
          <SearchInputForm />
        </div>
        <div className="col-span-12 md:col-span-8 md:h-full bg-white p-4 rounded-lg border-2 border-zinc-600 shadow-md h-full overflow-y-auto">
          <SearchResult />
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
