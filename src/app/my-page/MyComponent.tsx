import { action3 } from './actions';

export default function MyComponent() {
  console.log('MyComponent imported action3', action3); // to prevent tree-shaking
  return <span>i’m MyComponent</span>;
}
