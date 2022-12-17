export interface ISequence {
  sequence: number[];
  direction: number;
  defaultSeq: number[];
}

export type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;
