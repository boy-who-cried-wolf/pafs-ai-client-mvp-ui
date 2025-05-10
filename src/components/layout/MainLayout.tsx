import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Document Processed',
      message: 'Your tax return has been analyzed',
      time: '5 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'Financial Insight',
      message: 'New investment opportunity available',
      time: '1 hour ago',
      read: false,
    },
  ]);

  const navItems = [
    { icon: HomeIcon, label: 'Dashboard', path: '/dashboard' },
    { icon: ArrowUpTrayIcon, label: 'Upload', path: '/upload' },
    { icon: ChartBarIcon, label: 'Analytics', path: '/analytics' },
    { icon: Cog6ToothIcon, label: 'Settings', path: '/settings' },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="PAFS-AI"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-300 hover:text-white relative"
                >
                  <BellIcon className="w-6 h-6" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700"
                    >
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="text-lg font-semibold text-white">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer ${
                              !notification.read ? 'bg-blue-900/50' : ''
                            }`}
                            onClick={() => {
                              setNotifications((prev) =>
                                prev.map((n) =>
                                  n.id === notification.id
                                    ? { ...n, read: true }
                                    : n
                                )
                              );
                            }}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-white">
                                  {notification.title}
                                </h4>
                                <p className="text-sm text-gray-300">
                                  {notification.message}
                                </p>
                              </div>
                              <span className="text-xs text-gray-400">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Menu */}
              <button className="flex items-center space-x-2 p-2 text-gray-300 hover:text-white">
                <UserIcon className="w-6 h-6" />
                <span className="hidden md:block">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Side Navigation */}
        <aside className="w-64 bg-gray-800 border-r border-gray-700 h-[calc(100vh-4rem)] fixed">
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 