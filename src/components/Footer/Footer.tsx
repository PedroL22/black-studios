export const Footer = () => {
  return (
    <footer className='h-16 bg-zinc-950'>
      <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
        <div className='mx-auto flex justify-between px-16 pt-4 md:px-36 lg:px-72' />
        <p className='pt-2 text-center text-xs text-zinc-50'>
          Made with <span className='text-red-600'>♥</span> by{' '}
          <a
            href='https://github.com/PedroL22/'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub de Pedro Lucena'
            className='font-medium text-zinc-50 no-underline'
          >
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}
