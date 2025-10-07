export default function Card({ title, subtitle, value, icon, className = "", children }) {
  return (
    <div className={`card py- ${className}`}>
      {/* CARD WITH ICON AND STATS */}
      {(title && value !== undefined) && (
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {icon && <div className="mr-3 text-primary-500">{icon}</div>}
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
            </div>
          </div>
        </>
      )}

      {/* CARD WITH CUSTOM CONTENT */}
      {children && !title && (
        <div>{children}</div>
      )}

      {/* CARD WITH TITLE AND CUSTOM CONTENT */}
      {children && title && !value && (
        <>
          <div className="flex items-center mb-4">
            {icon && <div className="mr-3 text-primary-500">{icon}</div>}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  )
}