import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 预加载关键图片以提高性能
const preloadImages = () => {
  const imageUrls = [
    require('./assets/001.jpg'),
    require('./assets/002.jpg'),
    require('./assets/003.jpg')
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// 组件挂载后预加载图片
window.addEventListener('load', preloadImages);

// 添加JSON-LD结构化数据以提高SEO效果
const addStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'China PetToy',
    'url': 'https://www.chinapettoy.com',
    'logo': 'https://www.chinapettoy.com/logo192.png',
    'description': 'Leading manufacturer of premium quality pet toys for global distributors and retailers.',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'China',
      'addressLocality': 'Shanghai'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+86-151-9022-2399',
      'email': 'gracezhao1177@gmail.com',
      'contactType': 'Customer Service'
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// 页面加载后添加结构化数据
window.addEventListener('load', addStructuredData);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
