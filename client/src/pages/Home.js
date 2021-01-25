import { useState } from 'react';
import BlogsList from '../components/BlogsList';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch('https://jevdev.herokuapp.com/api/blogs/');
    
    return (
        <div className="home-page page container">
            { isLoading && <Loading /> }
            { blogs && <BlogsList blogs={blogs} title="All blogs!" />}
            { error && <h1>Something went wrong</h1> }
        </div>
    );
};

export default Home;