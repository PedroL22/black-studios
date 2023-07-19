import { MainContainer } from '@components/MainContainer'

export const Home = () => {
  return (
    <MainContainer>
      <div className='space-y-5'>
        <h1 className='text-5xl'>
          Bem-vindos à <span className='text-5xl font-medium'>Black Studios</span>
        </h1>

        <h2 className='text-4xl font-light text-zinc-200'>Produtora audiovisual</h2>
      </div>
    </MainContainer>
  )
}
