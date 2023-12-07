import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioClientProps {
  name: string
  image: string
  url: string
}

export const PortfolioClient = ({ name, image, url }: PortfolioClientProps) => {
  return (
    <motion.a
      href={url}
      target='_blank'
      rel='noreferrer'
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 1.1, rotate: 0 }}
    >
      <Image
        src={image}
        alt={'Foto de ' + name}
        width={300}
        height={300}
        className='h-36 w-36 rounded-xl object-cover md:h-44 md:w-44'
      />
      <h2
        aria-hidden
        className='pt-1 text-center text-lg'
      >
        {name}
      </h2>
    </motion.a>
  )
}
