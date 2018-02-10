/// <reference types="react" />
import * as React from "react";
import { File } from "../../model";
import "monaco-editor";
export declare class View {
    file: File;
    state: monaco.editor.ICodeEditorViewState;
    constructor(file: File, state: monaco.editor.ICodeEditorViewState);
}
export declare class EditorPaneProps {
    file: File;
    files: File[];
    preview: File;
    onClickFile?: (file: File) => void;
    onDoubleClickFile?: (file: File) => void;
    onClose?: (file: File) => void;
    onNewFile?: () => void;
    onFocus?: () => void;
    hasFocus?: boolean;
    onSplitEditor?: () => void;
}
export declare class EditorPane extends React.Component<EditorPaneProps, {
    views: Map<File, View>;
}> {
    constructor(props: any);
    private onUpdate;
    componentWillReceiveProps(nextProps: EditorPaneProps): void;
    render(): JSX.Element;
}
