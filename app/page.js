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
      <section className='bg-black overflow-hidden relative box-border' style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}>
        <div className='bg-center bg-[url(/img/portada.png)] bg-no-repeat bg-cover fixed h-full w-full box-border' style={{ backgroundImage: "url('/img/portada2.jpg')" }}></div>
        <div className='relative min-h-screen flex flex-wrap'>
          <div className='w-full flex'>
            <div className='align-content-end align-items-end w-full'>

            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-purple-200 text-black flex flex-col justify-center px-4 md:px-8 z-10">
        <div className="pb-32">
          <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">Mi primera comunión es una ocasión especial para rodearme de la gente que quiero y que ha estado presente en mi vida.</p>
        </div>
        <div className="pb-20">
          <p className="text-2xl md:text-3xl font-light tracking-wide text-center mb-4">INVITACIÓN <span className={cn("text-purple-800 font-extralight text-3xl md:text-4xl", pacificoLatin.className)}>válida</span> PARA:</p>
          <p className="text-2xl md:text-3xl font-light tracking-wide text-center text-purple-900 mb-2">Nombre del Invitado</p>
          <p className="text-xl md:text-2xl font-light tracking-wide text-center">( # <span className="text-purple-900">Adultos</span>  # <span className="text-purple-900">Niños</span> )</p>
        </div>
        <div>
          <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">Me hará muy feliz que me acompañes en este día tan especial.</p>
        </div>
      </section>
    </div>
  );
}
