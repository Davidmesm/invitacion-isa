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
    <div>
      <div className="h-screen top-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/portada.png')", backgroundAttachment: "fixed" }}></div>
      <div className='relative bg-slate-950 h-screen'></div>
    </div>
  );
}
