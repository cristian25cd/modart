export type Artwork = {
  id: number
  artist_id: number
  artist_title: string
  date_display: string
  image_id: string
  thumbnail: {
    lqip: string
    alt_text: string
    height: number
    width: number
  }
  title: string
}

export type Pagination = {
  current_page: number
  limit: number
  next_url: string
  offset: number
  total: number
  total_pages: number
}

export type ArtworkResponse = {
  data: Artwork[]
  pagination: Pagination
}