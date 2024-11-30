import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=''>
      <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="forest" className='w-full h-full object-cover' />

      <div className='content-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/2'>
        <h1 className='text-center text-5xl my-7 font-semibold text-white'>Découvrez Ambatolahy</h1>
        <p className='text-center text-xl my-7 text-white'>La pépinière d'Ambatolahy propose diverses variétés d'arbres fruitiers ainsi que des plantes ornementales pour l'embellissement des jardins.</p>
        <div className='content-between'>
        <Link to='/about'>
            <Button gradientDuoTone='tealToLime' className=''>
                Visitez
            </Button>
        </Link>

        </div>
        
      </div>
    </div>
  )
}
