'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { Save, User, Mail, Bell, Trash2 } from 'lucide-react';

interface Settings {
  name: string;
  email: string;
  bio: string;
  notifications: boolean;
}

export default function SettingsPage() {
  const { user } = useAuth();
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>('dark');
  const [settings, setSettings] = useState<Settings>({
    name: '',
    email: '',
    bio: '',
    notifications: true,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('settings_page_theme') as 'light' | 'dark';
    if (savedTheme) {
      setLocalTheme(savedTheme);
    }
    
    const savedSettings = localStorage.getItem('user_settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else if (user) {
      setSettings({
        name: user.name || '',
        email: user.email || '',
        bio: '',
        notifications: true,
      });
    }
  }, [user]);

  const toggleLocalTheme = () => {
    const newTheme = localTheme === 'light' ? 'dark' : 'light';
    setLocalTheme(newTheme);
    localStorage.setItem('settings_page_theme', newTheme);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.setItem('user_settings', JSON.stringify(settings));
    const userData = { name: settings.name, email: settings.email };
    localStorage.setItem('user_data', JSON.stringify(userData));
    setIsSaving(false);
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="max-w-4xl space-y-8" style={{ backgroundColor: localTheme === 'dark' ? '#0a0a0a' : '#ffffff', minHeight: '100vh', margin: '-2rem', padding: '2rem', transition: 'background-color 0.3s' }}>
          <div>
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>Settings</h1>
            <p className="mt-2" style={{ color: localTheme === 'dark' ? '#9ca3af' : '#6b7280' }}>
              Manage your account settings and preferences
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: localTheme === 'dark' ? '#131415' : '#f9fafb', border: localTheme === 'dark' ? 'none' : '1px solid #e5e7eb' }}>
            <div className="px-6 py-4" style={{ borderBottom: localTheme === 'dark' ? '1px solid #222228' : '1px solid #e5e7eb' }}>
              <h2 className="text-xl font-semibold flex items-center" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </h2>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-6">
              {saveMessage && (
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#10B981', opacity: 0.9 }}>
                  <p className="text-sm text-white">{saveMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: localTheme === 'dark' ? '#d1d5db' : '#374151' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={settings.name}
                    onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{ backgroundColor: localTheme === 'dark' ? '#222228' : '#ffffff', border: localTheme === 'dark' ? 'none' : '1px solid #d1d5db', color: localTheme === 'dark' ? '#ffffff' : '#000000' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: localTheme === 'dark' ? '#d1d5db' : '#374151' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{ backgroundColor: localTheme === 'dark' ? '#222228' : '#ffffff', border: localTheme === 'dark' ? 'none' : '1px solid #d1d5db', color: localTheme === 'dark' ? '#ffffff' : '#000000' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: localTheme === 'dark' ? '#d1d5db' : '#374151' }}>
                  Bio
                </label>
                <textarea
                  value={settings.bio}
                  onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  style={{ backgroundColor: localTheme === 'dark' ? '#222228' : '#ffffff', border: localTheme === 'dark' ? 'none' : '1px solid #d1d5db', color: localTheme === 'dark' ? '#ffffff' : '#000000' }}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex items-center px-6 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)' }}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: localTheme === 'dark' ? '#131415' : '#f9fafb', border: localTheme === 'dark' ? 'none' : '1px solid #e5e7eb' }}>
            <div className="px-6 py-4" style={{ borderBottom: localTheme === 'dark' ? '1px solid #222228' : '1px solid #e5e7eb' }}>
              <h2 className="text-xl font-semibold" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                Appearance
              </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                    Theme
                  </h3>
                  <p className="text-sm mt-1" style={{ color: localTheme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                    Switch between light and dark mode
                  </p>
                </div>
                <button
                  onClick={toggleLocalTheme}
                  type="button"
                  className={`relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    localTheme === 'dark' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={localTheme === 'dark'}
                >
                  <span
                    className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                      localTheme === 'dark' ? 'translate-x-11' : 'translate-x-1'
                    }`}
                  />
                  <span className={`absolute left-2 text-xs transition-opacity ${localTheme === 'dark' ? 'opacity-50' : 'opacity-100'}`}>
                    ☀️
                  </span>
                  <span className={`absolute right-2 text-xs transition-opacity ${localTheme === 'dark' ? 'opacity-100' : 'opacity-50'}`}>
                    🌙
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: localTheme === 'dark' ? '#131415' : '#f9fafb', border: localTheme === 'dark' ? 'none' : '1px solid #e5e7eb' }}>
            <div className="px-6 py-4" style={{ borderBottom: localTheme === 'dark' ? '1px solid #222228' : '1px solid #e5e7eb' }}>
              <h2 className="text-xl font-semibold flex items-center" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                    Email Notifications
                  </h3>
                  <p className="text-sm mt-1" style={{ color: localTheme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                    Receive email updates about your account
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newSettings = { ...settings, notifications: !settings.notifications };
                    setSettings(newSettings);
                    localStorage.setItem('user_settings', JSON.stringify(newSettings));
                  }}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    settings.notifications ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.notifications}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                      settings.notifications ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: localTheme === 'dark' ? '#131415' : '#fef2f2', borderColor: '#EF4444', borderWidth: '1px', borderStyle: 'solid' }}>
            <div className="px-6 py-4" style={{ borderBottom: '1px solid #EF4444' }}>
              <h2 className="text-xl font-semibold text-red-400 flex items-center">
                <Trash2 className="w-5 h-5 mr-2" />
                Danger Zone
              </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium" style={{ color: localTheme === 'dark' ? '#ffffff' : '#000000' }}>
                    Delete Account
                  </h3>
                  <p className="text-sm mt-1" style={{ color: localTheme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                    Permanently delete your account and all data
                  </p>
                </div>
                <button className="px-6 py-3 rounded-xl text-white font-medium bg-red-600 hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
