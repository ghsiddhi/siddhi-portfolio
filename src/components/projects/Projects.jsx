import Aovstudios from "../../images/aovstudios.png";
import { ProBox } from "./proBox";
import {
  ProjectSection,
  SectionContainer,
  NewProjects,
  ProjectContent,
  ProjectContentP,
  ProjectContentH3,
  ProjectsGrid,
} from "./Projects.styles";

export const Projects = () => {
  return (
    <ProjectSection id="projects">
      <SectionContainer>
        <ProjectContent>
          <ProjectContentP>projects</ProjectContentP>
          <ProjectContentH3>
            Each project is a unique piece of development 🧩
          </ProjectContentH3>
          <ProjectsGrid>
            <ProBox
              title="aov studios"
              img={Aovstudios}
              description="The official website of AOV Studios, an Architecture firm. It is built in react.js and css using interactive elements, with a focus on simplicity and clean design, showcasing their work and expertise."
              techno1="React"
              techno2="CSS"
              code="https://github.com/GrowthVVork/aov-studios"
              demo="https://aovstudios.co.in/"
              scrollY="-75.5%"
              cName="reversed-proj"
            />
          </ProjectsGrid>
        </ProjectContent>
        <NewProjects className="new-projects">
          More projects coming soon...🙂
        </NewProjects>
      </SectionContainer>
    </ProjectSection>
  );
};
