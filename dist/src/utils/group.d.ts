import { File } from "../model";
export default class Group {
    file: File;
    files: File[];
    preview: File;
    constructor(file: File, preview: File, files: File[]);
    open(file: File, shouldPreview?: boolean): void;
    close(file: File): void;
}
