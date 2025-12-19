'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Mail, Phone, Globe, X } from 'lucide-react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterAndSortUsers();
  }, [users, searchQuery, sortOrder]);

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

  const filterAndSortUsers = () => {
    let filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6 px-4 sm:px-0">
          {/* Header */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Users</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-400">
              Manage and view all users in the system
            </p>
          </div>

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
              {/* Search and Sort Controls */}
              <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4" style={{ backgroundColor: '#131415' }}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name, email, or company..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{ backgroundColor: '#222228', border: 'none' }}
                    />
                  </div>
                  <button
                    onClick={toggleSortOrder}
                    className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-medium transition-all hover:opacity-90 whitespace-nowrap"
                    style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                  >
                    <ArrowUpDown className="w-4 h-4" />
                    <span>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                  </button>
                </div>
                <div className="mt-3 text-xs sm:text-sm text-gray-400">
                  Showing {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'}
                </div>
              </div>

              {/* Users List */}
              {filteredUsers.length === 0 ? (
                <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: '#131415' }}>
                  <p className="text-gray-400">
                    No users found matching your search criteria.
                  </p>
                </div>
              ) : (
                <>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden" style={{ backgroundColor: '#131415' }}>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead style={{ backgroundColor: '#18181C' }}>
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              User
                            </th>
                            <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Company
                            </th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentUsers.map((user, index) => (
                            <tr 
                              key={user.id} 
                              className="hover:bg-white/5 transition-colors"
                              style={{ borderBottom: index < currentUsers.length - 1 ? '1px solid #222228' : 'none' }}
                            >
                              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div 
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                                  >
                                    <span className="text-white text-sm sm:text-base font-semibold">
                                      {user.name.charAt(0)}
                                    </span>
                                  </div>
                                  <div className="ml-2 sm:ml-4">
                                    <div className="text-xs sm:text-sm font-medium text-white">
                                      {user.name}
                                    </div>
                                    <div className="text-xs text-gray-500 sm:hidden">
                                      @{user.username}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-400">
                                  {user.email}
                                </div>
                              </td>
                              <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-400">
                                  {user.company.name}
                                </div>
                              </td>
                              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <button
                                  onClick={() => setSelectedUser(user)}
                                  className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                  <span className="hidden sm:inline">View Details</span>
                                  <span className="sm:hidden">View</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4" style={{ backgroundColor: '#131415' }}>
                      <div className="flex items-center justify-between">
                        <div className="text-xs sm:text-sm text-gray-400">
                          Page {currentPage} of {totalPages}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="flex items-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-white text-xs sm:text-base transition-colors disabled:opacity-50"
                            style={{ backgroundColor: '#222228' }}
                          >
                            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-0 sm:mr-1" />
                            <span className="hidden sm:inline">Previous</span>
                          </button>
                          <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="flex items-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-white text-xs sm:text-base transition-colors disabled:opacity-50"
                            style={{ backgroundColor: '#222228' }}
                          >
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0 sm:ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* User Detail Modal */}
          {selectedUser && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              onClick={() => setSelectedUser(null)}
            >
              <div 
                className="w-full max-w-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
                style={{ backgroundColor: '#131415' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-white">User Details</h2>
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* User Header */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                    >
                      <span className="text-lg sm:text-2xl text-white font-semibold">
                        {selectedUser.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {selectedUser.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">@{selectedUser.username}</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Contact Information</h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        <span className="break-all">{selectedUser.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        <span>{selectedUser.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                        <span className="break-all">{selectedUser.website}</span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Address</h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      {selectedUser.address.suite}, {selectedUser.address.street}
                      <br />
                      {selectedUser.address.city}, {selectedUser.address.zipcode}
                    </p>
                  </div>

                  {/* Company */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Company</h4>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-white">
                        {selectedUser.company.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 italic">
                        "{selectedUser.company.catchPhrase}"
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {selectedUser.company.bs}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button 
                      onClick={() => setSelectedUser(null)}
                      className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-medium"
                      style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
