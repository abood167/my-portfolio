import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import SkillsData from "./SkillsData.js";
import WorkExperience from "./WorkExperience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  document.title = "About | Catherine Mitagvaria";
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <WorkExperience />
      <SkillsData />
      <Languages />
      <Education />
      <DownloadResume />
      <Certifications />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
