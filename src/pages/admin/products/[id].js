import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import AdminTheme from "../../../components/admin/AdminTheme";
import { DataUpdateState } from "../../../modals/atoms/DataAtoms";

export default function ProductDetail({ product, category }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [dataUpdate, setDataupdate] = useRecoilState(DataUpdateState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editProduct = async (data) => {
    if (loading) return;
    setLoading(true);
    const response = await fetch(`/api/products/${router.query.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: data.Title,
        image: data.Image,
        ratings: { rating: data.Rating, count: data.Count },
        category: data.Category,
        description: data.Description,
        price: data.Price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setDataupdate(response);
    router.push("/admin/products");
  };

  return (
    <AdminTheme>
      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <h1 className="text-xl font-semibold">Edit Product</h1>
        <button
          onClick={() => router.push("/admin/products")}
          className=" bg-red-400 p-1.5 rounded cursor-pointer font-semibold"
        >
          Cancel
        </button>
      </div>

      <form
        onSubmit={handleSubmit(editProduct)}
        className="flex flex-col gap-5 my-5 md:my-10 lg:max-w-lg mx-auto"
      >
        <div className="flex flex-col">
          <label className="formlabel">Title</label>
          <input
            className="forminput"
            type="text"
            placeholder="Title"
            {...register("Title", {
              required: true,
              value: product.title,
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
            {...register("Price", { required: true, value: product.price })}
          />
          {errors.Price && <span className="formerror">Invalid Price.</span>}
        </div>

        <div className="flex flex-col">
          <label className="formlabel">Image URL</label>
          <input
            className="forminput"
            type="text"
            placeholder="Image"
            {...register("Image", { required: true, value: product.image })}
          />
          {errors.Image && <span className="formerror">Invalid Image.</span>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <label className="formlabel">Rating</label>
            <input
              className="forminput"
              type="number"
              placeholder="Rating"
              {...register("Rating", {
                required: true,
                value: product.ratings.rating,
                min: 0,
                max: 5,
              })}
            />
            {errors.Rating && (
              <span className="formerror">Rating must be between 0 to 5..</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="formlabel">Total Count</label>
            <input
              className="forminput"
              type="number"
              placeholder="Count"
              {...register("Count", {
                required: true,
                value: product.ratings.count,
              })}
            />
            {errors.Count && <span className="formerror">Invalid Count.</span>}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="formlabel">Description</label>
          <textarea
            className="forminput"
            rows={3}
            type="text"
            placeholder="Enter Description"
            {...register("Description", {
              required: true,
              value: product.description,
            })}
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
              value: product.category,
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
    </AdminTheme>
  );
}

export async function getServerSideProps({ params }) {
  const productdata = await fetch(
    `${process.env.HOST}/api/products/${params.id}`
  ).then((res) => res.json());
  const category = await fetch(`${process.env.HOST}/api/category`).then((res) =>
    res.json()
  );
  return {
    props: {
      product: productdata[0],
      category: category,
    },
  };
}
