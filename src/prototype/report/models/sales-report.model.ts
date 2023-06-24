import { ReportPrototype } from '../interfaces/report-prototype.interface';

export class SalesReport implements ReportPrototype {
  private data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  clone(): ReportPrototype {
    // Clone logic for SalesReport
    const clonedReport = new SalesReport([...this.data]);
    // Perform any necessary deep cloning of propertie
    return clonedReport;
  }

  generate(): Promise<string> {
    // Report generation logic for SalesReport
    return Promise.resolve('s');
  }
}
