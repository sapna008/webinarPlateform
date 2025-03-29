import { TrendingUp, Users, DollarSign, UserPlus } from 'lucide-react';

function StatsCard({ title, value, trend, icon, subtitle }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        <div className="p-2 bg-indigo-100 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{value}</span>
        {trend && (
          <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
    </div>
  );
}

export function WebinarStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Webinar Revenue"
        value={`$${stats.totalRevenue}`}
        trend={35}
        icon={<DollarSign className="w-5 h-5 text-indigo-600" />}
        subtitle="143 Orders"
      />
      <StatsCard
        title="Affiliate Revenue"
        value={`$${stats.affiliateRevenue}`}
        trend={23}
        icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
        subtitle="32k Visitors"
      />
      <StatsCard
        title="Subscribers"
        value={stats.subscribers.toLocaleString()}
        trend={53}
        icon={<UserPlus className="w-5 h-5 text-indigo-600" />}
        subtitle="$37.48 Average Order"
      />
      <StatsCard
        title="Monthly Active Users"
        value={stats.monthlyActiveUsers.toLocaleString()}
        trend={12}
        icon={<Users className="w-5 h-5 text-indigo-600" />}
        subtitle="Wed, Jul 20"
      />
    </div>
  );
}