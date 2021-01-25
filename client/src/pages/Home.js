import { useState } from 'react';
import BlogsList from '../components/BlogsList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch('http://localhost:5000/api/blogs/');
    
    return (
        <div className="home-page page container">
            { blogs && <BlogsList blogs={blogs} title="All blogs!" />}
        </div>
    );
};

export default Home;