import React from 'react';
import { DiBootstrap, DiCloud9, DiCss3, DiDebian, DiFirebase, DiGit, DiHtml5, DiJava, DiJavascript, DiLinux, DiMysql, DiPhp, DiPython, DiReact, DiTerminal, DiUnitySmall, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Flexing, Space } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <Space />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. Not only there but even in Software Engineering.
    </SectionText>
    <List>
      <ListItem>
        <Flexing>
        <DiHtml5 size="3rem" />&nbsp;&nbsp;
        <DiCss3 size="3rem" />&nbsp;&nbsp;
        <DiJavascript size="3rem" />&nbsp;&nbsp;
        <DiBootstrap size="3rem" />&nbsp;&nbsp;
        <DiReact size="3rem" />
        </Flexing>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JS and some frameworks.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <Flexing>
        <DiPhp size="3rem" />&nbsp;&nbsp;
        <DiMysql size="3rem" />
        </Flexing>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP and SQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <Flexing>
        <DiPython size="3rem" />&nbsp;&nbsp;
        <DiJava size="3rem" />&nbsp;&nbsp;
        <DiUnitySmall size="3rem" />&nbsp;&nbsp;
        <DiTerminal size="3rem" />&nbsp;&nbsp;
        <DiLinux size="3rem" />&nbsp;&nbsp;
        <DiGit size="3rem" />
        </Flexing>
        <ListContainer>
          <ListTitle>Software Engineering</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, Python and more...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
