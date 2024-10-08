import data from "./data.json"; //Spotify data
import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    <div className="album-list">
      {/* Map through the data and render an Album component for each album */}
      {data.albums.items.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default App;
