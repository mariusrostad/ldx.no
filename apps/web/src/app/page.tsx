import SearchBar from "./components/search/SearchButton";

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
          padding: "32px",
        }}
      >
        <h1>Marius Rostad.no</h1>
        <SearchBar />
      </div>
    </main>
  );
}
