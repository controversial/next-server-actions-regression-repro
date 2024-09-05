'use client';

import React, { useEffect } from 'react';
import { action1, action2 } from './actions';
import MyComponent from './MyComponent';

export default function Page() {
  console.log('Page imported action2', action2); // to prevent tree-shaking

  // calling action1 fails!!
  useEffect(() => {
    action1().then((obj) => {
      console.log('action1 returned:', obj);
    });
  }, []);

  return <MyComponent />;
}
