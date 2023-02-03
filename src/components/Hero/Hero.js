import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Hey There! <br />
        I'm Seyifunmi.
      </SectionTitle>
      <SectionText>
        I haven't really thought of what to put here
      </SectionText>
      <Button onClick = {() => window.location = 'https://github.com/Felixdiamond'}>See My Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;