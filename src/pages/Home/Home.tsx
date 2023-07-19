import { MainContainer } from '@components/MainContainer'

export const Home = () => {
  return (
    <MainContainer>
      <div className='space-y-5 pb-10'>
        <h1 className='flex flex-col whitespace-nowrap text-center text-5xl md:text-9xl'>
          Bem-vindos à{' '}
          <span className='bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-5xl font-medium text-transparent md:text-9xl'>
            Black Studios
          </span>
        </h1>

        <h2 className='text-center text-4xl font-light text-zinc-200 md:text-7xl'>Produtora audiovisual</h2>
      </div>
      <div className='flex justify-center pb-10'>
        <iframe
          src='https://www.youtube.com/embed/Rl8oGtG-qNM'
          title='vídeo de apresentação'
          allow='autoplay'
          allowFullScreen
          className='h-[175px] w-[320px] md:h-[480px] md:w-[768px]'
        />
      </div>
    </MainContainer>
  )
}
