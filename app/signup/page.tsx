'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const success = await signup(name, email, password);
      
      if (success) {
        router.push('/dashboard');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
        <div style={{ width: '359px' }}>
          {/* Register Heading */}
          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '80px',
            letterSpacing: '0%',
            color: '#FFFFFF',
            marginBottom: '12px'
          }}>
            Register
          </h1>
          
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#9E9E9E',
            marginBottom: '24px'
          }}>
            A good design is not only aesthetically pleasing, but also functional.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            
            <input
              type="password"
              placeholder="Repeat Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                outline: 'none'
              }}
            />

            <button
              type="submit"
              disabled={isLoading}
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                opacity: isLoading ? 0.7 : 1
              }}
            >
              {isLoading ? 'Loading...' : 'Signup Now'}
            </button>
          </form>

          {/* Social Login */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div style={{ fontSize: '10px', color: '#9E9E9E' }}>Register with</div>
                <div style={{ fontWeight: 600 }}>Google</div>
              </div>
            </button>
            
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                backgroundColor: '#18181C',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
              <div className="text-left">
                <div style={{ fontSize: '10px', color: '#9E9E9E' }}>Register with</div>
                <div style={{ fontWeight: 600 }}>Twitter</div>
              </div>
            </button>
          </div>

          <p className="mt-8" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#9E9E9E' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: '#8054FF', fontWeight: 500 }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image Grid - 3 columns */}
      <div className="hidden lg:flex items-center" style={{ width: '694px', height: '100vh', overflow: 'hidden' }}>
        <div className="grid grid-cols-3 gap-3 p-4" style={{ width: '100%' }}>
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <div style={{ height: '100px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ 
              height: '180px', 
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #C4B5FD 0%, #A78BFA 100%)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" 
                alt="Person 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '120px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ height: '80px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <div style={{ height: '80px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ 
              height: '200px', 
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#FCD34D'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop" 
                alt="Person 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '100px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ height: '100px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <div style={{ height: '120px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ 
              height: '220px', 
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#F5D6BA'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop" 
                alt="Person 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '80px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
            <div style={{ height: '60px', backgroundColor: '#18181C', borderRadius: '16px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
