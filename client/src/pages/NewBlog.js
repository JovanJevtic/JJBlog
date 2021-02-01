import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const NewBlog = () => {

    const [ value, setValue ] = useState('');
    const [ previewMode, setPreviewMode ] = useState('');

    const isMobile = window.innerWidth < '750';

    useEffect(() => {
        isMobile ? setPreviewMode('edit') : setPreviewMode('live')
    }, [])

    useEffect(() => {
        console.log(previewMode)
    }, [previewMode])

    return (
        <div>
            <div className="container">
                <MDEditor
                    visiableDragbar={true}
                    minHeight={350}
                    maxHeight={500}
                    preview={previewMode}
                    value={value}
                    onChange={setValue}
                />

                <MDEditor.Markdown source={value} />
            </div>
        </div>
    );
};

export default NewBlog;
