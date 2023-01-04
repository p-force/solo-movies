import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';

export default function layoutMW(req, res, next) {
  res.layout = (initState) => {
    const layoutElement = React.createElement(Layout, { initState });
    const html = renderToString(layoutElement);
    res.send(`<!DOCTYPE html>${html}`);
  };
  next();
}
