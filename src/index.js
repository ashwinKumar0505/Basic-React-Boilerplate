import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Routes from './routes';

const Index = () => {
  return (
    <div className={styles.cb}>
      <h1 className={styles.heading}>
        This is just a basic React-boilerplate.
      </h1>
      <h3>What the boiler plate gives you : </h3>
      <ul>
        <li>Webpack configuration.</li>
        <li>Eslint configuration.</li>
        <li>Prettier configuration.</li>
        <li>Routing configuration</li>
        <li>Styling with CSS / SASS</li>
        <li>Netlify route fix configuration</li>
      </ul>
      <Routes />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
