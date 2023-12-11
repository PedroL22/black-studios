export interface ChannelEntity {
  id: number
  attributes: {
    nome: string
    url: string
    imagem: { data: { attributes: { url: string } } }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
