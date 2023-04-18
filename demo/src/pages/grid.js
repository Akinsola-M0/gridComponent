import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Grid({house}) {

return(

<div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
  <div class='w-auto h-40 relative'>
  <Image 
   fill
  src={house} 
  alt="Sunset in the mountains"
  />
  </div>
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
)

}