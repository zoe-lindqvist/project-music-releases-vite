import PropTypes from "prop-types";

const Album = ({ album }) => {
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
          <span key={artist.id}>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.name}
            </a>
            {index < album.artists.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

// Add prop validation outside the component
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

export default Album;
