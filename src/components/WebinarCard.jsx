import { Star } from 'lucide-react';

export function WebinarCard({ webinar, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] flex items-center"
      onClick={() => onClick(webinar.id)}
    >
      {/* photo */}
      <div className="w-30 bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center">

        <div className="w-20 h-20 rounded-full bg-blue-200 clip-star flex items-center justify-center overflow-hidden">
          <img
            src={webinar.instructor.avatar}
            alt={webinar.instructor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <p className="mt-2 text-center text-lg font-medium text-gray-700">
          {webinar.instructor.name}
        </p>
      </div>

      {/* dusra */}
      <div className="p-4 w-3/5 flex flex-col">


      <div className="flex justify-between items-center mb-4">
  <h3 className="text-lg font-semibold">{webinar.title}</h3>
  <div className="flex items-center gap-1">
    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
    <span className="text-sm font-medium">{webinar.rating}</span>
  </div>
</div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{webinar.description}</p>
        <div className="text-sm text-gray-500 mb-2">
                {webinar.enrolledCount} people have enrolled till now
              </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{webinar.enrolledCount} enrolled</div>
              <div className="font-semibold">${webinar.price.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
