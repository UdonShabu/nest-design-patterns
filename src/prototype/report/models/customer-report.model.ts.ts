import { ReportPrototype } from '../interfaces/report-prototype.interface';

export class CustomerReport implements ReportPrototype {
  constructor() {}

  clone(): ReportPrototype {
    const clonedReport = new CustomerReport();
    return clonedReport;
  }

  generate(): Promise<string> {
    return Promise.resolve('customer');
  }
}
