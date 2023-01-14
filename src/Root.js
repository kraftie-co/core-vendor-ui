import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';
import initTranslations from './services/initTranslations';
import reportWebVitals from 'report-web-vitals';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import themes from './components-export/Theme';
import GlobalStyles from './globalStyles';
import { store } from './store';

import ProductsPage from './containers/ProductsPage';
import OrdersPage from './containers/OrdersPage';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound from './containers/NotFound';

function Root({ locale, theme }) {
  initTranslations(locale);

  return (
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<OrdersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
}

Root.propTypes = {
  locale: PropTypes.string,
  theme: PropTypes.object,
};

Root.defaultProps = {
  locale: 'en',
  theme: themes.light,
};

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

reportWebVitals();
