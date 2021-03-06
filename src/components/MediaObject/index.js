import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MediaImage from './MediaImage';
import MediaBody from './MediaBody';

const MediaWrapper = styled.div`
  display: flex;
  margin-bottom: ${props => props.spacing || 0};
`;

const Media = (props) => (
  <MediaWrapper>
    <MediaImage
      imageAlign={props.imageAlign}
      imageAlt={props.imageAlt}
      imageHeight={props.imageHeight}
      imageLink={props.imageLink}
      imageSource={props.imageSource}
      imageWidth={props.imageWidth}
      reverse={props.reverse}
      spacing={props.spacing}
    />
    <MediaBody
      bodyAlign={props.bodyAlign}
      spacing={props.spacing}
      reverse={props.reverse}
    >
      {props.children}
    </MediaBody>
  </MediaWrapper>
);

Media.propTypes = {
  bodyAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  imageAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  imageAlt: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageLink: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  reverse: PropTypes.bool,
  spacing: PropTypes.string,
};

Media.defaultProps = {
  spacing: '0',
};

export default Media;
