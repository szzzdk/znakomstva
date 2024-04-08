import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);
    } catch (error: any) {
      console.error("Ошибка аутентификации", error.message);
    }
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center justify-center text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Введите электронную почту"
          className="text-sm w-72 bg-btnCustomColor rounded-2xl p-4 mt-3 mb-1"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          className="text-sm w-72 bg-btnCustomColor rounded-2xl p-4 mb-1"
          onChange={handleChange}
          required
        />
        <button
          className="text-sm w-72 border rounded-2xl p-4"
          style={{
            background: "linear-gradient(to right, #EE0979 100%, #B3221F 100%)",
            color: "#ffffff",
          }}
        >
          Войти
        </button>
        <button className="text-xs mt-3">Я не помню пароль</button>
      </form>
    </div>
  );
};

export default Form;
