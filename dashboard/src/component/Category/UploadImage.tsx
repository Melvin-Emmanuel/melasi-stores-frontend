import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

interface UploadImageProps {
  onUpload: (imageUrl: string) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onUpload }) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      onUpload(imageUrl);
    }
  };

  return (
    <div className="mb-6 w-full px-3 py-6 cursor-pointer text-center border border-dashed  border-gray-300 rounded-md">
      <AiOutlineCloudUpload size={48} className="text-orange-500 w-full" />
      <span className="text-orange-500 ">click to browse</span>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className=" hidden "
      />
      <p className="text-sm text-gray-500 mt-2"> PNG and JPG files are allowed.</p>
    </div>
  );
};

export default UploadImage;
