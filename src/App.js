import React from 'react';
import Layout from './containers/layout';
import Content from './containers/content';


function App({children}) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}

export default App;
