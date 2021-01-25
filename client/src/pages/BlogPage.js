import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Blog from '../components/Blog';

const BlogPage = () => {
    
    const { id } = useParams();    
    const { data: blog, isLoading, error } = useFetch(`http://localhost:5000/api/blogs/${id}`);

    return (
        <div className="container">
            { blog && <Blog blog={blog} /> }
        </div>
    );
};

export default BlogPage;
