import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddProduct() {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    id_product_types: "",
  });
  const { name, id_product_types } = product;

  const onInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setProduct({
      ...product,
      id_product_types: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/product", product);
    navigate("/");
    // setProduct(result);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="text-3xl text-center mb-7">Добавление товара</h1>
        <form onSubmit={(e) => addProduct(e)}>
          <div className="-mx-3 ">
            <div className="w-full px-3 ">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Название
                </label>
                <input
                  // type="text"
                  name="name"
                  id="fName"
                  placeholder="Введите название"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={name}
                  // onChange={(e) => setValue(e.target.value)}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Выберите тип продукта
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  value="1"
                  checked={id_product_types === "1"}
                  // id="radioButton1"
                  className="h-5 w-5"
                  onChange={(e) => handleRadioChange(e)}
                />
                <label
                  htmlFor="radioButton1"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Сыпучий
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio2"
                  value="2"
                  checked={id_product_types === "2"}
                  // id="radioButton2"
                  className="h-5 w-5"
                  onChange={(e) => handleRadioChange(e)}
                />
                <label
                  htmlFor="radioButton2"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Жидкий
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name={3}
                  value="3"
                  checked={id_product_types === "3"}
                  // id="radioButton2"
                  className="h-5 w-5"
                  onChange={(e) => handleRadioChange(e)}
                />
                <label
                  htmlFor="radioButton3"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Контейнер
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              // onClick={addProduct}
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none duration-150 ease hover:-translate-y-px hover:bg-[#625ce0]"
            >
              Создать
            </button>
            <Link
              //   type="submit"
              className="hover:shadow-form rounded-md bg-white border-2 border-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-[#6A64F1] outline-none duration-150 ease hover:-translate-y-px "
              to={"/"}
            >
              Назад
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
