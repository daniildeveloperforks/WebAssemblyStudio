/// <reference types="react" />
import * as React from "react";
import { Project } from "../model";
export declare class StatusBar extends React.Component<{
    project: Project;
}> {
    constructor(props: any);
    onDidChangeStatus: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
