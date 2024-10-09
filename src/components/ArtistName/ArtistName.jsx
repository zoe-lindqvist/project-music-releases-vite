import { PropTypes } from "prop-types";
import "./ArtistName.css"; // Import the CSS file

export const ArtistName = ({ artist, showComma }) => {
  return (
    <span>
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artist.name}
      </a>
      {showComma && ", "}
    </span>
  );
};

ArtistName.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showComma: PropTypes.bool,
};
