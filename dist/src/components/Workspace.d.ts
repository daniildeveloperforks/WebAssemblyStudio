/// <reference types="react" />
import * as React from "react";
import { Project, File, Directory } from "../model";
import { SplitInfo } from "./Split";
export interface WorkspaceProps {
    /**
     * Active file.
     */
    file: File;
    project: Project;
    onEditFile?: (file: File) => void;
    onDeleteFile?: (file: File) => void;
    onRenameFile?: (file: File) => void;
    onNewFile?: (directory: Directory) => void;
    onNewDirectory?: (directory: Directory) => void;
    onClickFile: (file: File) => void;
    onDoubleClickFile?: (file: File) => void;
    onUploadFile?: (directory: Directory) => void;
}
export declare class Workspace extends React.Component<WorkspaceProps, {
    showProject: boolean;
    showFiles: boolean;
    splits: SplitInfo[];
}> {
    constructor(props: any);
    render(): JSX.Element;
}
