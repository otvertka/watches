import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HText = ({children}: Props) => {
  return (
    <h2 className='basis-3/5 font-monserat text-2xl font-semibold'>
        {children}
    </h2>
  )
}

export default HText