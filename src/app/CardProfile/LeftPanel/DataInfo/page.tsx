// app/analytics/page.tsx

import { analyticsReport } from "./analyticsData";
import AnalyticsReportComponent from "./AnalyticsReportComponent";

export default function AnalyticsPage() {
  return (
    <main className="flex items-center justify-center py-11">
      <AnalyticsReportComponent report={analyticsReport} />
    </main>
  );
}
