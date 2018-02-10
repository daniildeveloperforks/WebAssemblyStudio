import "monaco-editor";
import "minimatch";
export declare function shallowCompare(a: any[], b: any[]): boolean;
export declare enum FileType {
    JavaScript = "javascript",
    TypeScript = "typescript",
    HTML = "html",
    CSS = "css",
    C = "c",
    Cpp = "cpp",
    Rust = "rust",
    Wast = "wast",
    Wasm = "wasm",
    Directory = "directory",
    Log = "log",
    x86 = "x86",
    Markdown = "markdown",
    Cretonne = "cretonne",
    Unknown = "unknown",
}
export declare function isBinaryFileType(type: FileType): boolean;
export declare function languageForFileType(type: FileType): string;
export declare function nameForFileType(type: FileType): string;
export declare function extensionForFileType(type: FileType): string;
export declare function filetypeForExtension(extension: string): FileType;
export declare function mimeTypeForFileType(type: FileType): string;
export declare function getIconForFileType(fileType: FileType): string;
export declare class EventDispatcher {
    readonly name: string;
    private callbacks;
    constructor(name: string);
    register(callback: Function): void;
    unregister(callback: Function): void;
    dispatch(target?: any): void;
}
export declare class Problem {
    file: File;
    description: string;
    severity: "error" | "warning" | "info" | "ignore";
    marker: monaco.editor.IMarkerData;
    readonly key: string;
    constructor(file: File, description: string, severity: "error" | "warning" | "info" | "ignore", marker?: monaco.editor.IMarkerData);
    static fromMarker(file: File, marker: monaco.editor.IMarkerData): Problem;
}
export declare class File {
    name: string;
    type: FileType;
    data: string | ArrayBuffer;
    parent: Directory;
    /**
     * True if the buffer is out of sync with the data.
     */
    isDirty: boolean;
    isBufferReadOnly: boolean;
    readonly onDidChangeData: EventDispatcher;
    readonly onDidChangeBuffer: EventDispatcher;
    readonly onDidChangeProblems: EventDispatcher;
    readonly key: string;
    readonly buffer?: monaco.editor.IModel;
    /**
     * File type of the buffer. This may be different than this file's type, true for
     * non-text files.
     */
    bufferType: FileType;
    description: string;
    problems: Problem[];
    constructor(name: string, type: FileType);
    notifyDidChangeBuffer(): void;
    notifyDidChangeData(): void;
    ensureBufferIsLoaded(): Promise<void>;
    private updateBuffer();
    setProblems(problems: Problem[]): void;
    getEmitOutput(): Promise<any>;
    setData(data: string | ArrayBuffer): void;
    getData(): string | ArrayBuffer;
    getProject(): Project;
    getDepth(): number;
    getPath(): string;
    save(): Promise<void>;
    toString(): string;
}
export declare class Directory extends File {
    name: string;
    children: File[];
    isOpen: boolean;
    readonly onDidChangeChildren: EventDispatcher;
    constructor(name: string);
    private notifyDidChangeChildren();
    forEachFile(fn: (file: File) => void, recurse?: boolean): void;
    mapEachFile<T>(fn: (file: File) => T): T[];
    addFile(file: File): void;
    removeFile(file: File): void;
    newDirectory(path: string | string[]): Directory;
    newFile(path: string | string[], type: FileType): File;
    getImmediateChild(name: string): File;
    getFile(path: string | string[]): File;
    list(): string[];
    glob(pattern: string): string[];
    globFiles(pattern: string): File[];
}
export declare class Project extends Directory {
    onDidChangeStatus: EventDispatcher;
    onChange: EventDispatcher;
    onDirtyFileUsed: EventDispatcher;
    constructor();
    status: string;
    setStatus(status: string): void;
    clearStatus(): void;
    static onRun: EventDispatcher;
    static run(): void;
    static onBuild: EventDispatcher;
    static build(): void;
}
export interface ILogger {
    logLn(message: string, kind?: string): void;
}
