import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const NewBlog = () => {

    const [ value, setValue ] = useState('');

    return (
        <div>
            <div className="container">
                <MDEditor
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    );
};

export default NewBlog;
