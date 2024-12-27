'use client'
import React, { useRef, useState } from 'react';

const DropZoneInput: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
  
      const droppedFiles = Array.from(event.dataTransfer.files);
      const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));
  
      if (imageFiles.length > 0) {
        setFiles([...files, ...imageFiles]);
      } else {
        alert('Only image files are allowed!');
      }
    };
  
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedFiles = Array.from(event.target.files);
        const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
  
        if (imageFiles.length > 0) {
          setFiles([...files, ...imageFiles]);
        } else {
          alert('Only image files are allowed!');
        }
      }
    };
  
    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
  
    return (
      <div>
        <div
          className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick} // Makes the dropzone clickable
        >
          <p className="text-gray-600">Drag & Drop your files here</p>
          <p className="text-gray-400">or click to browse</p>
          <input
            type="file"
            multiple
            accept="image/*"
            ref={fileInputRef} // Reference to the hidden input
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
        <ul className="mt-4 text-sm text-gray-700">
          {files.length > 0 &&
            files.map((file, index) => (
              <li key={index} className="border p-2 rounded mb-2">
                {file.name}
              </li>
            ))}
        </ul>
      </div>
    );
  };

export default DropZoneInput;
