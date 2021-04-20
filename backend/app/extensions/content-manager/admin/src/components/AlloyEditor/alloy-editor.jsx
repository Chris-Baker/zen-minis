/** @format */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';

export const AlloyEditorComponent = (props) => {
    const { content, config, className, onChange } = props;
    const container = useRef(null);

    function handleChange() {
        onChange && onChange();
    }

    useEffect(() => {
        const editor = AlloyEditor.editable(container.current, config);
        editor.on('change', handleChange);
        return editor.destroy;
    }, []);

    return (
        <div ref={container} className={className}>
            {content}
        </div>
    );
};

AlloyEditorComponent.propTypes = {
    content: PropTypes.any,
    config: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func
};
