import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between pt-1 p-3">
      <div className="text-md inline-flex items-center pb-2">YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign in</div>
    </div>
  );
}
