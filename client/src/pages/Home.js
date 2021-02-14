import { useState, useEffect } from 'react';
import BlogsList from '../components/BlogsList';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch(`api/blogs`);
    const [ reversedBlogs, setReversedBlogs ] = useState([]);
    
    useEffect(() => {
        if (blogs) {
            setReversedBlogs(blogs.reverse());
        }
        console.log(blogs)
    }, [blogs])

    return (
        <div className="home-page page">
            { isLoading && <Loading /> }
            { blogs && <BlogsList blogs={reversedBlogs} title="All blogs!" />}
            { error && <h1>Something went wrong</h1> }
        </div>
    );
};

export default Home;