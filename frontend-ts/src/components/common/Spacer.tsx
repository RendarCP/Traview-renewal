import React from 'react';

type SpacerProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const Spacer = ({ top, left, right, bottom}: SpacerProps) => {
  return(
    <div style={{ marginTop: top, marginLeft: left, marginRight: right, marginBottom: bottom}} />
  )
}

export default Spacer