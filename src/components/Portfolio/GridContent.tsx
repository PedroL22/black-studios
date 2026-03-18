import { FC } from 'react'

import { PortfolioChannel } from './PortfolioChannel'

import { type ClientEntity } from '~/entities/ContentEntity'

import portfolioData from '../../portfolioData.json'

export const GridContent: FC = () => {
  return (
    <>
      {portfolioData.clients.map((channel: ClientEntity) => (
        <PortfolioChannel
          key={channel.id}
          {...channel}
        />
      ))}
    </>
  )
}
