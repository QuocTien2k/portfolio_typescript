import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en";
type MultiLangText = Record<TLanguage, string>;

interface IProps {
  imgPath: string;
  title: MultiLangText;
  description: MultiLangText;
  githubLink: string;
  demoLink?: string;
}

function ProjectCard(props: IProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage as TLanguage;
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: 215 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title[currentLanguage]}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description[currentLanguage]}
          </Card.Text>
          <div>
            <Button variant="primary" href={props.githubLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>

            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
