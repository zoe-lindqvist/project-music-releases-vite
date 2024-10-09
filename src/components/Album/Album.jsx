import { PropTypes } from "prop-types";
import { ArtistName } from "../ArtistName"; // Import ArtistName component

export const Album = ({ album }) => {
  return (
    <div className="album">
      {/* Album cover image */}
      <img src={album.images[0].url} alt={album.name} className="album-cover" />

      {/* Album name */}
      <h3 className="album-name">
        <a
          href={album.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {album.name}
        </a>
      </h3>

      {/* Artist names */}
      <p className="artist-names">
        {album.artists.map((artist, index) => (
          <ArtistName
            key={artist.id}
            artist={artist}
            showComma={index < album.artists.length - 1}
          />
        ))}
      </p>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
