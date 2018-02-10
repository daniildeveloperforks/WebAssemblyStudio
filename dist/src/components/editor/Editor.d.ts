/// <reference types="react" />
import * as React from "react";
import { View } from "./EditorPane";
import "monaco-editor";
export interface MonacoProps {
    view: View;
    options?: monaco.editor.IEditorConstructionOptions;
}
export declare class Monaco extends React.Component<MonacoProps, {}> {
    editor: monaco.editor.IStandaloneCodeEditor;
    container: HTMLDivElement;
    revealLastLine(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: EditorProps): void;
    shouldComponentUpdate(nextProps: EditorProps, nextState: any): boolean;
    componentDidUpdate(): void;
    timeout: number;
    layout: () => void;
    componentWillUnmount(): void;
    registerActions(): void;
    private ensureEditor();
    private setContainer(container);
    render(): JSX.Element;
}
export interface EditorProps {
    view: View;
    options?: monaco.editor.IEditorConstructionOptions;
}
export declare class Editor extends React.Component<EditorProps, {}> {
    monaco: Monaco;
    setMonaco(monaco: Monaco): void;
    revealLastLine(): void;
    render(): JSX.Element;
}
