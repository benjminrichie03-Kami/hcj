import Link from 'next/link';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Button({ 
  text,
  icon: Icon,
  iconPosition = "left", 
  bgColor = "bg-primary-500",
  hoverBgColor = "hover:bg-primary-600",
  textColor = "text-white",
  hoverTextColor,
  border,
  rounded = "rounded-lg",
  size = "md", 
  className = "", 
  disabled = false,
  loading = false,
  loadingStateText = "Loading...",
  link,
  ...props 
}) {
  const baseClasses = "font-medium transition-colors duration-200 flex items-center justify-center gap-2"
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-xs",
    lg: "px-6 py-2 text-base"
  }
  
  const buttonClasses = `
    ${baseClasses} 
    ${bgColor}
    ${hoverBgColor}
    ${textColor}
    ${hoverTextColor}
    ${rounded}
    ${border ? `border-2 ${border}` : ''}
    ${sizes[size]} 
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `

  const content = (
    <>
      {loading ? (
        <>
          <AiOutlineLoading3Quarters className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} animate-spin`} />
          {loadingStateText}
        </>
      ) : (
        <>
          {iconPosition === "left" && Icon && <Icon className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />}
          {text}
          {iconPosition === "right" && Icon && <Icon className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />}
        </>
      )}
    </>
  )

  if (link) {
    return (
      <Link href={link} className={buttonClasses} {...props}>
        {content}
      </Link>
    )
  }
  
  return (
    <button 
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
}