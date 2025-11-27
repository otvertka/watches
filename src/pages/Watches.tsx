import CardWatch from '@/components/Cards/CardWatch'
import { allWatches } from '@/data/watches'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}


const Watches = (props: Props) => {
  return (
    <section className='mt-44 '>
        <h1>All watches</h1>
        <div>Sort, Search, Brands</div>
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8'>
        {allWatches.map((item)=> (
            <li key={item.id}>
                <CardWatch item={item}/>
            </li>
        ))}
    </ul>
    
    </section>
  )
}

export default Watches