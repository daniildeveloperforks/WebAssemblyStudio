/// <reference types="react" />
import * as React from "react";
import { SplitInfo } from "./Split";
import { Editor, View } from "./editor";
import { Sandbox } from "./Sandbox";
import { Project } from "../model";
export declare class ControlCenter extends React.Component<{
    project: Project;
}, {
    /**
     * Split state.
     */
    splits: SplitInfo[];
    /**
     * Visible pane.
     */
    visible: "output" | "problems";
}> {
    constructor(props: any);
    sandbox: Sandbox;
    outputView: View;
    refs: {
        container: HTMLDivElement;
    };
    outputViewEditor: Editor;
    setOutputViewEditor(editor: Editor): void;
    setSandbox(sandbox: Sandbox): void;
    logLnTimeout: any;
    logLn(message: string, kind?: "" | "info" | "warn" | "error"): void;
    createPane(): JSX.Element;
    render(): JSX.Element;
}
