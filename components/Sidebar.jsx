'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FiArrowRightCircle } from "react-icons/fi"
import Button from "./Button"
import { 
  LayoutDashboard,
  Users,
  ClipboardList,
  GraduationCap,
  BarChart3,
  Settings,
  ChevronLeft,
  UserCircle2,
  ChevronsLeft,
  X
} from 'lucide-react'

export default function Sidebar({ isCollapsed, onToggle, isMobileOpen, onMobileToggle }) {
  const pathname = usePathname()
  
  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      name: 'Students',
      href: '/admin/students',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Registrations',
      href: '/admin/registrations',
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      name: 'Exams',
      href: '/admin/exams',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: 'Reports',
      href: '/admin/reports',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: <Settings className="w-5 h-5" />
    }
  ]

  // Close mobile sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileOpen && !event.target.closest('.sidebar-container')) {
        onMobileToggle(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileOpen, onMobileToggle]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => onMobileToggle(false)} />
      )}

      {/* Sidebar */}
      <div className={`
        sidebar-container bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-screen z-30
        
        /* Desktop styles */
        md:fixed md:left-0 md:top-0 md:z-10 ${isCollapsed ? 'md:w-16' : 'md:w-64'}
        
        /* Mobile styles */
        fixed left-0 top-0 w-64 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        {/* HEADER */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between relative">
            {/* Mobile close button */}
            <button
              onClick={() => onMobileToggle(false)}
              className="md:hidden absolute -right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {!isCollapsed && (
              <div className="flex items-center py- space-x-3">
                <div className="flex items-center justify-center mx-auto">
                        <Image
                          src="/edcLogo.svg"
                          alt="EDC Logo"
                          width={50}
                          height={50}
                          className="mr-4"
                        />
                        <div className="flex flex-col">
                          <h1 className="text-xl font-bold text-[#182700]">EDCABIA</h1>
                          <p className="text-xs text-[#7AC52D]">EXAMS PORTAL</p>
                        </div>
                      </div>
              </div>
            )}
            
            {/* Desktop toggle button */}
            <button
              onClick={onToggle}
              className="hidden md:block hover:bg-gray-100 transition-colors absolute rounded-full p-2 -right-4 top-1/2 transform -translate-y-1/2"
            >
              <ChevronsLeft 
                className={`w-5 h-5 text-gray-600 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => onMobileToggle && onMobileToggle(false)} // Close mobile menu when link is clicked
                className={`flex items-center space-x-3 px-3 py-2.5 -mx-1 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-50 text-[#7AC52D] border-r-2 border-primary-500' 
                    : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className={`${isActive ? 'text-primary-600' : 'text-gray-500'}`}>
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* USER PROFILE SECTION */}
        <div className="p-4 border-t border-gray-200 space-y-4">
          {/* Desktop profile info */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <UserCircle2 className="w-5 h-5 text-gray-600" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-600 truncate">Efemini Primary School</p>
              </div>
            )}
          </div>

          {/* Mobile admin section */}
          <div className="md:hidden space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <UserCircle2 className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Welcome Admin</p>
                <p className="text-xs text-gray-600 truncate">Efemini Primary School</p>
              </div>
            </div>
            
            {/* Mobile logout button */}
            <Button
              text="Log Out"
              bgColor="bg-transparent"
              hoverBgColor="hover:bg-[#7AC52D]"
              hoverTextColor="hover:text-white"
              textColor="text-[#182700]"
              link="/auth/sign-in"
              border="border-[#7AC52D]"
              rounded="rounded-full"
              icon={FiArrowRightCircle}
              iconPosition="right"
              size="lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}