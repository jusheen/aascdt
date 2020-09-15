import React from 'react';

export const HomeTitleContext = React.createContext({
  title: 'default title',
  setTitle: () => {},
});