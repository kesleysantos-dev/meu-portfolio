import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/kesley-santos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/kesleysantos-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://kesleysantos-dev.github.io/meu-portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Portfólio"
      ></a>
    </div>
  );
};

export default SocialLinks;
