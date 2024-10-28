import React from 'react';

interface ProductFormProps {
  formData: { name: string; priceRange: string; createdBy: string; stock: number; description: string};
  onChange: (name: string, value: string | number) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='w-full  border-t border-black pt-4'>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Information</h2>
      <div className="flex w-full gap-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Product Name </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='Items name'
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Product Categories</label>
          <select
            name="createdBy"
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          >
            <option value="">Choose a category</option>
            <option value="Wearables">Wearables</option>
            <option value="Gaming Accessories">Gaming Accessories</option>
            <option value="Phones">Phones</option>
            <option value="Memory Cards">Memory Cards</option>
            <option value="Phones Accessories">Phones Accessories</option>
            <option value="Chargers">Chargers</option>
            <option value="Sim Cards">Sim Cards</option>
          </select>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Brand </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='Items name'
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Weight </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='In gm & Kg'
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-600 mb-1">Gender</label>
          <select
            name="createdBy"
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="Wearables">Wearables</option>
            <option value="Gaming Accessories">Gaming Accessories</option>
            <option value="Phones">Phones</option>
          </select>
        </div>
      </div>

      <div className="flex w-full gap-4">
      <div className="mb-4 w-full">
        <label className="block text-gray-600 mb-1">Tag</label>
        <input
          type="text"
          name="tag"
          placeholder='tag'
          value={formData.stock}
          onChange={(e) => onChange('tag', Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2"

        />
      </div>
      <div className="mb-4 w-full">
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
      <div className="mb-4 w-full">
        <label className="block text-gray-600 mb-1">Price</label>
        <input
          type="number"
          name="price"
          placeholder='Enter price'
          value={formData.stock}
          onChange={(e) => onChange('price', Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2"

        />
      </div>
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
        Create Product
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

export default ProductForm;
