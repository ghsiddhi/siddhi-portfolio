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
    <>
      <ProjectSection id="projects">
        <SectionContainer>
          <ProjectContent>
            <ProjectContentP>projects</ProjectContentP>
            <ProjectContentH3>
              Each project is a unique piece of development 🧩
            </ProjectContentH3>
            <ProjectsGrid>
              {/* <ProBox
                title="coindom"
                img={CoinDom}
                description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/coindom-crypto"
                demo="https://coindom-crypto-search.vercel.app/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              /> */}
            </ProjectsGrid>
          </ProjectContent>
          {/* <NewProjects className="new-projects">
            New projects coming soon...🙂
          </NewProjects> */}
        </SectionContainer>
      </ProjectSection>
    </>
  );
};
