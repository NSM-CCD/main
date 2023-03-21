import React, { useContext, useEffect, useMemo } from "react"
import { Chart, Tooltip, LinearScale, CategoryScale } from "chart.js"
import {
  BoxPlotController,
  BoxAndWiskers,
} from "@sgratzl/chartjs-chart-boxplot"
import { ACIContext } from "../../../contexts/ACIContext"

// register controller in chart.js and ensure the defaults are set
Chart.register(
  BoxPlotController,
  BoxAndWiskers,
  LinearScale,
  CategoryScale,
  Tooltip
)

const ValuationChart = () => {
  const {
    standardPriceArr,
    ocwStandardPriceArr,
    vmrStandardPriceArr,
    modifiedPriceArr,
  } = useContext(ACIContext)

  const labels = useMemo(() => ["low", "midavg", "avg", "midhavg", "high"], [])
  const legends = []

  const boxplotData = useMemo(
    () => ({
      // define label tree
      labels: ["NADA", "OCRPG", "VMR"],
      datasets: [
        {
          label: "NADA",
          backgroundColor: "#A2312E",
          borderColor: "#b12327",
          borderWidth: 1,
          padding: 10,
          itemRadius: 0,
          data: [
            labels.map(i =>
              modifiedPriceArr?.length > 0
                ? parseFloat(
                    modifiedPriceArr[0][i?.slice(0, 1)]?.replaceAll(",", "")
                  ) ?? null
                : standardPriceArr?.length > 0
                ? parseFloat(standardPriceArr[0][i]?.replaceAll(",", ""))
                : null
            ),
            null,
            null,
          ],
        },
        {
          label: "OCRPG",
          backgroundColor: "#6C90B3",
          borderColor: "#6291B6",
          borderWidth: 1,
          padding: 10,
          itemRadius: 0,
          data: [
            null,
            labels.map(i =>
              ocwStandardPriceArr?.length > 0
                ? parseFloat(ocwStandardPriceArr[0][i]?.replaceAll(",", ""))
                : null
            ),
            null,
          ],
        },
        {
          label: "VMR",
          backgroundColor: "#88B980",
          borderColor: "#7aba79",
          borderWidth: 1,
          padding: 10,
          itemRadius: 0,
          data: [
            null,
            null,
            labels.map(i =>
              vmrStandardPriceArr?.length > 0
                ? parseFloat(vmrStandardPriceArr[0][i]?.replaceAll(",", ""))
                : null
            ),
          ],
        },
      ],
    }),
    [labels, standardPriceArr, ocwStandardPriceArr, vmrStandardPriceArr]
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = document.getElementById("canvas").getContext("2d")
      window.myBar = new Chart(ctx, {
        type: "boxplot",
        data: boxplotData,
        options: {
          responsive: true,
          legend: {
            position: "top",
          },
        },
      })
    }
  }, [])

  return <canvas id="canvas" />
}

export default ValuationChart
