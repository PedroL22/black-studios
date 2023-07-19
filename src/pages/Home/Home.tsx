import { MainContainer } from '@components/MainContainer'

export const Home = () => {
  return (
    <MainContainer>
      <div className='space-y-5'>
        <h1 className='flex flex-col text-center text-5xl md:text-9xl'>
          Bem-vindos à{' '}
          <span className='bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-5xl font-medium text-transparent md:text-9xl'>
            Black Studios
          </span>
        </h1>

        <h2 className='text-center text-4xl font-light text-zinc-200 md:text-7xl'>Produtora audiovisual</h2>
      </div>
    </MainContainer>
  )
}
