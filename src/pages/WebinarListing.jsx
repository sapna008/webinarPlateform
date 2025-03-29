import { useState } from 'react';
import { Search, BookmarkPlus } from 'lucide-react';
import { webinars } from '../data/webinars';
import { WebinarCard } from '../components/WebinarCard';

export function WebinarListing() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredWebinars = webinars.filter(webinar =>
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWebinarClick = (id) => {
    window.location.href = `/webinar/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">Home</h1>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2">
              <BookmarkPlus className="w-5 h-5" />
              My bookmarks
            </button>
          </div>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search webinars..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {filteredWebinars.map(webinar => (
            <WebinarCard
              key={webinar.id}
              webinar={webinar}
              onClick={handleWebinarClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
