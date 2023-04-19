import Image from 'next/image'
import { Inter } from 'next/font/google'
import Grid from './grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const images = [

    {
        id:1,
        name: "houseone",
        src: "/houseone.jpg"
    },
    {
        id:2,
        name: "housetwo",
        src: "/housetwo.jpg"
    },
    {
        id:3,
        name: "housethree",
        src: "/housethree.jpg"
    },
    {
        id:4,
        name: "housefour",
        src: "/housefour.jpg"
    },
    {
        id:5,
        name: "housefive",
        src: "/housefive.jpg"
    },
    {
        id:6,
        name: "housesix",
        src: "/housesix.jpg"
    },


]
  return (
    <main className="flex  min-h-screen flex-col items-center p-10">
      <div className="flex flex-col items-center justify-between " >


      <iframe className='w-full sm:w-3/6'  src='https://vt.plushglobalmedia.com/tour/TT18EBI72R' height={300}/>

      

<div className="mb-32 mt-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
   {
    images.map(item => {
       return(
          <Grid  house={item.src} key={item.id} ></Grid>
       )
    })
   }
</div>

      </div>
      
    </main>
  )
}
