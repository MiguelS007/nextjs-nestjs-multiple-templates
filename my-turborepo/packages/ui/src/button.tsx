"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        fetch("http://localhost:5001", {
          method: 'GET',
          redirect: 'follow',
          mode: 'cors',
        })
          .then(response => response.text())
          .then(result => { 
            console.log(result)
            alert(`Hello from your ${appName} app! And from your api: ${result}`)
          })
          .catch(error => console.log('error', error));
      }}
    >
      {children}
    </button>
  );
};
