import Hero from './(components)/hero'
import FeaturesBlocks from './(components)/features-blocks'
import Footer from './(components)/ui/footer'
import { LiveStream } from './(components)/live-stream'

export default function Home() {
  return (
    <main className='grid w-screen h-screen'>
      <Hero />
      {/* <Features /> */}
      {/* <LiveStream /> */}
      <FeaturesBlocks />
      {/* <Testimonials />
      <Newsletter /> */}
      <Footer />
    </main>
  )
}
