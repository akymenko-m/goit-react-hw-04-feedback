import PropTypes from 'prop-types';
import { SectionBlock, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      {title && <Title>{title}</Title>}
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
