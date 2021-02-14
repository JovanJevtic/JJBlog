import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Blog from '../components/Blog';
import Loading from '../components/Loading';

const BlogPage = () => {
    
    const { id } = useParams();    
    const { data: blog, isLoading, error } = useFetch(`/api/blogs/${id}`);

    return (
        <div className="container">
            { blog && <Blog blog={blog} /> }
            { isLoading && <Loading /> }
            { error && <h1>Something went wrong</h1> }
        </div>
    );
};

export default BlogPage;
