import { FC } from 'react'

import { PortfolioChannel } from '.'

import { youtube_channels } from '../../portfolioData.json'

export const GridContent: FC = async () => {
  return (
    <>
      {youtube_channels.map((channel) => (
        <PortfolioChannel
          key={channel.id}
          {...channel}
        />
      ))}
    </>
  )
}
