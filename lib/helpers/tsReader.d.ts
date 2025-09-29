import { TsReaderModelTypes } from "../types";
export declare const getModelTypes: (modelsPaths: string[], maxCommentDepth?: number) => TsReaderModelTypes;
export declare const registerUserTs: (basePath: string, noExperimentalResolver: boolean) => Promise<(() => void) | null>;
export declare function parseTSConfig(tsconfigFilePath: string): any;
