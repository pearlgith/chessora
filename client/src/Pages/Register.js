// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { logo, background } from "../Assets/index";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const registerUser = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/register", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           role,
//           password,
//         }),
//       });
//       const data = await response.json();
//       console.log(data); // Log the response data to the console
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div
//       className='flex flex-col items-center justify-center h-screen'
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div className='text-center mt-5'>
//         <img
//           className='w-80 h-70 mb-15 mx-auto min-w-[150px]'
//           src={logo}
//           alt='logo'
//         />
//         <form onSubmit={registerUser} className='mx-auto mb-5 mt-4 max-w-md'>
//           <div className='mb-8'>
//             <h1 className='text-3xl font-bold mt-4 mb-2 text-gray-600 text-left'>
//               Регистрация
//             </h1>
//             <p className='text-gray-500 text-left'>
//               Уже есть аккаунт?{" "}
//               <span
//                 onClick={(e) => navigate("/")}
//                 className='text-lime-500 cursor-pointer'
//               >
//                 Войти
//               </span>
//             </p>
//           </div>
//           <div className='text-left'>
//             <span className=''>Имя</span>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder='Имя'
//               type='text'
//               className='w-full px-4 py-4 border rounded-lg mb-4'
//             />
//           </div>
//           <div className='text-left'>
//             <span className=''>Email</span>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder='Email'
//               type='email'
//               className='w-full px-4 py-4 border rounded-lg mb-4'
//             />
//           </div>
//           <div className='text-left'>
//             <span className=''>Звание</span>
//             <input
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               placeholder='Звание'
//               type='text'
//               className='w-full px-4 py-4 border rounded-lg mb-4'
//             />
//           </div>
//           <div className='text-left'>
//             <span className=''>Пароль</span>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder='Пароль'
//               type='password'
//               className='w-full px-4 py-4 border rounded-lg mb-4'
//             />
//           </div>
//           <div className='flex justify-between'>
//             <button
//               type='submit'
//               className='bg-lime-500 text-white py-2 px-4 rounded-sm'
//             >
//               Зарегистрироваться
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo, background } from "../Assets/index";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role,
          password,
        }),
      });
      const data = await response.json();
      console.log(data); // Log the response data to the console
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className='flex flex-col items-center justify-center h-screen'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className='text-center mt-5'>
        <img
          className='w-80 h-70 mb-15 mx-auto min-w-[150px]'
          src={logo}
          alt='logo'
        />
        <form onSubmit={registerUser} className='mx-auto mb-5 mt-4 max-w-md'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold mt-4 mb-2 text-gray-600 text-left'>
              Регистрация
            </h1>
            <p className='text-gray-500 text-left'>
              Уже есть аккаунт?{" "}
              <span
                onClick={(e) => navigate("/")}
                className='text-lime-500 cursor-pointer'
              >
                Войти
              </span>
            </p>
          </div>
          <div className='text-left'>
            <span className=''>Имя</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Имя'
              type='text'
              className='w-full px-4 py-4 border rounded-lg mb-4'
            />
          </div>
          <div className='text-left'>
            <span className=''>Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type='email'
              className='w-full px-4 py-4 border rounded-lg mb-4'
            />
          </div>
          <div className='text-left'>
            <span className=''>Звание</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='w-full px-4 py-4 border rounded-lg mb-4'
            >
              <option value='' disabled hidden>
                Выберите звание
              </option>
              <option value='Пользователь'>Пользователь</option>
              <option value='Юн. разряд'>Юношеский разряд</option>
              <option value='3 разряд'>3 разряд</option>
              <option value='2 разряд'>2 разряд</option>
              <option value='1 рязряд'>1 разряд</option>
              <option value='КМС'>КМС</option>
              <option value='Мастер'>Мастер</option>
              <option value='Мастер ФИДЕ'>Мастер ФИДЕ</option>
              <option value='Межд. мастер'>Международный Мастер</option>
              <option value='Гроссмейстер'>Гроссмейстер</option>
            </select>
          </div>
          <div className='text-left'>
            <span className=''>Пароль</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Пароль'
              type='password'
              className='w-full px-4 py-4 border rounded-lg mb-4'
            />
          </div>
          <div className='flex justify-between'>
            <button
              type='submit'
              className='bg-lime-500 text-white py-2 px-4 rounded-sm'
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
