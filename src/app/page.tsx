import Hero from './(components)/hero'
import FeaturesBlocks from './(components)/features-blocks'
import Footer from './(components)/ui/footer'

export default function Home() {
  return (
    <main className='grid w-screen'>
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      {/* <Testimonials />
      <Newsletter /> */}
      <Footer />
    </main>
  )
}
