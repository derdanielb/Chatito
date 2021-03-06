export type IInnerEntitiesTypes = 'Alias' | 'Slot' | 'Text';
export interface IASTLocationProperties { offset: number; line: number; column: number; }
export interface IASTLocation { start: IASTLocationProperties; end: IASTLocationProperties; }
export interface ISentenceTokens {
    value: string;
    type: IInnerEntitiesTypes;
    opt?: boolean;
    location?: IASTLocation;
    variation?: string | null;
    slot?: string;
}

export interface IChatitoEntityAST {
    type: 'IntentDefinition' | 'AliasDefinition' | 'SlotDefinition';
    key: string;
    max: number | null;
    location: IASTLocation;
    inner: ISentenceTokens[][];
    variation?: string | null;
}

export interface IChatitoParser { parse: (input: string) => IChatitoEntityAST[]; }
export interface IEntityDef { [key: string]: IChatitoEntityAST; }
export interface IEntities { Intent: IEntityDef; Slot: IEntityDef; Alias: IEntityDef; }

export interface IStatCache {
    optional: boolean;
    optionalCounts: number;
    totalCounts: number[];
    counts: IChatitoCache[];
    maxCounts: number[];
}
export type IChatitoCache = Map<string, IStatCache>;
export type IUtteranceWriter = (utterance: ISentenceTokens[], intentKey: string, n: number) => void;
