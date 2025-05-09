import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import {
  ArrowUpTrayIcon,
  DocumentIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface FileWithPreview extends File {
  preview?: string;
  category?: string;
}

const DocumentUploadHub: React.FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
      category: 'Pending Classification',
    }));
    setFiles((prev) => [...prev, ...filesWithPreview]);
    setShowConfirmation(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  });

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setIsUploading(false);
  };

  const handleCategoryChange = (index: number, category: string) => {
    setFiles((prev) =>
      prev.map((file, i) =>
        i === index ? { ...file, category } : file
      )
    );
  };

  const categories = [
    'Bank Statement',
    'Tax Return',
    'ID Document',
    'Investment Statement',
    'Other',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Upload Modal */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Upload Your Documents</h2>
          
          {/* Drag and Drop Zone */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400'
            }`}
          >
            <input {...getInputProps()} />
            <ArrowUpTrayIcon className="mx-auto w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-600">
              {isDragActive
                ? 'Drop your files here...'
                : 'Drag and drop files here, or click to select files'}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Supported formats: PDF, PNG, JPG
            </p>
          </div>

          {/* File Preview and Confirmation */}
          <AnimatePresence>
            {showConfirmation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Confirm Your Documents
                </h3>
                <div className="space-y-4">
                  {files.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <DocumentIcon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <select
                        value={file.category}
                        onChange={(e) =>
                          handleCategoryChange(index, e.target.value)
                        }
                        className="px-3 py-2 border rounded-lg bg-white"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() =>
                          setFiles((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                        className="p-2 text-gray-500 hover:text-red-500"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Upload Progress */}
                {isUploading && (
                  <div className="mt-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Uploading... {uploadProgress}%
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => {
                      setFiles([]);
                      setShowConfirmation(false);
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isUploading ? 'Uploading...' : 'Upload Documents'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadHub; 