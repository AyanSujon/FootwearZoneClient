


"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddProductForm() {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: 0,
    discount: "",
    sizes: [],
    color: [],
    brand: "",
    tags: [],
    stock: 0,
    sold: 0,
    rating: 0,
    viewCount: 0,
    createdAt: "",
    updatedAt: "",
    bestSeller: false,
    shortDescription: "",
    fullDescription: "",
    wishlistedCount: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProduct({ ...product, [name]: checked });
    } else if (name === "sizes" || name === "color" || name === "tags") {
      setProduct({ ...product, [name]: value.split(",").map((v) => v.trim()) });
    } else if (type === "number") {
      setProduct({ ...product, [name]: Number(value) });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Product Data:", product);
//     // send to backend API
//         // Show test toast message
//     toast.success("Product submitted successfully!");
//   };



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:4000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    console.log("After saving data on mongodb: ", data);

    if (response.ok) {
      toast.success(data.message || "Product added successfully!");
      // Reset the form
      setProduct({
        title: "",
        image: "",
        category: "",
        price: 0,
        discount: "",
        sizes: [],
        color: [],
        brand: "",
        tags: [],
        stock: 0,
        sold: 0,
        rating: 0,
        viewCount: 0,
        createdAt: "",
        updatedAt: "",
        bestSeller: false,
        shortDescription: "",
        fullDescription: "",
        wishlistedCount: 0,
      });
    } else {
      toast.error(data.error || "Failed to add product");
    }
  } catch (error) {
    console.error("Error adding product:", error);
    toast.error("Something went wrong while adding the product");
  }
};






  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 space-y-6 rounded shadow-lg"
    >
      {/* Row 1: Title */}
      <div>
        <label className="text-gray-800 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Ex: Nike Air Zoom Pegasus 39"
          className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          required
        />
      </div>

      {/* Row 2: Image */}
      <div>
        <label className="text-gray-800 font-semibold">Image URL</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Ex: https://i.ibb.co/qYrZbRbZ/Nike-Air-Zoom-Pegasus-39.png"
          className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
        />
      </div>

      {/* Row 3: Category + Brand */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Ex: Men"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            placeholder="Ex: Nike"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
      </div>

      {/* Row 4: Price + Discount */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Ex: 120"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Discount</label>
          <input
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            placeholder="Ex: 20% OFF"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
      </div>

      {/* Row 5: Sizes + Color */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Sizes (comma separated)</label>
          <input
            type="text"
            name="sizes"
            value={product.sizes.join(", ")}
            onChange={handleChange}
            placeholder="Ex: 7, 8, 9, 10"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Colors (comma separated)</label>
          <input
            type="text"
            name="color"
            value={product.color.join(", ")}
            onChange={handleChange}
            placeholder="Ex: Red, Black, Blue"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
      </div>

      {/* Row 6: Tags */}
      <div>
        <label className="text-gray-800 font-semibold">Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={product.tags.join(", ")}
          onChange={handleChange}
          placeholder="Ex: running, lightweight, mesh"
          className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
        />
      </div>

      {/* Row 7: Stock + Sold */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Ex: 15"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Sold</label>
          <input
            type="number"
            name="sold"
            value={product.sold}
            onChange={handleChange}
            placeholder="Ex: 50"
            className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
          />
        </div>
      </div>

      {/* Row 8: Rating + ViewCount (disabled) */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Rating</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            placeholder="Ex: 4.5"
            disabled
            className="w-full p-2 rounded border border-gray-300 bg-gray-100 text-gray-600 outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">View Count</label>
          <input
            type="number"
            name="viewCount"
            value={product.viewCount}
            onChange={handleChange}
            placeholder="Ex: 1250"
            disabled
            className="w-full p-2 rounded border border-gray-300 bg-gray-100 text-gray-600 outline-none"
          />
        </div>
      </div>

      {/* Row 9: createdAt + updatedAt (disabled) */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Created At</label>
          <input
            type="date"
            name="createdAt"
            value={product.createdAt}
            onChange={handleChange}
            disabled
            className="w-full p-2 rounded border border-gray-300 bg-gray-100 text-gray-600 outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-gray-800 font-semibold">Updated At</label>
          <input
            type="date"
            name="updatedAt"
            value={product.updatedAt}
            onChange={handleChange}
            disabled
            className="w-full p-2 rounded border border-gray-300 bg-gray-100 text-gray-600 outline-none"
          />
        </div>
      </div>

      {/* Row 10: BestSeller checkbox */}
      <div>
        <label className="flex items-center space-x-2 text-gray-800 font-semibold">
          <input
            type="checkbox"
            name="bestSeller"
            checked={product.bestSeller}
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <span>Best Seller</span>
        </label>
      </div>

      {/* Row 11: Short Description */}
      <div>
        <label className="text-gray-800 font-semibold">Short Description</label>
        <textarea
          name="shortDescription"
          value={product.shortDescription}
          onChange={handleChange}
          placeholder="Ex: Lightweight running shoes with breathable mesh"
          className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
        />
      </div>

      {/* Row 12: Full Description */}
      <div>
        <label className="text-gray-800 font-semibold">Full Description</label>
        <textarea
          name="fullDescription"
          value={product.fullDescription}
          onChange={handleChange}
          placeholder="Ex: Nike Air Zoom Pegasus 39 offers comfortable cushioning, breathable mesh upper, and durable outsole perfect for daily running."
          className="w-full p-2 rounded border border-gray-300 focus:border-[#422ad5] outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 rounded bg-[#422ad5] text-white font-semibold hover:bg-[#311a9b]"
      >
        Add Product
      </button>
    </form>
  );
}
