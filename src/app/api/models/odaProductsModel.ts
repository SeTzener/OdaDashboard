export interface OdaProducts {
    type: string
    attributes: Attributes
    items: Item[]
    filters: any[]
  }
  
  export interface Attributes {
    items: number
    page: number
    has_more_items: boolean
    request_types: any[]
    query_string: string
    filters: string
    meta: any
    uuid: string
  }
  
  export interface Item {
    id: number
    type: string
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    id: number
    full_name: string
    brand?: string
    brand_id?: number
    name: string
    name_extra: string
    front_url: string
    absolute_url: string
    gross_price: string
    gross_unit_price: string
    unit_price_quantity_abbreviation: string
    unit_price_quantity_name: string
    client_classifiers: ClientClassifier[]
    currency: string
    discount: any
    promotion?: Promotion
    promotions: Promotion2[]
    availability: Availability
    metadata: Metadata
    is_exempt_from_third_party_marketing: boolean
    images: Image[]
  }
  
  export interface ClientClassifier {
    name: string
    image_url: string
    is_important: boolean
    description: string
  }
  
  export interface Promotion {
    title: string
    title_color: string
    background_color: string
    text_color: string
    description_short: any
    accessibility_text: string
    display_style: string
  }
  
  export interface Promotion2 {
    title: string
    title_color: string
    background_color: string
    text_color: string
    description_short: any
    accessibility_text: string
    display_style: string
  }
  
  export interface Availability {
    is_available: boolean
    description: string
    description_short: string
    code: string
  }
  
  export interface Metadata {
    is_sponsor_labeled: boolean
    source_uuid: string
  }
  
  export interface Image {
    large: Large
    thumbnail: Thumbnail
    variant: string
  }
  
  export interface Large {
    url: string
    width: number
    height: number
  }
  
  export interface Thumbnail {
    url: string
    width: number
    height: number
  }
  