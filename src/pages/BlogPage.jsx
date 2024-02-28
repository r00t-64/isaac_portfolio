import React from 'react';
import {
    useParams
} from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Blog from '../partials/Blog';

function BlogPage() {
    let { url } = useParams(); 
    return (
        <section>
            <Header />
            <Blog url={url} />
            <Footer />
        </section>
    );
  }

export default BlogPage;