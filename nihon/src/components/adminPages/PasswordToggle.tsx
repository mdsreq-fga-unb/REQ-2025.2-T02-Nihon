"use client"

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Props = {
  name?: string;
  className?: string;
  placeholder?: string;
};

export default function PasswordToggle({ name = "password", className = "", placeholder = "" }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-full h-12 sm:h-12">
      <input
        name={name}
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        className={`h-full w-full pr-12 ${className}`}
      />

      <button
        type="button"
        aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-0 bottom-0 flex items-center justify-center text-gray-600 hover:text-gray-900"
      >
        {visible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
      </button>
    </div>
  );
}
