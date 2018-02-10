/// <reference types="react" />
import * as React from "react";
import { File, Directory } from "../model";
import { ITree } from "../monaco-extra";
export interface DirectoryTreeProps {
    directory: Directory;
    value?: File;
    onEditFile?: (file: File) => void;
    onDeleteFile?: (file: File) => void;
    onNewFile?: (directory: Directory) => void;
    onNewDirectory?: (directory: Directory) => void;
    onClickFile?: (file: File) => void;
    onDoubleClickFile?: (file: File) => void;
    onUploadFile?: (directory: Directory) => void;
}
export declare class FileTemplate {
    readonly label: HTMLAnchorElement;
    readonly description: HTMLSpanElement;
    readonly monacoIconLabel: HTMLDivElement;
    constructor(container: HTMLElement);
    dispose(): void;
    set(file: File): void;
}
export declare class DirectoryTree extends React.Component<DirectoryTreeProps, {}> {
    constructor(props: DirectoryTreeProps);
    tree: ITree;
    contextViewService: any;
    contextMenuService: any;
    container: HTMLDivElement;
    private setContainer(container);
    private ensureTree();
    lastClickedTime: number;
    onClickFile(file: File): void;
    componentDidMount(): void;
    componentWillReceiveProps(props: DirectoryTreeProps): void;
    render(): JSX.Element;
}
