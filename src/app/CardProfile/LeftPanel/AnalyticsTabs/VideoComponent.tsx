// components/VideoComponent.tsx
import Image from "next/image";
import Link from "next/link";

type VideoComponentProps = {
  url: string;
  title:string;
};
const VideoComponent = ({ url ,title }: VideoComponentProps) => (
  <div className="w-full h-auto">
    <video controls className="w-full rounded-lg shadow-lg" src={url}></video>
    <Link href={url} target="blank" >
        <div className="flex items-center p-6 gap-2.5">
            <div className=" text-[#3499FF] text-base" >{title}</div>
            <Image
                src={'/images/icons/link.svg'}
                alt={title}
                width={20}
                height={20}
                className="w-6 h-6"
            />
        </div>
    </Link>
  </div>
);
export default VideoComponent;
