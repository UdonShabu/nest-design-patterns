export interface ReportPrototype {
  clone(): ReportPrototype;
  generate(): Promise<string>;
}
