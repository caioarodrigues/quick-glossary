import { ReactNode } from "react";
import { SearchInputForm } from "./presentation/components/SearchInputForm";
import { SearchResult } from "./presentation/components/SearchResult";
import { SearchProvider } from "./presentation/context/search/SearchProvider";

interface LayoutProps {
  left: ReactNode;
  right: ReactNode;
}

const Layout = ({ left, right }: LayoutProps) => {
  return (
    <div className="bg-blue-400 flex flex-col md:grid grid-cols-12 gap-2 p-2 md:gap-4 md:p-4 h-screen">
      <section className="col-span-12 md:h-full h-fit md:col-span-4 bg-white p-4 rounded-lg border-2 border-zinc-600 shadow-md">
        {left}
      </section>
      <section className="col-span-12 md:col-span-8 md:h-full bg-white p-4 rounded-lg border-2 border-zinc-600 shadow-md h-full overflow-y-auto">
        {right}
      </section>
    </div>
  );
};

function App() {
  return (
    <SearchProvider>
      <Layout
        left={<SearchInputForm />}
        right={<SearchResult />}
      />
    </SearchProvider>
  );
}

export default App;
