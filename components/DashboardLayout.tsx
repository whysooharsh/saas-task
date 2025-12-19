'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { LayoutDashboard, Users, Settings, Menu, X, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
       {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

       <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#131415', borderRight: '1px solid #222228' }}
      >
        <div className="flex flex-col h-full">
           <div className="flex items-center justify-between h-16 px-6" style={{ borderBottom: '1px solid #222228' }}>
            <Link href="/" className="flex items-center space-x-2">
              <svg width="32" height="26" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414Z" fill="white" />
              </svg>
              <span className="text-xl font-bold text-white">Squid</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={isActive ? { background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' } : {}}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4" style={{ borderTop: '1px solid #222228' }}>
            <div className="flex items-center space-x-3 mb-4 p-3 rounded-xl" style={{ backgroundColor: '#222228' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}>
                <span className="text-white font-semibold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              style={{ backgroundColor: '#222228' }}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 h-16" style={{ backgroundColor: '#131415', borderBottom: '1px solid #222228' }}>
          <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1" />
          </div>
        </header>

         <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
