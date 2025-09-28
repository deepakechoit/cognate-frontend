// components/AnalyticsTabs.jsx
'use client';
import { useEffect, useState } from 'react';

import DynamicBarChart from "@/component/chart";

import VideoComponent from './VideoComponent';
import TextBlockComponent from './TextBlockComponent';
import { videoData, textBlocks } from './data';
import Image from "next/image";
import { useRef } from "react";

  const sqlQuery = `
SELECT 
  cognitive_rate_per_rubric(transcript, 'key-points coverage') AS key_points_score,
  cognitive_rate_per_rubric(transcript, 'pain-points coverage') AS pain_points_score,
  cognitive_rate_per_rubric(transcript, 'feature demonstration') AS feature_demo_score,
  cognitive_rate_per_rubric(transcript, 'competition comparison') AS competition_score,
  cognitive_rate_per_rubric(transcript, 'overall confidence') AS confidence_score
FROM 
  sales_pitch_transcripts
WHERE 
  rep_name = 'Bharat Rawat'
  AND video_upload_date = (
    SELECT MAX(video_upload_date)
    FROM sales_pitch_transcripts
    WHERE rep_name = 'Bharat Rawat'
  );
`;

const AnalyticsTabs = () => {
  const [activeTab, setActiveTab] = useState('graph');

  const tabs = [
    { id: 'graph', label: 'Graph' },
    { id: 'video', label: 'Video & Transcripts' },
    { id: 'hindi_video', label: 'वीडियो और प्रतिलेख' },
    // { id: 'tamil_video', label: 'వీడియో & ట్రాన్స్క్రిప్ట్స్' },
    { id: 'telgu_video', label: 'వీడియో & ట్రాన్స్క్రిప్ట్స్' },
    { id: 'query', label: 'Query' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'graph':
        return <GraphContent />;
      case 'video':
        return <VideoContent type={'english'} />;
      case 'hindi_video':
        return <VideoContent type={'hindi'} />;
      case 'telgu_video':
        return <VideoContent type={'telugu'} />;
      case 'query':
        return <QueryContent />;
      default:
        return <GraphContent />;
    }
  };

  return (
    <div className="rounded-xl border-[#8EA1BD] border overflow-auto">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 bg-[#EBF1FA] p-[1.4rem_2.5rem_0rem_2.5rem] gap-10 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` cursor-pointer text-lg pb-[1rem] border-b-2 whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-b-2 border-[#6243F0] font-medium '
                : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-[#6243F0] font-normal'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="sm:h-[36.25rem] h-[calc(100vh_-_10rem)] p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

// Tab Content Components
const GraphContent = () => {
  const chartData = [
    { name: "Key-points Coverage", score: 4 },
    { name: "Pain-points Coverage", score: 3 },
    { name: "Feature Demonstration", score: 3 },
    { name: "Competition Comparison", score: 2 },
    { name: "Overall Confidence", score: 3 },
    { name: "Overall Confidence", score: 3 },
    { name: "Overall Confidence", score: 3 },
    { name: "Overall Confidence", score: 3 },
  ];

  return (
    <div>
    <div className="m-auto w-[100%] overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Indexes vs Score</h2>
      <DynamicBarChart data={chartData} />
    </div>
    </div>
  );
};

interface TextBlock {
  time: string;
  title: string;
  text: string;
  tags: string[];
}

// Define allowed languages
type Language = "english" | "hindi" | "telugu";

interface VideoContentProps {
  type: Language; // restrict type to valid keys
}

const VideoContent: React.FC<VideoContentProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleFullscreenToggle = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

const lang: "english" | "hindi" | "telugu" = "hindi";
const currentVideo = videoData[lang][0];
  return (
    <div ref={containerRef} className="h-full bg-white">
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Video Panel */}
        <div className="lg:w-1/2 w-full sticky top-8 bg-black rounded-xl">
          <VideoComponent url={currentVideo.url} title={currentVideo.title} />
        </div>

        {/* Text Panel */}
        <div className="lg:w-1/2 w-fit ml-auto flex flex-col overflow-auto h-full scrollbar-thin p-4">
          {/* Fullscreen Toggle Button */}
          <button
            onClick={handleFullscreenToggle}
            className=" cursor-pointer p-2 mb-4 rounded hover:bg-gray-100 transition w-fit ml-auto"
          >
            <Image
              src={
                isFullscreen
                  ? "/images/icons/compact.svg"
                  : "/images/icons/full-screen.svg"
              }
              alt={isFullscreen ? "Compact" : "Fullscreen"}
              width={20}
              height={20}
              className="w-6 h-6"
            />
          </button>

          {/* Text blocks */}
          {textBlocks[type].map((block: TextBlock, idx: number) => (
            <TextBlockComponent key={idx} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
};



const QueryContent = () => {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h1>SQL Query</h1>
      <pre>
        <code>{sqlQuery}</code>
      </pre>
    </div>
  );
};

export default AnalyticsTabs;