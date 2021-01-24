import { useParams } from 'react-router-dom';

const BlogPage = () => {
    
    const { id } = useParams();    

    return (
        <div>
            <h1>Blog Page - {id}</h1>
        </div>
    );
};

export default BlogPage;
