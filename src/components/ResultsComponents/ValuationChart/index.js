import React, { useContext, useMemo } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { ACIContext } from "../../../contexts/ACIContext"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CarValuesChart = () => {
  const {
    standardPriceArr,
    ocwStandardPriceArr,
    vmrStandardPriceArr,
    modifiedPriceArr,
  } = useContext(ACIContext)

  const options = {
    indexAxis: "y",
    beginAtZero: true,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
    },
  }

  const labels = useMemo(() => ["low", "midavg", "avg", "midhavg", "high"], [])
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "NADA",
          data: labels.map(i =>
            modifiedPriceArr?.length > 0
              ? parseFloat(
                  modifiedPriceArr[0][i?.slice(0, 1)]?.replaceAll(",", "")
                ) ?? null
              : standardPriceArr?.length > 0
              ? parseFloat(standardPriceArr[0][i]?.replaceAll(",", ""))
              : null
          ),
          backgroundColor: "#b12327",
        },
        {
          label: "OCRPG",
          data: labels.map(i =>
            ocwStandardPriceArr?.length > 0
              ? parseFloat(ocwStandardPriceArr[0][i]?.replaceAll(",", ""))
              : null
          ),
          backgroundColor: "#6291B6",
        },
        {
          label: "VMR",
          data: labels.map(i =>
            vmrStandardPriceArr?.length > 0
              ? parseFloat(vmrStandardPriceArr[0][i]?.replaceAll(",", ""))
              : null
          ),
          backgroundColor: "#7aba79",
        },
      ],
    }),
    [
      labels,
      ocwStandardPriceArr,
      standardPriceArr,
      modifiedPriceArr,
      vmrStandardPriceArr,
    ]
  )

  return (
    <div className="container valuation-chart bg-white">
      <Bar options={options} data={data} />
    </div>
  )
}

export default CarValuesChart
