import PropTypes from "prop-types";
import { ArtistName } from "../ArtistName/ArtistName.jsx";
import heartIcon from "../../assets/icons/heart.svg";
import playIcon from "../../assets/icons/play.svg";
import dotsIcon from "../../assets/icons/dots.svg";
import "./Album.css";

export const Album = ({ album }) => {
  return (
    <div className="album">
      <div className="album-cover-container">
        {/* Album cover image */}
        <img
          src={album.images[0].url}
          alt={album.name}
          className="album-cover"
        />

        {/* Icons overlay */}
        <div className="icons">
          <img src={heartIcon} alt="Favorite" className="icon" />
          <img src={playIcon} alt="Play" className="icon play-icon" />
          <img src={dotsIcon} alt="More options" className="icon" />
        </div>
      </div>

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
      })
    ).isRequired,
  }).isRequired,
};
