import "./data.json"; //Spotify data
// import { Album } from "./components/Album";
import { Header } from "./components/Header/Header.jsx";

export const App = () => {
  return (
    <>
      <Header></Header>
    </>

    // <div className="album-list">
    //   {/* Map through the data and render an Album component for each album */}
    //   {data.albums.items.map((album) => (
    //     <Album key={album.id} album={album} />
    //   ))}
    // </div>
  );
};
