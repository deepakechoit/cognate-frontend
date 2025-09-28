// components/VideoAnalyticsPage.jsx
'use client';
import { useState } from 'react';
import LeftPanel from './LeftPanel/page';
import RightPanel from './RightPanel/page';

const VideoAnalyticsPage = () => {
  return (
   <div className="flex sm:h-full h-auto p-10 gap-6 flex-wrap">
  {/* Left Panel */}
  <div className="flex-1 h-full overflow-auto scrollbar-thin">
    <LeftPanel />
  </div>

  {/* Right Panel */}
  <div className="sm:w-[28rem] w-full h-full overflow-auto scrollbar-thin">
    <RightPanel />
  </div>
</div>

  );
};

export default VideoAnalyticsPage;