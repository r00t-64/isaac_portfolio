import React from 'react';
import {
    useParams
} from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Article from '../partials/Article';

function ArticlePage() {
    let { url } = useParams(); 
    return (
        <section>
            <Header />
            <Article url={url} />
            <Footer />
        </section>
    );
  }

export default ArticlePage;