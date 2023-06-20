import {
  ProjectSection,
  SectionContainer,
  NewProjects,
} from "./Projects.styles";

export const Projects = () => {
  return (
    <ProjectSection id="projects">
      <SectionContainer>
        <NewProjects className="new-projects">
          New projects coming soon...🙂 Stay tuned!
        </NewProjects>
      </SectionContainer>
    </ProjectSection>
  );
};
