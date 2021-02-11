import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const NewBlog = () => {

    const [ body, setBody ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ description, setDescription ] = useState('');

    const [ previewMode, setPreviewMode ] = useState('');
    const [ editorHeight, setEditorHeight ] = useState(0);
    const isMobile = window.innerWidth < '750';

    useEffect(() => {
        isMobile ? setPreviewMode('edit') : setPreviewMode('live');
        isMobile ? setEditorHeight(550) : setEditorHeight(350);
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();

        const blog = { title, description, author, body };

        if (blog.body !== '') {
            fetch('https://jevdevs.herokuapp.com/api/blogs/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log(`New blog added: ${blog}`)
                setTitle('');
                setBody('');
                setAuthor('');
                setDescription('');
            });
        }
    }

    return (
        <div>
            <div className="container">

                <form onSubmit={formSubmit}>

                    <input type="text" required={true} name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" required={true} name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <input type="text" required={true} name="description" value={description} onChange={(e) => setDescription(e.target.value)}  />

                    <button type="submit">Submit</button>
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
