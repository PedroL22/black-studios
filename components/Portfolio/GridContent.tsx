import { FC } from 'react'

import { PortfolioChannel } from './PortfolioChannel'

import { clients } from '../../portfolioData.json'

export const GridContent: FC = async () => {
  return (
    <>
      {clients.map((channel) => (
        <PortfolioChannel
          key={channel.id}
          {...channel}
        />
      ))}
    </>
  )
}
