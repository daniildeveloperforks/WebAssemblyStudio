/// <reference types="react" />
import * as React from "react";
export declare class Tabs extends React.Component<{
    onDoubleClick?: Function;
    commands?: JSX.Element | JSX.Element[];
}, {
    scrollLeft: number;
}> {
    container: HTMLDivElement;
    constructor(props: any);
    onWheel: (e: React.WheelEvent<any>) => void;
    onDoubleClick: (e: React.MouseEvent<any>) => any;
    render(): JSX.Element;
    componentDidUpdate(): void;
}
export interface TabProps {
    label?: string;
    value?: any;
    isActive?: boolean;
    isItalic?: boolean;
    onClick?: Function;
    onDoubleClick?: Function;
    onClose?: Function;
    icon?: string;
    isMarked?: boolean;
}
export declare class Tab extends React.Component<TabProps, {}> {
    render(): JSX.Element;
}
