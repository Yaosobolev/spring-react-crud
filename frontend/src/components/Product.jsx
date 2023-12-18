import { Link } from "react-router-dom";
// import axios from "axios";

export default function Product(props) {
  const data = props.product;

  // const deleteProduct = async (id)=>{
  //   await axios.delete(`http://localhost:8080/product/${id}`)
  //   loadProducts()
  // }
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {data.id}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {data.name}
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {data.id_product_types.id}
          </td>
          {/* <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {data.id_product_types.name}
          </td> */}
          <td className="py-4 px-6 flex justify-end gap-2 text-sm font-medium text-right whitespace-nowrap">
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              to={`/viewproduct/${data.id}`}
            >
              Просмотреть
            </Link>
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              to={`/editproduct/${data.id}`}
            >
              Изменить
            </Link>
            <button
              onClick={() => props.deleteProduct(data.id)}
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
