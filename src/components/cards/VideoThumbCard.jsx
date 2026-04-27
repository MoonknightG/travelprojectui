import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoThumbCard({ image }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={image}
        alt="Video thumbnail"
        width={500}
        height={300}
        className="w-full h-[180px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
          <Play className="text-blue-600" size={22} />
        </div>
      </div>
    </div>
  );
}
