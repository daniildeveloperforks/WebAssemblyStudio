/// <reference types="react" />
import * as React from "react";
import { SplitInfo } from "./Split";
export declare class Test extends React.Component<{}, {
    splits: SplitInfo[];
    width: number;
}> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
