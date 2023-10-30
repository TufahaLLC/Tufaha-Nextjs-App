interface props {
  title: string
  description: string
}

export default function ProductCard({ title, description }: props) {
  return (
    <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
      <h4 className='text-xl font-bold leading-snug tracking-tight mb-1'>{title}</h4>
      <p className='text-gray-600 text-center'>{description}</p>
    </div>
  )
}
