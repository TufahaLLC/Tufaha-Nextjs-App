import ProductCard from './ui/productCard'

export default function FeaturesBlocks() {
  const products = [
    {
      title: 'StateofUmmah',
      description: 'Unite the Ummah through global news and social collaboration.'
    },
    {
      title: 'QuranTracker',
      description: 'Track, manage, and enhance Quran classes.'
    }
  ]
  return (
    <section>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className='md:mt-16 lg:mt-0 bg-gray-900 pointer-events-none' aria-hidden='true'></div> */}
      {/* <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div> */}

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='text-lg mb-4'>Products</h2>
            {/* <p className='text-xl text-gray-600'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              excepteur sint occaecat cupidatat.
            </p> */}
          </div>

          {/* Items */}
          <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none'>
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
