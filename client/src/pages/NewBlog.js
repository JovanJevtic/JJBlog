import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';

const NewBlog = () => {

    const [ body, setBody ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ thumbnail, setThumbnail ] = useState('');

    const [ previewMode, setPreviewMode ] = useState('');
    const [ editorHeight, setEditorHeight ] = useState(0);
    const isMobile = window.innerWidth < '750';

    useEffect(() => {
        isMobile ? setPreviewMode('edit') : setPreviewMode('live');
        isMobile ? setEditorHeight(550) : setEditorHeight(350);
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();

        const blog = { title, author, description, body, thumbnail };

        const blogData = new FormData();
        blogData.append('title', title);
        blogData.append('author', author);
        blogData.append('description', description);
        blogData.append('tbodyitle', body);
        blogData.append('thumbnail', thumbnail);

        sendData(blogData);
    };
    
    const sendData = async (data) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `/api/blogs`,
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="container">

                <form onSubmit={formSubmit}>

                    <input type="text" required={true} name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" required={true} name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <input type="text" required={false} name="description" value={description} onChange={(e) => setDescription(e.target.value)}  />
                    <input type="file" required={false} name="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} />

                    <button onClick={formSubmit} >Submit</button>
                </form>

                <MDEditor
                    visiableDragbar={true}
                    preview={previewMode}
                    value={body}
                    onChange={setBody}
                    height={editorHeight}
                    minHeight={350}
                    maxHeight={550}
                />
            </div>
        </div>
    );
};

export default NewBlog;
