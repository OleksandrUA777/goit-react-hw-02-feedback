import PropTypes from 'prop-types';
import { List, SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      <List>{children}</List>
    </SectionStyled>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
