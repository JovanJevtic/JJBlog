import { useState } from 'react';
import BlogsList from '../components/BlogsList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    
    return (
        <div className="home-page page container">
            { blogs && <BlogsList blogs={blogs} title="All blogs!" />}
        </div>
    );
};

export default Home;