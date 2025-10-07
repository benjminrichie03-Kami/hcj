export default function StatsCard({ title, value, icon, color = "primary" }) {
  const colorClasses = {
    primary: "text-primary-600",
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    gray: "text-gray-400",
    black: "text-black",
    red: "text-red-600"
  }

  return (
    <div className="card w-full p-6 border border-[#7AC52D] shadow-sm rounded-md">
      <div className="flex w-full items-center relative">
        <div className={`p-3 rounded-lg absolute -top-6 -right-3 ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  )
}