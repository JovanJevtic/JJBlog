import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const NewBlog = () => {

    const [ value, setValue ] = useState('');
    const [ previewMode, setPreviewMode ] = useState('');
    const [ editorHeight, setEditorHeight ] = useState(0);

    const isMobile = window.innerWidth < '750';

    useEffect(() => {
        isMobile ? setPreviewMode('edit') : setPreviewMode('live');
        isMobile ? setEditorHeight(550) : setEditorHeight(350);
    }, [])

    return (
        <div>
            <div className="container">
                <MDEditor
                    visiableDragbar={true}
                    preview={previewMode}
                    value={value}
                    onChange={setValue}
                    height={editorHeight}
                    minHeight={350}
                    maxHeight={550}
                />
            </div>
        </div>
    );
};

export default NewBlog;
