// components/RightPanel.jsx
import Image from "next/image";
import WeeklyNudges from "./WeeklyNudges";
const RightPanel = () => {
  return (
    <div className="rounded-xl bg-[#F4F8FF] p-5">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="bg-[#6B8BBA] h-12 w-12 rounded-full flex items-center justify-center " >
            <Image
                            src={'/images/icons/headphone.svg'}
                            alt={'icon'}
                            width={20}
                            height={20}
                            className="w-8 h-8"
                            />
        </div>
        <div className="flex flex-col gap-2" >
            <span className="bg-[#D9ECFF]  text-base px-2 py-1 rounded-md font-medium w-fit">
            Pitch Adherence
            </span>
            <span className="text-base text-[#556E94]">
            Structured (5) • Un-Structured(3)
            </span>
        </div>
      </div>

      <div className="border-[#CDDAED] border-b mb-9 mt-6" ></div>

      {/* User Name */}
      <div className="mb-4">

        <div className="flex items-center gap-2.5 mb-11">
          <Image
          src={'/images/icons/user.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <h3 className="text-lg font-medium text-[#03070D]">User Name</h3>
        </div>

        <div className="flex items-center gap-2.5 mb-2.5">
          <Image
          src={'/images/icons/prompt.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Prompt</span>
        </div>

        <div className="">
          <p className="text-lg text-[#03070D] leading-relaxed">
            Please provide the detailed analytics for the video uploaded by
            Bharat Rawat, including the video file, transcript and relevant
            indexes
          </p>

          {/* Meta */}
          <div className="flex gap-7 items-center mt-5 mb-7">

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">1k</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">5m</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">2 days ago</span>
            </div>
          </div>

          
          {/* Actions */}
          <div className="flex items-center gap-3 mt-3">
            <button className="cursor-pointer bg-[#6243F0] text-white px-4 py-1 rounded text-lg hover:bg-purple-700 flex h-10 flex-1 w-full justify-center items-center gap-2">
              <Image
          src={'/images/icons/prompt2.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-4 h-4"
          />
              Use Prompt
            </button>
            <button className="p-2 hover:outline-1 outline-[#8EA1BD] rounded-xl border border-[#8EA1BD] cursor-pointer">
              <Image
              src={'/images/icons/copy.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
            </button>
          </div>



        </div>
      </div>

      {/* Structured Data */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/table.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Structured Data (5)</span>
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between  p-1"
            >
              <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/column.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
              <span className="text-base font-normal ">Table Name-{item}</span>
            </div>
              <span className="text-sm text-[#556E94]">
                ROWS (20) COLUMN (10)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unstructured Data */}
      <div>
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/format.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Unstructured Data (3)</span>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center  p-1"
            >
              <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/file.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
              <span className="text-base font-normal ">File Name-{item}</span>
            </div>
            </div>
          ))}
        </div>
      </div>

        <div>
          <div className="flex items-center gap-2.5 mb-6 mt-11">
            <Image
            src={'/images/icons/format.svg'}
            alt={'icon'}
            width={20}
            height={20}
            className="w-7 h-7"
            />
            <span className="text-lg font-medium text-[#03070D]">Weekly Nudges</span>
          </div>
          <div className="space-y-2">
              <WeeklyNudges nudges={nudges} />
          </div>
        </div>



    </div>
  );
};

const nudges = [
  { id: 1, title: "Nudge 1", description: "Remember to follow up with leads Remember to follow up with leads." },
  { id: 2, title: "Nudge 2", description: "Update your sales pitch." },
  { id: 3, title: "Nudge 3", description: "Check your KPI metrics." },
  { id: 4, title: "Nudge 4", description: "Prepare next week's plan." },
];

export default RightPanel;
