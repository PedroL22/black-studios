export interface ChannelEntity {
  id: number
  attributes: {
    nome: string
    url: string
    imagem: { data: { attributes: { formats: { medium: { url: string } } } } }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
