import React from 'react';

function DebugJSON(props) {
  const { children, ...rest } = props;
  return <pre {...rest}>{JSON.stringify(children, null, 2)}</pre>;
}

export default DebugJSON;
