import { memoriesForLife } from "@/data/memoriesforlife";

export default async function VideoDetailPage({ params }) {
  const { slug } = await params; // ✅ Next.js 15 rule

  const video =
    memoriesForLife.topVideos.find(v => v.slug === slug) ||
    memoriesForLife.bottomVideos.find(v => v.slug === slug);

  if (!video) {
    return (
      <div className="py-24 text-center text-gray-500 text-lg">
        Video not found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-6">
          {video.title || "Travel Video"}
        </h1>

        {/* YOUTUBE PLAYER */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-2">
            About this video
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Watch highlights from our unforgettable journey. This travel
            experience captures scenic routes, local culture, adventure,
            and real memories made on the road.
          </p>
        </div>

      </div>
    </section>
  );
}
