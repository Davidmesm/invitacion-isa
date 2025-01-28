import { cn } from '@/lib/utils';
import { Pacifico, Allura } from 'next/font/google';
import { LocationOn, Schedule, ChevronRight, Instagram, Facebook } from '@mui/icons-material';
import Image from 'next/image';
import churchPhoto from '@/public/img/parroquia.jpg'
import salonPhoto from '@/public/img/salon.jpg'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {doc, getDoc} from "@firebase/firestore"
import db from '@/lib/firestore';

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

export default async function Home({params}) {

  const id = (await params).id

  const docRef = doc(db, "invitados", id);
  const docSnap = await getDoc(docRef);
  const invitado = docSnap.data();
  
  return (
    <div className='block'>
      <section className='bg-black overflow-hidden relative box-border' style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}>
        <div className='bg-center bg-no-repeat bg-cover fixed h-full w-full box-border' style={{ backgroundImage: "url('/img/portada.png')" }}></div>
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
          <p className="text-2xl md:text-3xl font-light tracking-wide text-center text-purple-900 mb-2">{invitado.nombre}</p>
          <p className="text-xl md:text-2xl font-light tracking-wide text-center">( {invitado.adultos} <span className="text-purple-900">Adultos</span> & {invitado.ninos} <span className="text-purple-900">Niños</span> )</p>
        </div>
        <div>
          <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">Me hará muy feliz que me acompañes en este día tan especial.</p>
        </div>
      </section>
      <section className="h-screen bg-purple-400 py-6 z-10">
        <div className="bg-white rounded-md mx-4 h-full flex flex-col justify-center px-2 gap-y-20 md:gap-y-40">
          <div>
            <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">
              Con el corazón lleno de alegría, te invito a ser testigo y partícipe de una dia tan especial, a lado de mis personas favoritas.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-y-10">
            <div className='w-full md:w-1/2'>
              <div className="pb-4">
                <h2 className={cn("text-center text-4xl text-purple-500", alluraLatin.className)}>Mis Papas</h2>
              </div>
              <div className="text-lg/7 md:text-xl/7 font-light tracking-wide">
                <p className="text-center">David Moreno Espinosa de los Monteros</p>
                <p className="text-center">&</p>
                <p className="text-center">Maria de los Angeles Muñiz Ramos</p>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className="pb-4">
                <h2 className={cn("text-center text-4xl text-purple-500", alluraLatin.className)}>Mis Padrinos</h2>
              </div>
              <div className="text-lg/7 md:text-xl/7 font-light tracking-wide">
                <p className="text-center">Felipe Espinosa de los Monteros Rico</p>
                <p className="text-center">&</p>
                <p className="text-center">Ivette Lavoignet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='' style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}>
        <div className='bg-center bg-no-repeat bg-cover fixed h-full w-full top-0 left-0' style={{ backgroundImage: "url('/img/padrinos2.png')" }}></div>
        <div className='relative min-h-screen flex flex-wrap'>
        </div>
      </section>
      <section className="h-screen bg-white text-black flex flex-col justify-center px-4 md:px-8">
        <div className='flex flex-col h-full w-full justify-center gap-y-1'>
          <div>
            <h2 className={cn("text-center text-4xl text-purple-500", alluraLatin.className)}>Ceremonia</h2>
          </div>
          <div className='flex flex-col px-4 gap-y-4 w-full'>
            <div className='flex flex-col gap-y-4'>
              <div className='text-center'><p>CAPILLA DE MARIA MADRE NUESTRA</p></div>
              <div>
                <div className='text-center'>
                  <LocationOn className="w-8 h-8 text-purple-600" />
                </div>
                <div className='text-center'><p>Paseo San Arturo Sur No. 3255, Col. Fraccionamiento Valle Real</p></div>
              </div>
              <div>
                <div className='text-center'>
                  <Schedule className="w-8 h-8 text-purple-600" />
                </div>
                <div className='text-center'><p>1:00 p.m.</p></div>
              </div>
            </div>
            <div className='px-4 justify-items-center'><Image src={churchPhoto} alt="Church" className='w-full rounded-md md:w-[300px]'></Image></div>
            <div className='px-6 w-full md:justify-items-center'>
              <div className='w-full md:w-[300px]'>
                <Button className="w-full" asChild>
                  <Link href="https://maps.app.goo.gl/wS2gchLrryYvVz16A">
                    <ChevronRight /> ABRIR MAPA
                  </Link>
                </Button></div></div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-purple-200 text-black flex flex-col justify-center px-4 md:px-8">
        <div className='flex flex-col h-full w-full justify-center gap-y-10'>
          <div>
            <h2 className={cn("text-center text-4xl text-purple-500", alluraLatin.className)}>Recepción</h2>
          </div>
          <div className='flex flex-col px-4 gap-y-4 w-full'>
            <div className='flex flex-col gap-y-4'>
              <div className='text-center'><p>EVENTIUS TERRAZA JARDIN</p></div>
              <div>
                <div className='text-center'>
                  <LocationOn className="w-8 h-8 text-purple-600" />
                </div>
                <div className='text-center'><p>Periferico No. 6280, Col. Miramar</p></div>
              </div>
              <div>
                <div className='text-center'>
                  <Schedule className="w-8 h-8 text-purple-600" />
                </div>
                <div className='text-center'><p>3:00 p.m.</p></div>
              </div>
            </div>
            <div className='px-4 justify-items-center'><Image src={salonPhoto} alt="Eventius" className='w-full md:w-[300px] rounded-md'></Image></div>
            <div className='px-6 w-full justify-items-center'>
              <div className='w-full md:w-[300px]'>
                <Button className="w-full" asChild>
                  <Link href="https://maps.app.goo.gl/hQoHdeZe6qvqYkdY9">
                    <ChevronRight /> ABRIR MAPA
                  </Link>
                </Button></div>
            </div>
          </div>
        </div>
      </section>
      <section className='' style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}>
        <div className='bg-center bg-no-repeat bg-cover fixed h-full w-full top-0 left-0' style={{ backgroundImage: "url('/img/isa.jpg')" }}></div>
        <div className='relative min-h-screen flex flex-wrap'>
        </div>
      </section>
      <section className="z-10 relative h-screen bg-gradient-to-b from-purple-300 to-pink-300
              bg-gradient-move animate-gradient text-black py-4">
        <div className="bg-purple-50 rounded-md mx-4 h-full flex flex-col justify-center px-2 md:px-4 gap-y-10 md:gap-y-15">
          <div className='pb-10'>
            <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">
              MIS RECUERDOS
            </p>
          </div>
          <div className="pb-5">
            <h2 className={cn("text-center text-5xl text-purple-500", alluraLatin.className)}>Hashtag</h2>
          </div>
          <div>
            <p className="text-lg/7 md:text-xl/7 font-light tracking-wide text-center">
              No olvides etiquetarme en todas tus publicaciones de Instagram y Facebook utilizando mi Hashtag…
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light tracking-wide text-center text-purple-500">
              #IsaPrimeraComunion
            </p>
          </div>
          <div className='flex flex-column gap-x-10 w-full justify-center'>
            <div><Instagram className="w-16 h-16 text-purple-600" /></div>
            <div><Facebook className="w-16 h-16 text-purple-600" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
