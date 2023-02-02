import { gql } from "@apollo/client"

export const MARKET_WIDGET = gql`
  mutation MarketWidGet(
    $makeName: String!
    $modelName: String!
    $domain: String!
    $modelVariantName: String
    $marketYear: Int
  ) {
    createMarketWidgetFromTaxonomyName(
      input: {
        makeName: $makeName
        modelName: $modelName
        domain: $domain
        modelVariantName: $modelVariantName
        marketYear: $marketYear
      }
    ) {
      data {
        id
        hashId
        marketId
        url
        market {
          description
        }
      }
    }
  }
`

export const MAKE_MODEL = gql`
  query MakesQuery {
    makes(options: { type: Automobile }) {
      id
      name
      models {
        id
        name
        make_id
        year_start
        year_end
        modelVariant {
          id
          name
          make_id
          model_id
        }
      }
    }
  }
`
