import P from "prop-types";
import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export const GridText = ({ background = false, title, grid, description }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background}>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({ title: P.string.isRequired, description: P.string.isRequired })).isRequired,
  background: P.bool,
};
