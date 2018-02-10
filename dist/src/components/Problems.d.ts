/// <reference types="react" />
import * as React from "react";
import { Project, File } from "../model";
import { ITree } from "../monaco-extra";
export interface ProblemsProps {
    project: Project;
}
export declare class Problems extends React.Component<ProblemsProps, {}> {
    constructor(props: ProblemsProps);
    tree: ITree;
    contextViewService: any;
    contextMenuService: any;
    container: HTMLDivElement;
    private setContainer(container);
    private ensureTree();
    lastClickedTime: number;
    onClickFile(file: File): void;
    componentDidMount(): void;
    componentWillReceiveProps(props: ProblemsProps): void;
    render(): JSX.Element;
}
