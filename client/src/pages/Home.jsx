import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="forest"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center text-center" style={{ top: '10%' }}>
        <h1 className="text-5xl my-7 font-semibold text-white">
          Découvrez Ambatolahy
        </h1>
        <p className="text-xl my-7 text-white">
          La pépinière d'Ambatolahy propose diverses variétés d'arbres fruitiers ainsi que des plantes ornementales pour l'embellissement des jardins.
        </p>
        <div className="mt-5">
          <Link to="/about">
            <Button gradientDuoTone="tealToLime" className="flex items-center">
              Visitez
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

