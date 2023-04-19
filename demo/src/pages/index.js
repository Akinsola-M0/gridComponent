import Image from 'next/image'
import { Inter } from 'next/font/google'
import Grid from './grid'
import { images } from './data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <iframe className='w-3/6' src='https://vt.plushglobalmedia.com/tour/TT18EBI72R' height={300}/>

      

      <div className="mb-32 mt-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
         {
          images.map(item => {
             return(
                <Grid  house={item.src} key={item.id} ></Grid>
             )
          })
         }
      </div>
    </main>
  )
}
