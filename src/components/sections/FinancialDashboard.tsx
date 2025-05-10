import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

interface FinancialMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  status: 'processed' | 'pending' | 'error';
}

interface AISuggestion {
  id: string;
  title: string;
  description: string;
  impact: string;
  category: 'tax' | 'investment' | 'savings';
}

const FinancialDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'insights'>(
    'overview'
  );

  const metrics: FinancialMetric[] = [
    {
      label: 'Net Worth',
      value: '$245,000',
      change: '+12.5%',
      trend: 'up',
    },
    {
      label: 'Monthly Cash Flow',
      value: '+$2,400',
      change: '+8.2%',
      trend: 'up',
    },
    {
      label: 'Tax Liability',
      value: '$5,200',
      change: '-15.3%',
      trend: 'down',
    },
  ];

  const documents: Document[] = [
    {
      id: '1',
      name: '2023 Tax Return.pdf',
      type: 'Tax Return',
      date: '2023-12-31',
      status: 'processed',
    },
    {
      id: '2',
      name: 'Bank Statement Jan 2024.pdf',
      type: 'Bank Statement',
      date: '2024-01-31',
      status: 'processed',
    },
    {
      id: '3',
      name: 'Investment Portfolio.pdf',
      type: 'Investment Statement',
      date: '2024-02-15',
      status: 'pending',
    },
  ];

  const suggestions: AISuggestion[] = [
    {
      id: '1',
      title: 'Superannuation Optimization',
      description:
        'You could save $1,200/year by restructuring your superannuation contributions.',
      impact: 'High Impact',
      category: 'tax',
    },
    {
      id: '2',
      title: 'Investment Rebalancing',
      description:
        'Your portfolio is overweight in tech stocks. Consider rebalancing for better risk management.',
      impact: 'Medium Impact',
      category: 'investment',
    },
    {
      id: '3',
      title: 'Emergency Fund Boost',
      description:
        'Your emergency fund is below recommended levels. Consider increasing it to 6 months of expenses.',
      impact: 'High Impact',
      category: 'savings',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-8">
        {(['overview', 'documents', 'insights'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Financial Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-700"
              >
                <h3 className="text-gray-400 text-sm mb-2">{metric.label}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                  <span
                    className={`text-sm ${
                      metric.trend === 'up'
                        ? 'text-green-400'
                        : metric.trend === 'down'
                        ? 'text-red-400'
                        : 'text-gray-400'
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Net Worth Chart */}
          <div className="bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-white">Net Worth Trend</h3>
            <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
              <p className="text-gray-400">Chart visualization will go here</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Documents Section */}
      {activeTab === 'documents' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>
            <button className="px-4 py-2 border border-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-gray-300">
              <FunnelIcon className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Document List */}
          <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
            <div className="divide-y divide-gray-700">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 hover:bg-gray-700 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{doc.name}</h4>
                    <p className="text-sm text-gray-400">
                      {doc.type} • {doc.date}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      doc.status === 'processed'
                        ? 'bg-green-900 text-green-400'
                        : doc.status === 'pending'
                        ? 'bg-yellow-900 text-yellow-400'
                        : 'bg-red-900 text-red-400'
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Insights Section */}
      {activeTab === 'insights' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white">{suggestion.title}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        suggestion.impact === 'High Impact'
                          ? 'bg-green-900 text-green-400'
                          : 'bg-yellow-900 text-yellow-400'
                      }`}
                    >
                      {suggestion.impact}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{suggestion.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FinancialDashboard; 