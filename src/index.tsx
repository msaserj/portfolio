import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SeoHelmet } from './00-Common/utils/SeoHelmet';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <SeoHelmet
      title={'msaserj'}
      content={'Portfolio'}
      description={'Personal portfolio page'}
      imgUrl={'https://msaserj.ru/portfolio/PortfolioImages/code.jpg'}
      type={'website'}
    >
      <App />
    </SeoHelmet>
  </BrowserRouter>
);
