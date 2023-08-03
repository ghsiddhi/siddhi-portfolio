import {
  ContactWrapper,
  SectionContainer,
  ContactContent,
  ContactTitle,
  ContactTitleP,
  ContactTitleH3,
  ContactIcons,
  ContactIconBox,
  ContactIconBoxSpan,
  ContactIconBoxSpanI,
  ContactInfo,
  ContactInfoH3,
  ContactInfoA,
} from "./Contact.styles";

export const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <SectionContainer>
        <ContactContent>
          <ContactTitle>
            <ContactTitleP>contact</ContactTitleP>
            <ContactTitleH3>Let's connect! Hit me up! 👇🏻</ContactTitleH3>
          </ContactTitle>
          <ContactIcons>
            <ContactIconBox>
              <ContactIconBoxSpan>
                <ContactIconBoxSpanI className="fa-solid fa-map-location-dot"></ContactIconBoxSpanI>
              </ContactIconBoxSpan>
              <ContactInfo>
                <ContactInfoH3>Location</ContactInfoH3>
                <ContactInfoA
                  href="https://goo.gl/maps/BTGNQhMHy2aifEeZ6"
                  target="_blank"
                >
                  Bengaluru, India
                </ContactInfoA>
              </ContactInfo>
            </ContactIconBox>

            <ContactIconBox>
              <ContactIconBoxSpan>
                <ContactIconBoxSpanI className="fa-solid fa-envelope-open-text"></ContactIconBoxSpanI>
              </ContactIconBoxSpan>
              <ContactInfo>
                <ContactInfoH3>Email</ContactInfoH3>
                <ContactInfoA href="mailto:siddhiusgupta@gmail.com">
                  siddhiusgupta@gmail.com
                </ContactInfoA>
              </ContactInfo>
            </ContactIconBox>
          </ContactIcons>
        </ContactContent>
      </SectionContainer>
    </ContactWrapper>
  );
};
