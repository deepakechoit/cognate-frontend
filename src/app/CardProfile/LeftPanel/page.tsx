// components/LeftPanel.jsx
import AnalyticsTabs from './AnalyticsTabs/page';
import DataInfo from './DataInfo/page';

const LeftPanel = () => {
  return (
    <div className="ml-auto sm:w-[74rem] w-full flex-col gap-6 h-full">
    <h2 className="text-xl font-medium mb-12">Please provide the detailed analytics for the video uploaded by advisor Bharat Rawat.</h2>
      <AnalyticsTabs />
      <DataInfo />
    </div>
  );
};

export default LeftPanel;