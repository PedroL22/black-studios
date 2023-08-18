import { motion } from 'framer-motion'

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
      <img
        src={image}
        alt={'Foto de ' + name}
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
