'use client'

import { useState, useEffect } from 'react'
import { LogOut, Eye, EyeOff, Menu, X, Bell, ChevronRight } from 'lucide-react'

const MOCK_DATA = {
  auth: [
    { username: 'john.doe', password: 'password123' },
    { username: 'jane.smith', password: 'pass456' },
    { username: 'michele.stacey', password: 'pass456' },
  ],
  users: {
    'john.doe': {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main Street, New York, NY 10001',
      phone: '(555) 123-4567',
      dateOfBirth: '01/15/1985',
      ssn: '***-**-1234',
      routingNumber: '******19',
      accountType: 'Encryption',
      overdraftProtection: 'Active',
      accountNumber: '1234567890123456',
      balance: 15234.56,
    },
    'jane.smith': {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      address: '456 Oak Avenue, Los Angeles, CA 90001',
      phone: '(555) 234-5678',
      dateOfBirth: '05/22/1990',
      ssn: '***-**-5678',
      routingNumber: '091000019',
      accountType: 'Encryption',
      overdraftProtection: 'Active',
      accountNumber: '9876543210987654',
      balance: 28567.89,
    },
    'michele.stacey': {
      name: 'Michele Stacey',
      email: 'm****@hotmail.com',
      address: '1204 Bonsella Street, Walla Walla, Washington 99362',
      phone: '****5799',
      dateOfBirth: '*/*/1951',
      ssn: '8043',
      routingNumber: '091000019',
      accountType: 'Encryption',
      overdraftProtection: 'Inactive',
      accountNumber: '0000000000005467',
      balance: 72126,
    },
  },
  transactions: [
    { date: '01-28-2026', description: "Cashier's Check", amount: 29966, type: 'credit' },
    { date: '02-12-2026', description: "Cashier's Check", amount: 42160, type: 'credit' },
  ],
  navbar: [
    { label: 'U.S. Bank en Español' },
    { label: 'Customer Service' },
    { label: 'Locations' },
  ],
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  )
}

// Banking Footer Component
function BankingFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Security Section */}
        <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-200">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="font-bold text-gray-900">Connection Secured</p>
            <p className="text-xs text-gray-600">Your information is protected with encryption</p>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Checking Accounts</a></li>
              <li><a href="#" className="hover:text-blue-600">Savings Accounts</a></li>
              <li><a href="#" className="hover:text-blue-600">Credit Cards</a></li>
              <li><a href="#" className="hover:text-blue-600">Mortgages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Online Banking</a></li>
              <li><a href="#" className="hover:text-blue-600">Mobile App</a></li>
              <li><a href="#" className="hover:text-blue-600">Wire Transfers</a></li>
              <li><a href="#" className="hover:text-blue-600">Bill Pay</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Customer Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Locations</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Security</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Disclosures</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Info */}
        <div className="py-8 border-t border-gray-200 space-y-3 text-xs text-gray-600">
          <p className="flex items-center gap-2">
            <span className="inline-block bg-blue-900 text-white px-2 py-1 font-bold text-xs">FDIC</span>
            Equal Housing Lender. Deposit products offered by U.S. Bank National Association. Member FDIC
          </p>
          <p>
            Investment products and services including annuities are: Not a Deposit • Not FDIC Insured • May Lose Value • Not Bank Guaranteed • Not Insured by any Federal Government Agency
          </p>
          <p>
            U.S. Bancorp Investments, Inc. is an investment adviser and a brokerage subsidiary of U.S. Bancorp and affiliate of U.S. Bank.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-600 mb-4">OLB Cloud · 2.57.0_BN_7903</p>
          <div className="text-xs text-gray-500 space-y-1">
            <p>© 2026 U.S. Bank. All rights reserved. U.S. Bank is a trade name used by U.S. Bank National Association and its affiliates.</p>
            <p className="pt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">Security</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">Privacy</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">Your California Privacy Choices</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">CoBrowse</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function BankingApp() {
  const [view, setView] = useState<'login' | 'accounts' | 'profile' | 'notifications'>('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<any>(null)
  const [accountData, setAccountData] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showTransactions, setShowTransactions] = useState(false)
  const [loadingTransactions, setLoadingTransactions] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [loadingBalance, setLoadingBalance] = useState(false)
  const [loadingAccountInfo, setLoadingAccountInfo] = useState(false)

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-notification-container]')) {
        setNotificationsOpen(false)
      }
    }
    if (notificationsOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [notificationsOpen])

  const handleLogin = async () => {
    setError('')
    setLoginLoading(true)
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const user = MOCK_DATA.auth.find(
      (u) => u.username === username && u.password === password
    )
    if (user) {
      setLoggedInUser(user.username)
      const profile = (MOCK_DATA.users as any)[user.username]
      setUserProfile(profile)
      setAccountData({
        number: profile.accountNumber,
        balance: profile.balance,
        type: profile.accountType,
      })
      setView('accounts')
      setUsername('')
      setPassword('')
    } else {
      setError('Invalid username or password')
    }
    setLoginLoading(false)
  }

  const handleTransactionExpand = async () => {
    setShowTransactions(true)
    setLoadingTransactions(true)

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1500))

    setLoadingTransactions(false)
  }

  const loadAccountInfo = async () => {
    setLoadingAccountInfo(true)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setLoadingAccountInfo(false)
  }

  const loadBalance = async () => {
    setLoadingBalance(true)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setLoadingBalance(false)
  }

  // Load account info and balance on accounts view mount
  // Close transactions when changing views
  useEffect(() => {
    setShowTransactions(false)
    if (view === 'accounts') {
      loadAccountInfo()
      loadBalance()
    }
  }, [view])

  const handleLogout = () => {
    setView('login')
    setLoggedInUser(null)
    setUserProfile(null)
    setAccountData(null)
    setUsername('')
    setPassword('')
    setError('')
    setMobileMenuOpen(false)
  }

  const maskAccountNumber = (accountNumber: string) => {
    return '**** **** **** ' + accountNumber.slice(-4)
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const formatDateMMDDYY = (isoDate: string) => {
    const [y, m, d] = isoDate.split('-')
    const yy = y.slice(-2)
    return `${m}-${d}-${yy}`
  }

  // Login View
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-blue-900 text-white">
          <div className="max-w-full mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <img src="/logo.png" alt="US Bank" className="h-10" />
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            </>
          )}
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* FDIC Badge */}
            <div className="mb-12 flex items-start gap-3 px-4 py-3 bg-white border border-gray-200">
              <div className="font-bold text-blue-900 text-sm">FDIC</div>
              <p className="text-xs text-gray-700">
                FDIC-Insured • Backed by the full faith and credit of the U.S. Government
              </p>
            </div>

            {/* Form Section */}
            <div className="px-4 md:px-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Account login</h2>

              {/* Username Field */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full border-b border-gray-300 bg-white px-0 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900 transition-colors"
                />
              </div>

              {/* Password Field */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="flex-1 border-b border-gray-300 bg-white px-0 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900 transition-colors"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 text-sm text-red-600 font-medium">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={loginLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 mb-8 transition-colors disabled:cursor-not-allowed"
              >
                {loginLoading ? 'Logging in...' : 'Log in'}
              </button>

              {/* Links */}
              <div className="space-y-4 text-sm">
                <button className="text-blue-600 hover:text-blue-800 font-medium block">
                  Forgot username or password
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium block">
                  Enroll in online banking
                </button>
                <button className="text-gray-700 hover:text-gray-900 font-medium block underline">
                  Corporate & Commercial banking login
                </button>
              </div>
            </div>
          </div>
        </div>

        <BankingFooter />
      </div>
    )
  }

  // Accounts View (Dashboard)
  if (view === 'accounts') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-blue-900 text-white border-b border-gray-200 relative z-30">
          <div className="max-w-full mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
            <img src="/logo.png" alt="US Bank" className="h-10" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center text-sm">
              <button
                onClick={() => setView('accounts')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Bank Account Info
              </button>
              <div className="relative" data-notification-container>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                >
                  <Bell size={18} />
                  Notification
                </button>

                {/* Desktop Notification Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-gray-900 rounded shadow-lg z-50 border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-bold text-sm">Notifications</h3>
                    </div>
                    <div className="p-4 text-center text-sm text-gray-600">
                      No notifications available
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setView('profile')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-blue-200 transition-colors font-medium ml-4 pl-4 border-l border-blue-700"
              >
                <LogOut size={18} />
                Logout
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-20" onClick={() => setMobileMenuOpen(false)} />
              <div className="fixed top-16 left-0 right-0 border-t border-blue-800 bg-blue-800 md:hidden z-40 shadow-lg">
                <div className="flex flex-col gap-4 px-4 py-4 text-sm">
                  <button
                    onClick={() => {
                      setView('accounts')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Bank Account Info
                  </button>
                  <button
                    onClick={() => {
                      setView('notifications')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                  >
                    <Bell size={18} />
                    Notification
                  </button>
                  <button
                    onClick={() => {
                      setView('profile')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2 pt-2 border-t border-blue-700"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Welcome back, {loggedInUser}</h2>

          {/* Account Cards */}
          <div className="space-y-6">
            {/* Account Card - Checking */}
            <div className="border border-gray-200 bg-white p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                    {accountData?.type} Account
                  </p>
                  {loadingAccountInfo ? (
                    <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">{maskAccountNumber(accountData?.number)}</p>
                  )}
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                  Available Balance
                </p>
                {loadingBalance ? (
                  <div className="w-40 h-10 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  <p className="text-4xl font-bold text-gray-900">${formatCurrency(accountData?.balance ?? 0)}</p>
                )}
              </div>
              <button
                onClick={handleTransactionExpand}
                className="mt-8 flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-blue-600 font-medium text-sm">View Transactions</span>
                <ChevronRight size={18} className="text-blue-600" />
              </button>
            </div>

            {/* Transactions Section */}
            {showTransactions && (
              <div className="border border-gray-200 bg-white overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
                  <button
                    onClick={() => setShowTransactions(false)}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {loadingTransactions ? (
                  <LoadingSpinner />
                ) : (
                  <div className="divide-y divide-gray-200">
                    {MOCK_DATA.transactions.map((transaction, index) => (
                      <div
                        key={index}
                        className="px-8 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{formatDateMMDDYY(transaction.date)}</p>
                        </div>
                        <p
                          className={`font-bold text-lg ${transaction.type === 'credit' ? 'text-green-700' : 'text-gray-900'
                            }`}
                        >
                          {transaction.type === 'credit' ? '+' : '−'}${formatCurrency(Math.abs(transaction.amount))}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        <BankingFooter />
      </div>
    )
  }

  // Profile View
  if (view === 'profile') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-blue-900 text-white border-b border-gray-200 relative z-30">
          <div className="max-w-full mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <img src="/logo.png" alt="US Bank" className="h-10" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center text-sm">
              <button
                onClick={() => setView('accounts')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Bank Account Info
              </button>
              <div className="relative" data-notification-container>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                >
                  <Bell size={18} />
                  Notification
                </button>

                {/* Desktop Notification Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-gray-900 rounded shadow-lg z-50 border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-bold text-sm">Notifications</h3>
                    </div>
                    <div className="p-4 text-center text-sm text-gray-600">
                      No notifications available
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setView('profile')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-blue-200 transition-colors font-medium ml-4 pl-4 border-l border-blue-700"
              >
                <LogOut size={18} />
                Logout
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-20" onClick={() => setMobileMenuOpen(false)} />
              <div className="fixed top-16 left-0 right-0 border-t border-blue-800 bg-blue-800 md:hidden z-40 shadow-lg">
                <div className="flex flex-col gap-4 px-4 py-4 text-sm">
                  <button
                    onClick={() => {
                      setView('accounts')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Bank Account Info
                  </button>
                  <button
                    onClick={() => {
                      setView('notifications')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                  >
                    <Bell size={18} />
                    Notification
                  </button>
                  <button
                    onClick={() => {
                      setView('profile')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2 pt-2 border-t border-blue-700"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">User Profile</h2>

          {/* Profile Card */}
          <div className="border border-gray-200 bg-white p-8">
            {userProfile && (
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Full Name
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.name}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Date of Birth
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.dateOfBirth}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Social Security Number
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.ssn}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Primary Email Address
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.email}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Primary Phone Number
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.phone}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Billing Address
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.address}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Account Type
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.accountType}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Account Number
                  </label>
                  <p className="text-lg text-gray-900">**{accountData?.number?.slice(-4)}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Routing Number
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.routingNumber}</p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Overdraft Protection
                  </label>
                  <p className="text-lg text-gray-900">{userProfile.overdraftProtection}</p>
                </div>
              </div>
            )}
          </div>
        </main>

        <BankingFooter />
      </div>
    )
  }

  // Notifications View (Mobile)
  if (view === 'notifications') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-blue-900 text-white border-b border-gray-200 relative z-30">
          <div className="max-w-full mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <img src="/logo.png" alt="US Bank" className="h-10" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center text-sm">
              <button
                onClick={() => setView('accounts')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Bank Account Info
              </button>
              <div className="relative" data-notification-container>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                >
                  <Bell size={18} />
                  Notification
                </button>

                {/* Desktop Notification Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-gray-900 rounded shadow-lg z-50 border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-bold text-sm">Notifications</h3>
                    </div>
                    <div className="p-4 text-center text-sm text-gray-600">
                      No notifications available
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setView('profile')}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-blue-200 transition-colors font-medium ml-4 pl-4 border-l border-blue-700"
              >
                <LogOut size={18} />
                Logout
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-20" onClick={() => setMobileMenuOpen(false)} />
              <div className="fixed top-16 left-0 right-0 border-t border-blue-800 bg-blue-800 md:hidden z-40 shadow-lg">
                <div className="flex flex-col gap-4 px-4 py-4 text-sm">
                  <button
                    onClick={() => {
                      setView('accounts')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Bank Account Info
                  </button>
                  <button
                    onClick={() => {
                      setView('notifications')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2"
                  >
                    <Bell size={18} />
                    Notification
                  </button>
                  <button
                    onClick={() => {
                      setView('profile')
                      setMobileMenuOpen(false)
                    }}
                    className="text-left hover:text-blue-200 transition-colors font-medium"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left hover:text-blue-200 transition-colors font-medium flex items-center gap-2 pt-2 border-t border-blue-700"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Notifications</h2>

          {/* Notifications Card */}
          <div className="border border-gray-200 bg-white p-8">
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No notifications available</p>
            </div>
          </div>
        </main>

        <BankingFooter />
      </div>
    )
  }
}
