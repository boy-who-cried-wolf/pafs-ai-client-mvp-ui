import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, DocumentIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (categorizedFiles: CategorizedFile[]) => void;
}

export interface CategorizedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  category: string;
  confidence: number;
  suggestedCategory?: string;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onUploadComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [categorizedFiles, setCategorizedFiles] = useState<CategorizedFile[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  }, []);

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      // TODO: Replace with actual API call
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));

      // Simulate API call and categorization
      const response = await new Promise<CategorizedFile[]>(resolve => {
        setTimeout(() => {
          resolve(files.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            type: file.type,
            size: file.size,
            category: ['ID', 'Bank Statement', 'Loan Document', 'Tax Return'][Math.floor(Math.random() * 4)],
            confidence: Math.random() * 0.3 + 0.7, // Random confidence between 0.7 and 1.0
          })));
        }, 1500);
      });

      setCategorizedFiles(response);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Upload failed:', error);
      // TODO: Show error message
    } finally {
      setIsUploading(false);
    }
  };

  const handleCategoryChange = (fileId: string, newCategory: string) => {
    setCategorizedFiles(prev =>
      prev.map(file =>
        file.id === fileId
          ? { ...file, category: newCategory, suggestedCategory: file.category }
          : file
      )
    );
  };

  const handleConfirm = () => {
    onUploadComplete(categorizedFiles);
    onClose();
  };

  const handleRetrain = async () => {
    // TODO: Implement retraining logic
    console.log('Retraining model with corrected categories');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl border border-white/10"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {showConfirmation ? 'Confirm Categories' : 'Upload Documents'}
                </h2>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {!showConfirmation ? (
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    isDragging
                      ? 'border-primary-400 bg-primary-400/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer"
                  >
                    <ArrowUpTrayIcon className="w-12 h-12 mx-auto mb-4 text-white/60" />
                    <p className="text-white/80 mb-2">
                      Drag and drop your files here, or click to select files
                    </p>
                    <p className="text-white/60 text-sm">
                      Supported formats: PDF, JPG, PNG
                    </p>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  {categorizedFiles.map(file => (
                    <div
                      key={file.id}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <DocumentIcon className="w-8 h-8 text-primary-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-white/60 text-sm">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <select
                        value={file.category}
                        onChange={(e) => handleCategoryChange(file.id, e.target.value)}
                        className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-1.5"
                      >
                        <option value="ID">ID Document</option>
                        <option value="Bank Statement">Bank Statement</option>
                        <option value="Loan Document">Loan Document</option>
                        <option value="Tax Return">Tax Return</option>
                      </select>
                      <div className="w-24 text-right">
                        <span className={`text-sm ${
                          file.confidence > 0.9 ? 'text-green-400' :
                          file.confidence > 0.7 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {(file.confidence * 100).toFixed(0)}% confidence
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex justify-end gap-4">
                {showConfirmation && (
                  <Button
                    variant="secondary"
                    onClick={handleRetrain}
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Retrain Model
                  </Button>
                )}
                <Button
                  variant="primary"
                  onClick={showConfirmation ? handleConfirm : handleUpload}
                  disabled={files.length === 0 || isUploading}
                  isLoading={isUploading}
                  className="bg-primary-400 text-primary-900 hover:bg-primary-300"
                >
                  {showConfirmation ? 'Confirm & Save' : 'Upload & Categorize'}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UploadModal; 