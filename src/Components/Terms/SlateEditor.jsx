import React, { useMemo, useState, useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";

const SlateEditor = () => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const [value, setValue] = useState([
        {
            type: "paragraph",
            children: [{ text: "" }], // Initialize with an empty paragraph
        },
    ]);

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case "paragraph":
                return <p {...props.attributes}>{props.children}</p>;
            default:
                return <p {...props.attributes}>{props.children}</p>;
        }
    }, []);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        >
            <Editable renderElement={renderElement} />
        </Slate>
    );
};

export default SlateEditor;
