import { cn } from '@/lib/utils';
import { Pacifico, Allura } from 'next/font/google';
import { LocationOn, Schedule, ChevronRight, Instagram, Facebook } from '@mui/icons-material';
import Image from 'next/image';
import churchPhoto from '@/public/img/parroquia.jpg'
import salonPhoto from '@/public/img/salon.jpg'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pacificoLatin = Pacifico({
  variable: "--font-pacifico-latin",
  weight: "400",
  subsets: ["latin"],
});

const alluraLatin = Allura({
  variable: "--font-allura-latin",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {

  return (
    <div className='block'>
      <section className='bg-black overflow-hidden relative box-border' style={{clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)"}}>
        <div className='bg-center bg-[url(/img/portada2.png)] bg-no-repeat bg-cover fixed h-full w-full box-border' style={{backgroundImage:"url('/img/portada2.jpg')"}}></div>
        <div className='relative min-h-screen flex flex-wrap'>
          <div className='w-full flex'>
            <div className='align-content-end align-items-end w-full'>

            </div>
          </div>
        </div>
      </section>
      <section className='bg-black h-screen'>

      </section>
    </div>
  );
}
