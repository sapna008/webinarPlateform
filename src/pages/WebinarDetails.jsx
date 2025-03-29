import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, Star, Play } from 'lucide-react';
import { webinars } from '../data/webinars';
import { WebinarStats } from '../components/WebinarStats';

export function WebinarDetails() {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);

  useEffect(() => {
    const found = webinars.find(w => w.id === id);
    if (found) setWebinar(found);
  }, [id]);

  if (!webinar) {
    return <div>Webinar not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
              <span>Listing</span>
            </a>
            <button className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Edit webinar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  {webinar.status}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span className="text-sm font-medium">{webinar.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-4">{webinar.title}</h1>
              <p className="text-gray-600 mb-6">{webinar.description}</p>

              <div className="text-sm text-gray-500 mb-2">
                {webinar.enrolledCount} people have enrolled till now
              </div>
              <div className="text-lg font-bold">
                Price: ${webinar.price.toFixed(2)}
              </div>
            </div>

            <div className="w-96">
              <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-gray-300">
                <img
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full aspect-video object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group hover:bg-opacity-60">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-indigo-600 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {webinar.stats && (
          <>
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <WebinarStats stats={webinar.stats} />
          </>
        )}
      </main>
    </div>
  );
}