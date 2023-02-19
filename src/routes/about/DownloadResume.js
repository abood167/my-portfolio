import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/abood.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="abdulrahmanbinsaas">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
