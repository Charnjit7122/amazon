import { useRecoilState } from "recoil";
import { AddProductModalState } from "./atoms/modalAtoms";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DataUpdateState } from "./atoms/DataAtoms";

export default function AddProduct({ category }) {
  const [open, setOpen] = useRecoilState(AddProductModalState);
  const [dataUpdate, setDataupdate] = useRecoilState(DataUpdateState);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = async (data) => {
    if (loading) return;
    setLoading(true);

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        title: data.Title,
        image: data.Image,
        ratings: { rating: 0, count: 0 },
        category: data.Category,
        description: data.Description,
        price: data.Price,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    setDataupdate(response);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={open}
        onAfterOpen={() => setOpen(true)}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        className="Modal"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="text-2xl font-semibold">Add Product</p>
          <IoCloseSharp
            onClick={() => setOpen(false)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <form
          onSubmit={handleSubmit(addProduct)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col">
            <label className="formlabel">Title</label>
            <input
              className="forminput"
              type="text"
              placeholder="Title"
              {...register("Title", {
                required: true,
              })}
            />
            {errors.Title && <span className="formerror">Invalid Title.</span>}
          </div>

          <div className="flex flex-col">
            <label className="formlabel">Price</label>
            <input
              className="forminput"
              type="number"
              placeholder="Price"
              {...register("Price", { required: true })}
            />
            {errors.Price && <span className="formerror">Invalid Price.</span>}
          </div>

          <div className="flex flex-col">
            <label className="formlabel">Image URL</label>
            <input
              className="forminput"
              type="text"
              placeholder="Image"
              {...register("Image", { required: true })}
            />
            {errors.Image && <span className="formerror">Invalid Image.</span>}
          </div>

          <div className="flex flex-col">
            <label className="formlabel">Description</label>
            <textarea
              className="forminput"
              rows={3}
              type="text"
              placeholder="Enter Description"
              {...register("Description", { required: true })}
            />{" "}
            {errors.Description && (
              <span className="formerror">Invalid Description.</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="formlabel">Category</label>
            <select
              className="forminput"
              {...register("Category", {
                required: true,
              })}
            >
              {category.map((cat) => (
                <option key={cat._id} value={`${cat.name}`}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.Category && (
              <span className="formerror">Invalid Category.</span>
            )}
          </div>

          <input
            type="submit"
            value={loading ? "Loading..." : "Submit"}
            className="forminput bg-yellow-400 cursor-pointer"
          />
        </form>
      </Modal>
    </div>
  );
}

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
  },
};
