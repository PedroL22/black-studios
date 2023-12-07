import { ChannelEntity } from '@/entities/ContentEntity'

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export const requestChannels = async (): Promise<ChannelEntity[]> => {
  try {
    const response = await fetch(`${BASE_URL}youtube-channels?populate=*`)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status} - ${response.statusText}`)
    }

    const { data } = await response.json()
    return data
  } catch (err) {
    console.error('Error fetching data:', err)
    throw err
  }
}
