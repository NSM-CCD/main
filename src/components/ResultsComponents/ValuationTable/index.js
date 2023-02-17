import React, { useContext } from "react"
import { ACIContext } from "../../../contexts/ACIContext"
import { TableMain } from "./valuationtable.styled"

const ValuationTable = () => {
  const {
    standardPriceArr,
    ocwStandardPriceArr,
    vmrStandardPriceArr,
    selectedOptions,
    optionMods,
    modifiedPriceArr,
  } = useContext(ACIContext)

  return (
    <TableMain>
      {standardPriceArr?.length > 0 && (
        <table id="nada" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Source</th>
              {selectedOptions?.length > 0 && <th>Features</th>}
              <th>Low</th>
              <th>Avg</th>
              <th>High</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NADA</td>
              {optionMods?.length > 0 && <td></td>}
              <td>${standardPriceArr[0]?.low}</td>
              <td>${standardPriceArr[0]?.avg}</td>
              <td>${standardPriceArr[0]?.high}</td>
            </tr>
            {optionMods?.map(item => (
              <tr key={item?.id}>
                <td></td>
                {optionMods?.length > 0 && <td>{item.description}</td>}
                <td>{item.vLd}</td>
                <td>{item.vAd}</td>
                <td>{item.vHd}</td>
              </tr>
            ))}
            {modifiedPriceArr?.map(item => (
              <tr key={item.id}>
                <td>{item.desc}</td>
                {optionMods?.length > 0 && <td></td>}
                <td>${item.l}</td>
                <td>${item.a}</td>
                <td>${item.h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {ocwStandardPriceArr?.length > 0 && (
        <table id="ocw" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Source</th>
              <th>5: Low</th>
              <th>4: Mid-low</th>
              <th>3: Avg</th>
              <th>2: Mid-high</th>
              <th>1: High</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OCRPG</td>
              <td>${ocwStandardPriceArr[0]?.low}</td>
              <td>${ocwStandardPriceArr[0]?.midavg}</td>
              <td>${ocwStandardPriceArr[0]?.avg}</td>
              <td>${ocwStandardPriceArr[0]?.midhavg}</td>
              <td>${ocwStandardPriceArr[0]?.high}</td>
            </tr>
          </tbody>
        </table>
      )}

      {vmrStandardPriceArr?.length > 0 && (
        <table id="vmr" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Source</th>
              <th>{vmrStandardPriceArr[0]?.avg !== null ? "5" : "4"}: Low</th>
              <th>
                {vmrStandardPriceArr[0]?.avg !== null ? "4" : "3"}: Mid-low
              </th>
              {vmrStandardPriceArr[0]?.avg !== null && <th>3: Avg</th>}
              <th>2: Mid-high</th>
              <th>1: High</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VMR</td>
              <td>${vmrStandardPriceArr[0]?.low}</td>
              <td>${vmrStandardPriceArr[0]?.midavg}</td>
              {vmrStandardPriceArr[0]?.avg !== null && (
                <td>${vmrStandardPriceArr[0]?.avg}</td>
              )}
              <td>${vmrStandardPriceArr[0]?.midhavg}</td>
              <td>${vmrStandardPriceArr[0]?.high}</td>
            </tr>
          </tbody>
        </table>
      )}
    </TableMain>
  )
}

export default ValuationTable
