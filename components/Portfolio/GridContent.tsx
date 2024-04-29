import { FC } from 'react'

import { PortfolioChannel } from './PortfolioChannel'

import { type ClientEntity } from '~/entities/ContentEntity'

import { clients } from '../../portfolioData.json'

export const GridContent: FC = () => {
  return (
    <>
      {clients.map((channel: ClientEntity) => (
        <PortfolioChannel
          key={channel.id}
          {...channel}
        />
      ))}
    </>
  )
}
