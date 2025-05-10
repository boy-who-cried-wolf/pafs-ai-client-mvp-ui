import React, { useState } from 'react';
import {
  DocumentTextIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import UploadModal from '../modals/UploadModal';
import { CategorizedFile } from '../modals/UploadModal';

const DocumentUploadHub: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<CategorizedFile[]>([]);

  const handleUploadComplete = (files: CategorizedFile[]) => {
    setUploadedFiles(files);
    // You can add additional logic here, like showing a success message
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        {/* Document Upload Section */}
        <div 
          className="p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
          onClick={() => setIsUploadModalOpen(true)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <ArrowUpTrayIcon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white">Upload</h3>
          </div>
          <p className="text-gray-300 mt-2 ml-13">
            Start here to upload your financial documents
          </p>
          {uploadedFiles.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                {uploadedFiles.length} document{uploadedFiles.length !== 1 ? 's' : ''} uploaded
              </p>
            </div>
          )}
        </div>

        {/* Financial Snapshot Section */}
        <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <ArrowUpTrayIcon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white">Financial Snapshot</h3>
          </div>
          <p className="text-gray-300 mt-2 ml-13">
            View your net worth and financial health at a glance
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-900 rounded-lg">
                <p className="text-gray-400 text-sm">Net Worth</p>
                <p className="text-white font-medium">$0.00</p>
              </div>
              <div className="p-3 bg-gray-900 rounded-lg">
                <p className="text-gray-400 text-sm">Monthly Savings</p>
                <p className="text-white font-medium">$0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Pending Section */}
        <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <ArrowUpTrayIcon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white">Tasks Pending</h3>
          </div>
          <p className="text-gray-300 mt-2 ml-13">
            Complete your profile for better insights
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-gray-300 text-sm">Link your bank account</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-gray-300 text-sm">Upload financial documents</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-gray-300 text-sm">Set your financial goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
};

export default DocumentUploadHub; 