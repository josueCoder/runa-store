import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import PageNotFound from './PageNotFound';
import '../style/global.css';
const App = () =>{
    return(
        
        <Layout>
            <Login/>
        </Layout>
        <PageNotFound/>
    );
}

export default App;
