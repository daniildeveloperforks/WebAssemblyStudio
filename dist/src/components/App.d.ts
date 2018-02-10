/// <reference types="react" />
import * as React from "react";
import { Project, File, Directory } from "../model";
import { SplitInfo } from "./Split";
import { ToastContainer } from "./Toasts";
import { ControlCenter } from "./ControlCenter";
import Group from "../utils/group";
export interface AppState {
    file: File;
    fiddle: string;
    groups: Group[];
    group: Group;
    /**
     * If not null, the the new file dialog is open and files are created in this
     * directory.
     */
    newFileDialogDirectory: Directory;
    /**
     * If not null, the the edit file dialog is open.
     */
    editFileDialogFile: File;
    /**
     * If true, the share fiddle dialog is open.
     */
    shareDialog: boolean;
    /**
     * If true, the new project dialog is open.
     */
    newProjectDialog: boolean;
    /**
     * Primary workspace split state.
     */
    workspaceSplits: SplitInfo[];
    /**
     * Secondary console split state.
     */
    consoleSplits: SplitInfo[];
    /**
     * Editor split state.
     */
    editorSplits: SplitInfo[];
    /**
     * If true, the upload file dialog is open.
     */
    uploadFileDialogDirectory: Directory;
    showProblems: boolean;
    showSandbox: boolean;
}
export interface AppProps {
    embed: boolean;
    fiddle: string;
}
export declare class App extends React.Component<AppProps, AppState> {
    fiddle: string;
    project: Project;
    toastContainer: ToastContainer;
    constructor(props: AppProps);
    openProjectFiles(json: any): void;
    initializeProject(): Promise<void>;
    registerLanguages(): Promise<void>;
    loadReleaseNotes(): Promise<void>;
    registerShortcuts(): void;
    logLn(message: string, kind?: "" | "info" | "warn" | "error"): void;
    componentWillMount(): void;
    componentDidMount(): void;
    share(): void;
    run(): void;
    splitGroup(): void;
    build(): Promise<void>;
    update(): Promise<void>;
    fork(): Promise<void>;
    gist(): Promise<void>;
    download(): Promise<void>;
    /**
     * Remember workspace split.
     */
    private workspaceSplit;
    makeToolbarButtons(): JSX.Element[];
    private controlCenter;
    setControlCenter(controlCenter: ControlCenter): void;
    render(): JSX.Element;
}
