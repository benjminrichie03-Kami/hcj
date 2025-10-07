"use client";
import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import Sidebar from "../../components/Sidebar";

export default function AdminLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        isMobileOpen={mobileMenuOpen}
        onMobileToggle={setMobileMenuOpen}
      />

      <div 
        className={`flex flex-col min-h-screen transition-all duration-300 
          ${sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'} ml-0`}
      >
        <div className="sticky top-0 z-20 bg-white">
          <AdminHeader onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
