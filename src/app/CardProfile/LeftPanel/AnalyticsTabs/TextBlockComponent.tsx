// components/TextBlockComponent.tsx
type TextBlock = {
  time: string;
  title: string;
  text: string;
  tags: string[];
};
type Props = {
  block: TextBlock;
};
const TextBlockComponent = ({ block }: Props) => (
  <div className="mb-10">
    <div className="text-lg text-gray-500 mb-1">{block.time}</div>
    <div className="font-bold mb-2">{block.title}</div>
    <div className="mb-2 text-lg">{block.text}</div>
    <div className="flex flex-wrap gap-5 ">
      {block.tags.map(tag => (
        <span key={tag} className="bg-[#EBF5FF] text-base font-medium p-2 rounded border border-[#7657ff62]">{tag}</span>
      ))}
    </div>
  </div>
);
export default TextBlockComponent;
