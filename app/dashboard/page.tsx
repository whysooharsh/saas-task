'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { Users, Building2, Activity, TrendingUp } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    {
      name: 'Total Users',
      value: users.length,
      icon: Users,
      gradient: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)',
    },
    {
      name: 'Companies',
      value: new Set(users.map(u => u.company.name)).size,
      icon: Building2,
      gradient: 'linear-gradient(135deg, #8054FF 0%, #6366F1 100%)',
    },
    {
      name: 'Active Today',
      value: Math.floor(users.length * 0.7),
      icon: Activity,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    },
    {
      name: 'Growth',
      value: '+12%',
      icon: TrendingUp,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    },
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Welcome back! Here's an overview of your platform.
            </p>
          </div>

          {/* Stats Grid */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#FF9898', borderTopColor: 'transparent' }} />
            </div>
          ) : error ? (
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#131415' }}>
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={fetchUsers}
                className="px-6 py-3 rounded-xl text-white font-medium"
                style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="rounded-2xl p-6 transition-transform hover:scale-105"
                    style={{ backgroundColor: '#131415' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-400">
                          {stat.name}
                        </p>
                        <p className="mt-2 text-3xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: stat.gradient }}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Users */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#131415' }}>
                <div className="px-6 py-4" style={{ borderBottom: '1px solid #222228' }}>
                  <h2 className="text-xl font-semibold text-white">
                    Recent Users
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead style={{ backgroundColor: '#18181C' }}>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Company
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.slice(0, 5).map((user, index) => (
                        <tr 
                          key={user.id} 
                          className="hover:bg-white/5 transition-colors"
                          style={{ borderBottom: index < 4 ? '1px solid #222228' : 'none' }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                              >
                                <span className="text-white font-semibold">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-white">
                                  {user.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-400">
                              {user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-400">
                              {user.company.name}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
