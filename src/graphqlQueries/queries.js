import { gql } from "@apollo/client"

export const MARKET_WIDGET = gql`
  mutation MarketWidGet(
    $makeName: String!
    $modelName: String!
    $domain: String!
    $modelGenerationName: String
    $modelVariantName: String
    $marketYear: Int
  ) {
    createMarketWidgetFromTaxonomyName(
      input: {
        makeName: $makeName
        modelName: $modelName
        domain: $domain
        modelGenerationName: $modelGenerationName
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
    makes {
      id
      name
      models {
        id
        name
        make_id
        modelVariant {
          id
          name
          make_id
          model_id
          modelTrim {
            id
            name
          }
        }
        modelGeneration {
          id
          name
          year_start
          year_end
        }
      }
    }
    getMarketList {
      id
      name
    }
  }
`
