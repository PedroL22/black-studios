import { FC } from 'react'

import { PortfolioChannel } from '.'

import { requestChannels } from '@/clients/ContentClient'

import { ChannelEntity } from '@/entities/ContentEntity'

export const GridContent: FC = async () => {
  const channelsData = await requestChannels()

  return (
    <>
      {channelsData.map((channel) => (
        <PortfolioChannel
          key={channel.id}
          {...channel}
        />
      ))}
    </>
  )
}
