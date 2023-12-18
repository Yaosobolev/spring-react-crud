import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    id_product_types: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProduct(result.data);
    console.log(result.data);
  };
  return (
    <div className="flex items-center justify-center mt-16 ">
      <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs  ">
        <h1 className="text-2xl text-gray-700"> Товар с id: {product.id}</h1>
        {/* <h3 className="text-sm text-gray-400 "> Creative Director </h3> */}
        <div className="flex flex-col items-start ">
          <p className="text-lg text-gray-700 mt-4">
            Название: <b>{product.name}</b>
          </p>
          <p className="text-lg text-gray-700 mt-4">
            id_product_types: <b>{product.id_product_types.id}</b>
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Тип: <b>{product.id_product_types.name}</b>
          </p>
        </div>

        <Link
          className="block bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide duration-150 ease hover:-translate-y-px"
          to={"/"}
        >
          Назад
        </Link>
      </div>
    </div>
  );
}
