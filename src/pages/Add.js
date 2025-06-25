import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title,
        price: parseFloat(price),
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error posting product:", error);
    }
  };

  return (
    <main className="container py-40">
      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </main>
  );
};

export default Add;
