export const VideoPlayer = () => {
  return (
    <div className='h-[175px] w-[320px] md:h-[480px] md:w-[768px]'>
      <iframe
        src='https://geo.dailymotion.com/player/xm8vm.html?video=x8qc2cx'
        allow='autoplay; fullscreen; picture-in-picture'
        width='100%'
        height='100%'
      />
    </div>
  )
}
