import Image from "next/image";

export default function VideoInfoCard({ image, title, rating }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={350}
        className="h-[200px] w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="text-yellow-400 text-xs">
          ★★★★★ <span className="text-gray-500">(8k+)</span>
        </div>
      </div>
    </div>
  );
}
