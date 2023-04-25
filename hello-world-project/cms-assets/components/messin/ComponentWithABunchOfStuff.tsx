import React from 'react';
import StaticContent from './StaticComponent.js';

export default function ComponentWithABunchOfStaticStuff({
  bigJsonStuff = {},
}) {
  return (
    <>
      <StaticContent>
        <code>
          <pre
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(bigJsonStuff, null, 2),
            }}
          />
        </code>
      </StaticContent>
    </>
  );
}
