import { Injectable } from '@nestjs/common';
import { SalesReport } from './models/sales-report.model';
import { ReportPrototype } from './interfaces/report-prototype.interface';
import { CustomerReport } from './models/customer-report.model.ts';

@Injectable()
export class ReportService {
  generateReport(type: string, data: any): Promise<string> {
    let reportPrototype: ReportPrototype;

    switch (type) {
      case 'sales':
        reportPrototype = new SalesReport(data);
        break;
      case 'customer':
        reportPrototype = new CustomerReport();
        break;
      default:
        throw new Error('');
    }

    const clonedReport = reportPrototype.clone();
    const generatedReport = clonedReport.generate();

    return generatedReport;
  }
}
