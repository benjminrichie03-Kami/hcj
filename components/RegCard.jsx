export default function RegCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  color = "primary", 
  bgColor = "white", 
  onViewReport, 
  reportUrl, 
  reportLabel = "View Report" 
}) {
  const colorClasses = {
    primary: "text-primary-600",
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    gray: "text-gray-400",
    black: "text-black",
    red: "text-red-600"
  }
  
  const bgColorClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-50",
    green: "bg-green-50",
    orange: "bg-orange-50",
    red: "bg-red-50",
    primary: "bg-[#7AC52D]",
    lightGreen: "bg-[#F1FCEE]",
    lightBlue: "bg-[#EFF5FE]"
  }

  return (
    <div className={`card w-full p-6 border shadow-sm rounded-md ${bgColorClasses[bgColor]}`}>
      <div className="flex w-full items-center justify-between relative">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
        </div>
        
        {(onViewReport || reportUrl) && (
          reportUrl ? (
            <a
              href={reportUrl}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium ml-4"
            >
              {reportLabel}
            </a>
          ) : (
            <button
              onClick={onViewReport}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium ml-4"
            >
              {reportLabel}
            </button>
          )
        )}
      </div>
    </div>
  )
}