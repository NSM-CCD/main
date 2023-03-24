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
  const legends = useMemo(() => {
    let arr = []
    if (standardPriceArr?.length) {
      arr.push("NADA")
    }
    if (ocwStandardPriceArr?.length) {
      arr.push("OCRPG")
    }
    if (vmrStandardPriceArr?.length) {
      arr.push("VMR")
    }
    return arr
  }, [standardPriceArr, vmrStandardPriceArr, ocwStandardPriceArr])

  const ds = useMemo(() => {
    let arr = []
    let dataNada = [
      labels.map(i =>
        modifiedPriceArr?.length > 0
          ? parseFloat(
              modifiedPriceArr[0][i?.slice(0, 1)]?.replaceAll(",", "")
            ) ?? null
          : standardPriceArr?.length > 0
          ? parseFloat(standardPriceArr[0][i]?.replaceAll(",", ""))
          : null
      ),
    ]
    let dataOcrNew = []
    let dataOcr = labels.map(i =>
      ocwStandardPriceArr?.length > 0
        ? parseFloat(ocwStandardPriceArr[0][i]?.replaceAll(",", ""))
        : null
    )

    let dataVmrNew = []
    let dataVmr = labels.map(i =>
      vmrStandardPriceArr?.length > 0
        ? parseFloat(vmrStandardPriceArr[0][i]?.replaceAll(",", ""))
        : null
    )

    if (legends.length > 2) {
      dataNada.push(null, null)
    } else if (legends.length === 2) {
      dataNada.push(null)
    }

    if (legends.length === 2) {
      if (legends.includes("NADA") && legends.includes("OCRPG")) {
        dataOcrNew.push(null, dataOcr)
      } else if (legends.includes("VMR") && legends.includes("OCRPG")) {
        dataOcrNew.push(dataOcr, null)
      }
    } else if (legends.length > 2) {
      dataOcrNew.push(null, dataOcr, null)
    } else if (legends.length === 1 && legends.includes("OCRPG")) {
      dataOcrNew.push(dataOcr)
    }

    if (legends.length === 2) {
      if (legends.includes("NADA") && legends.includes("VMR")) {
        dataVmrNew.push(null, dataVmr)
      } else if (legends.includes("VMR") && legends.includes("OCRPG")) {
        dataVmrNew.push(null, dataVmr)
      }
    } else if (legends.length > 2) {
      dataVmrNew.push(null, null, dataVmr)
    } else if (legends.length === 1 && legends.includes("VMR")) {
      dataVmrNew.push(dataVmr)
    }

    if (standardPriceArr?.length) {
      arr.push({
        label: "NADA",
        backgroundColor: "#A2312E",
        borderColor: "#b12327",
        borderWidth: 1,
        padding: 10,
        itemRadius: 0,
        data: dataNada,
      })
    }
    if (ocwStandardPriceArr?.length) {
      arr.push({
        label: "OCRPG",
        backgroundColor: "#6C90B3",
        borderColor: "#6291B6",
        borderWidth: 1,
        padding: 10,
        itemRadius: 0,
        data: dataOcrNew,
      })
    }
    if (vmrStandardPriceArr?.length) {
      arr.push({
        label: "VMR",
        backgroundColor: "#88B980",
        borderColor: "#7aba79",
        borderWidth: 1,
        padding: 10,
        itemRadius: 0,
        data: dataVmrNew,
      })
    }

    return arr
  }, [
    labels,
    legends,
    standardPriceArr,
    modifiedPriceArr,
    ocwStandardPriceArr,
    vmrStandardPriceArr,
  ])

  const boxplotData = useMemo(
    () => ({
      // define label tree
      labels: legends,
      datasets: ds,
    }),
    [legends, ds]
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
