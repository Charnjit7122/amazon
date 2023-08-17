import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import AdminTheme from "../../../components/admin/AdminTheme";
import DataTable from "../../../components/admin/DataTable";
import AddProduct from "../../../modals/AddProduct";
import { DataUpdateState } from "../../../modals/atoms/DataAtoms";
import { AddProductModalState } from "../../../modals/atoms/modalAtoms";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import Link from "next/link";

export default function Products({ products, category }) {
  const [dataUpdate, setDataupdate] = useRecoilState(DataUpdateState);
  const [updatedData, setUpdatedData] = useState([]);
  const [addProductModal, setAddProductModal] =
    useRecoilState(AddProductModalState);

  const data = useMemo(
    () =>
      products.map((product) => ({
        col1: (
          <Title image={product.image} id={product._id} title={product.title} />
        ),
        col2: product.price,
        col3: <Category category={product.category} />,
        col4: <Actions id={product._id} />,
      })),

    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "col1",
      },
      {
        Header: "Price",
        accessor: "col2",
      },
      {
        Header: "Category",
        accessor: "col3",
      },

      {
        Header: "Action",
        accessor: "col4",
      },
    ],
    []
  );

  useEffect(() => {
    const newData = async () => {
      const response = await fetch("/api/products");
      const responseData = await response.json();

      let data = responseData.map((product) => ({
        col1: (
          <Title image={product.image} id={product._id} title={product.title} />
        ),
        col2: product.price,
        col3: <Category category={product.category} />,
        col4: <Actions id={product._id} />,
      }));

      setUpdatedData(data);
    };

    newData();
  }, [dataUpdate]);

  return (
    <AdminTheme>
      {addProductModal && <AddProduct category={category} />}

      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <h1 className="text-xl font-semibold">All Products</h1>
        <button
          onClick={() => setAddProductModal(true)}
          className=" bg-yellow-400 p-2 rounded cursor-pointer"
        >
          Add Product
        </button>
      </div>
      {dataUpdate ? (
        <DataTable columns={columns} data={updatedData} />
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </AdminTheme>
  );
}

export async function getServerSideProps(contex) {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products`
  ).then((res) => res.json());

  const category = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/category`
  ).then((res) => res.json());

  return {
    props: {
      products: products,
      category: category,
    },
  };
}

const Title = ({ image, title, id }) => {
  return (
    <div className="flex items-center overflow-x-scroll scrollbar-hide  max-w-[90px] sm:max-w-xs md:w-auto">
      <img
        className="h-10 w-10 flex-none rounded-full hidden sm:inline-block"
        src={image}
        alt=""
      />
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900 truncate">
          {title}
        </div>
        <div className="text-xs text-gray-500">{id}</div>
      </div>
    </div>
  );
};

const Category = ({ category }) => {
  return (
    <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
      {category}
    </span>
  );
};

const Actions = ({ id }) => {
  const [dataUpdate, setDataupdate] = useRecoilState(DataUpdateState);
  const [loading, setLoading] = useState(false);

  const DeleteProduct = async () => {
    if (loading) return;
    setLoading(true);
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setDataupdate(response);
    setLoading(false);
  };

  return (
    <div>
      <span className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
        <Link href={`/admin/products/${id}`}>
          <AiTwotoneEdit className="w-6 h-6 text-blue-500 cursor-pointer" />
        </Link>
        <AiFillDelete
          onClick={DeleteProduct}
          className="w-6 h-6 text-red-500 cursor-pointer"
        />
      </span>
    </div>
  );
};
