import React, { useCallback, useState, useMemo } from "react"
import ButtonChevron from "../ButtonChevron"
import { forSaleLogos } from "../../HeroNew/helpers"

const PriceChart = ({ carName, year, make, model }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  const priceChartSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div className="price-chart-container">
        <div className="h-divider w-100" />
        <p className="pricing-title pt-4 mb-4">Search by Seller</p>
        <div className="for-sale-wrapper">
          <div className="first-row">
            <a
              href={`https://www.classic.com/search?q=${year}+${make}+${model}`}
              target="_blank"
            >
              <img src={forSaleLogos["classic"]} alt="classic sale" />
            </a>
            <a
              href={`https://www.hemmings.com/classifieds/cars-for-sale/${make}/${model}/${year}`}
              target="_blank"
            >
              <img src={forSaleLogos["hemmings"]} alt="Hemmings sale" />
            </a>
          </div>
          <div className="second-row">
            <a
              href={`https://classics.autotrader.com/classic-cars-for-sale/${year}-${make}-${model}-for-sale`}
              target="_blank"
            >
              <img src={forSaleLogos["autoTrader"]} alt="Autotrader sale" />
            </a>
            <a
              href={`https://www.ebay.com/sch/i.html?&_nkw=${year}+${make}+${model}`}
              target="_blank"
            >
              <img src={forSaleLogos["ebay"]} alt="Ebay sale" />
            </a>
          </div>
        </div>
      </div>
    )
  }, [isExpanded])

  return (
    <div className="price-chart">
      <div className="price-chart-header">
        {carName && (
          <p className="price-chart-title ">{`${carName} for sale`}</p>
        )}
        <ButtonChevron
          className="price-chart-button"
          isExpanded={isExpanded}
          onToggleExpand={toggleExpand}
        />
      </div>
      {priceChartSection}
    </div>
  )
}

export default PriceChart
