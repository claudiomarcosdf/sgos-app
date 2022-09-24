import React from 'react';

export const combineContexts = (providers) => {
  return (
    <>
      {providers.reduce((Prev, Curr) => ({ children }) => (
        <Prev>
          <Curr>{children}</Curr>
        </Prev>
      ))}
    </>
  );
};
