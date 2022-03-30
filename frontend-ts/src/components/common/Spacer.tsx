import React from 'react';
// import PropTypes from 'prop-types';

type SpacerProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const Spacer = ({ top, left, right, bottom }: SpacerProps) => {
  return <div style={{ marginTop: top, marginLeft: left, marginRight: right, marginBottom: bottom }} />;
};

Spacer.defatultProps = {
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
};

export default Spacer;
