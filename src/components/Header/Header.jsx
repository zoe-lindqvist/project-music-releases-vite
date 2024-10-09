import heroImage from "../../assets/icons/heroVideo.mp4"; // Import hero image
import "./Header.css";

export const Header = () => {
  return (
    <header className="hero-header">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <h1 className="header-title">Musify</h1>
    </header>
  );
};
