import { FaFacebook } from "react-icons/fa6";
//import { FaTiktok } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";

interface IProps {
  github: string;
  facebook: string;
  gmail: string;
}

const SocialMedia = (props: IProps) => {
  const { github, facebook, gmail } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="Github QuocTien2k"
      >
        <SiGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Quốc Tiến"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href={`mailto:${gmail}`}
        target="_blank"
        className="highlight"
        title="doquoctien.developer@gmail.com"
      >
        <SiGmail size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
