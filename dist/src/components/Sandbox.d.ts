/// <reference types="react" />
import * as React from "react";
import { Project, ILogger } from "../model";
export declare class Sandbox extends React.Component<{
    logger: ILogger;
}, {}> {
    container: HTMLDivElement;
    private setContainer(container);
    onResizeBegin: () => void;
    onResizeEnd: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    run(project: Project, src: string): void;
    render(): JSX.Element;
}
