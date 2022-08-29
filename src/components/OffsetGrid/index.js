import React from "react"
import {
  Content,
  GridBlock,
  HeadingBlock,
  OffsetGridSection,
} from "./offsetgrid.styles"
import checkIcon from "../../images/icons/check-icon.svg"

const OffsetGrid = () => (
  <OffsetGridSection>
    <div className="container px-0">
      <Content>
        <HeadingBlock>
          <span className="kicker">Top-tier Analysis</span>
          <h2 className="heading">
            Not just another <span>valuation tool</span>.
          </h2>
          <p className="description">
            Information is power. American Collectors Insurance has partnered
            with experienced valuation experts like NADA and VMR Auto Guides to
            create a better classic car valuation tool.
          </p>
        </HeadingBlock>
        <GridBlock>
          <div className="grid-item">
            <img className="check-icon" src={checkIcon} alt="Check icon" />
            <p className="grid-title">Market Value</p>
            <p className="grid-description">
              Determined analyzing supply and demand, using historical sale
              prices and/or current asking prices on available inventory.
            </p>
          </div>

          <div className="grid-item">
            <img className="check-icon" src={checkIcon} alt="Check icon" />
            <p className="grid-title">Compare Sources</p>
            <p className="grid-description">
              Comparing results from multiple valuation sources will help
              develop a more accurate value estimate for your collector car!
            </p>
          </div>

          <div className="grid-item">
            <img className="check-icon" src={checkIcon} alt="Check icon" />
            <p className="grid-title">Accurate Valuations</p>
            <p className="grid-description">
              No single valuation source can precisely determine a classic car’s
              value.
            </p>
          </div>

          <div className="grid-item">
            <img className="check-icon" src={checkIcon} alt="Check icon" />
            <p className="grid-title">Sales Background</p>
            <p className="grid-description">
              70% of classic / antique cars are sold through private party
              sales, 20% through auctions and 10% through dealerships.
            </p>
          </div>
        </GridBlock>
      </Content>
    </div>
  </OffsetGridSection>
)

export default OffsetGrid
