type TimelineItemProps = {
  year: string;
  description: string;
};

export default function TimelineItem({ year, description }: TimelineItemProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 w-3 h-3 bg-yellow-400 rounded-full" />
      <h4 className="font-semibold text-yellow-600">{year}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
