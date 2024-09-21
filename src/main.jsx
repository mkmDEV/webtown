import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider dir='rtl'>
      <App />
    </ThemeProvider>
  </StrictMode>
);
