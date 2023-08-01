import * as React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import {
  ProBoxPro,
  ProBoxImg,
  ProBoxText,
  ProBoxH3,
  ProBoxP,
  ProBoxStack,
  ProBoxStackP,
  ProBoxLinks,
  ProBoxLinksA,
} from "./ProBox.styles";

export const ProBox = ({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  scrollY,
  cName,
}) => {
  const [scroll, setScroll] = React.useState(false);

  return (
    <ProBoxPro cName={cName}>
      <ProBoxImg>
        <a target="_blank" href={demo} rel="noreferrer">
          <img
            src={img}
            alt="website"
            style={{
              height: "auto",
              transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
              transition: "transform 7s ease-in-out",
              width: "100%",
            }}
            onMouseEnter={() => setScroll(true)}
            onMouseLeave={() => setScroll(false)}
          />
        </a>
      </ProBoxImg>
      <ProBoxText>
        <ProBoxH3>{title}</ProBoxH3>
        <ProBoxP>{description}</ProBoxP>
        <ProBoxStack>
          <ProBoxStackP>{techno1}</ProBoxStackP>
          <ProBoxStackP>{techno2}</ProBoxStackP>
        </ProBoxStack>
        <ProBoxLinks>
          <ProBoxLinksA target="_blank" href={code} rel="noreferrer">
            Code {<AiOutlineGithub size={25} />}
          </ProBoxLinksA>
          <ProBoxLinksA target="_blank" href={demo} rel="noreferrer">
            Live Demo
            {<HiExternalLink size={25} />}
          </ProBoxLinksA>
        </ProBoxLinks>
      </ProBoxText>
    </ProBoxPro>
  );
};
