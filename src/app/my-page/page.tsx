'use client';

import React, { useEffect } from 'react';
import MyComponent from './MyComponent';
import { action1 } from './actions';

export default function Page() {
  useEffect(() => {
    action1().then((obj) => { console.log('action1 returned:', obj); });
  }, []);

  return <MyComponent />;
}
