import React from 'react';

export const combineContexts =
  (...providers) =>
  (props) =>
    providers.reduceRight((children, Provider) => {
      return <Provider {...props}>{children}</Provider>;
    }, props.children);
