import Image from "next/image";

export default function ReviewCard({ name, text, image }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col justify-between">
      
      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
        “{text}”
      </p>

      {/* User Info */}
      <div className="mt-6 flex items-center gap-3">
        
        {/* Profile Image */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={image || "/avatar.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name + Rating */}
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-yellow-400 text-xs leading-none">
            ★★★★★
          </p>
        </div>

      </div>
    </div>
  );
}
