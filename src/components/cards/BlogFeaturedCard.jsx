import Image from "next/image";

export default function BlogFeaturedCard({
  image,
  title,
  date,
  readTime,
  description,
}) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition h-full">
      
      {/* Image */}
      <div className="relative h-[260px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Published on {date}</span>
          <span>{readTime} minutes read</span>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

    </div>
  );
}
