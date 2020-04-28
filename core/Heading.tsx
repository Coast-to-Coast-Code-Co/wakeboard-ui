import * as React from 'react';

export enum HEADING_VARIANT {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export function Heading({
  variant,
  children,
} : {
  variant: HEADING_VARIANT | keyof typeof HEADING_VARIANT,
  children?: any,
}) {
  return React.createElement(
    variant,
    {},
    children
  )
}