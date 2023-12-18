import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
// import { useParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  //   const {id} = useParams()
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/products");
    // console.log(result.data[0].id_product_types.id);
    console.log(result.data);
    setProducts(result.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    loadProducts();
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Название
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      id_product_types
                    </th>
                    {/* <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Тип продукта
                    </th> */}
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {products.map((product, index) => {
                  return (
                    <Product
                      product={product}
                      // r={product.id_product_types.id}
                      //   index={index}
                      key={index}
                      deleteProduct={deleteProduct}
                    />
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
