/// <reference types="react" />
import * as React from "react";
import { File, FileType, Directory } from "../model";
export declare class NewFileDialog extends React.Component<{
    isOpen: boolean;
    directory: Directory;
    onCreate: (file: File) => void;
    onCancel: () => void;
}, {
    fileType: FileType;
    description: string;
    name: string;
}> {
    constructor(props: any);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    nameError(): string;
    fileName(): string;
    createButtonLabel(): string;
    render(): JSX.Element;
}
