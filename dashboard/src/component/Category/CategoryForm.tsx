import React from 'react';

interface CategoryFormProps {
  formData: { name: string; priceRange: string; createdBy: string; stock: number; description: string};
  onChange: (name: string, value: string | number) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='w-full  border-t border-black pt-4'>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">General Information</h2>
      <div className="flex w-full gap-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Category Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Created By</label>
          <select
            name="createdBy"
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          >
            <option value="">Select Creator</option>
            <option value="Admin">Admin</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Stock</label>
        <input
          type="number"
          name="stock"
          placeholder='Quantity'
          value={formData.stock}
          onChange={(e) => onChange('stock', Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Description</label>
        <textarea
          name="stock"
          placeholder='Type description'
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"

        />
      </div>
      <div className="gap-3 flex  ">
      <button
        type="submit"
        className=" bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition"
      >
        Save Changes
      </button>
      <button
        className="border border-black py-2 px-6 rounded-md "
      >
        Cancel
      </button>
      </div>
    </form>
  );
};

export default CategoryForm;
