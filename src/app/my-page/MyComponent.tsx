import React from 'react';
import { action2 } from './actions';

export default function MyComponent() {
  console.log(action2, 'will not be tree-shaken because of this console log');
  return <span>i’m MyComponent</span>;
}
