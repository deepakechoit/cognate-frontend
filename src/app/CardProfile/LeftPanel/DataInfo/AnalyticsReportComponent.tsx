// components/AnalyticsReportComponent.tsx

import { AnalyticsReport } from "./analyticsData";

type Props = {
  report: AnalyticsReport;
};

const AnalyticsReportComponent = ({ report }: Props) => (
  <div className="space-y-6 ">
    <div className="text-gray-800">{report.summary}</div>

    <div>
      <div className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>📊 Detailed Analytics Report</span>
      </div>
      <div className="space-y-4">
        {report.items.map((item, idx) => (
          <div key={item.title} className="pb-3">
            <div className="font-semibold">
              {idx + 1}. {item.title}
              {item.score !== undefined &&
                item.maxScore !== undefined &&
                (
                  <span className="ml-2 text-sm text-blue-700">{item.score} / {item.maxScore}</span>
                )
              }
            </div>
            <div className="text-gray-700">{item.description}</div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="font-semibold flex items-center gap-2 mt-4 mb-1">📝 Conclusion:</div>
      <div className="text-gray-900">{report.conclusion}</div>
    </div>
  </div>
);

export default AnalyticsReportComponent;
