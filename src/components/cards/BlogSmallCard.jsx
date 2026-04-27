import Image from "next/image";

export default function BlogSmallCard({
  image,
  title,
  date,
  readTime,
}) {
  return (
    <div className="flex gap-4 bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      
      {/* Thumbnail */}
      <div className="relative w-28 h-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-400">
          Published on {date}
        </p>

        <h3 className="text-sm font-semibold line-clamp-2">
          {title}
        </h3>

        <p className="text-xs text-gray-400">
          {readTime} minutes read
        </p>
      </div>

    </div>
  );
}
