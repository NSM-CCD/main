import React, { useCallback, useContext, useEffect, useMemo } from "react"
import Chart from "react-apexcharts"
import { ACIContext } from "../../../contexts/ACIContext"

const ValuationChart = () => {
  const { modifiedPrice, ocwStandardPrice, vmrStandardPrice } =
    useContext(ACIContext)

  console.log(modifiedPrice, "modified")
  console.log(ocwStandardPrice, "ocw")
  console.log(vmrStandardPrice, "vmr")

  const options = useMemo(
    () => ({
      chart: {
        id: "Car Values",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        show: true,
        showForNullSeries: false,
        tickAmount: 3,
        min: -1,
        max: 3,
        labels: {
          rotate: -45,
          offsetX: 5,
          formatter: function (val) {
            if (val === 2) {
              return "OCRPG"
            } else if (val === 1) {
              return "VMR"
            } else {
              return ""
            }
          },
        },
      },
      xaxis: {
        type: "numeric",
        labels: {
          formatter: function (val) {
            console.log(val, "there")
            return (
              "$" + val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            )
          },
        },
      },
    }),
    []
  )

  console.log(options, "options")

  const series = useMemo(
    () => [
      {
        name: "NADA",
        color: "#b12327",
        data: modifiedPrice,
      },
      {
        name: "OCRPG",
        color: "#6291B6",
        data: ocwStandardPrice,
      },
      {
        name: "VMR",
        color: "#7aba79",
        data: vmrStandardPrice,
      },
    ],
    [modifiedPrice, ocwStandardPrice, vmrStandardPrice]
  )

  console.log(series, "initial")

  const yaxis = useCallback(() => {
    options.yaxis = {
      show: true,
      showForNullSeries: false,
      tickAmount: 2,
      min: 2,
      max: 4,
      labels: {
        rotate: -45,
        offsetX: 5,
        formatter: function (val) {
          if (val == 3) {
            return "NADA"
          } else {
            return ""
          }
        },
      },
    }
  }, [options])

  const yaxisOCW = useCallback(() => {
    options.yaxis = {
      show: true,
      showForNullSeries: false,
      tickAmount: 3,
      min: 0,
      max: 3,
      labels: {
        rotate: -45,
        offsetX: 5,
        formatter: function (val) {
          if (val == 2) {
            return "NADA"
          } else if (val == 1) {
            return "OCRPG"
          } else {
            return ""
          }
        },
      },
    }
  }, [options])

  const yaxisVMR = useCallback(() => {
    options.yaxis = {
      show: true,
      showForNullSeries: false,
      tickAmount: 3,
      min: 0,
      max: 3,
      labels: {
        rotate: -45,
        offsetX: 5,
        formatter: function (val) {
          if (val == 2) {
            return "NADA"
          } else if (val == 1) {
            return "VMR"
          } else {
            return ""
          }
        },
      },
    }
  }, [options])

  const yaxisOCWVMR = useCallback(() => {
    options.yaxis = {
      show: true,
      showForNullSeries: false,
      tickAmount: 4,
      min: 0,
      max: 4,
      labels: {
        rotate: -45,
        offsetX: 5,
        formatter: function (val) {
          if (val == 3) {
            return "NADA"
          } else if (val == 2) {
            return "OCRPG"
          } else if (val == 1) {
            return "VMR"
          } else {
            return ""
          }
        },
      },
    }
  }, [options])

  const fillData = useCallback(() => {
    if (ocwStandardPrice.length === 0 && vmrStandardPrice.length === 0) {
      series[0].data = [
        [modifiedPrice[0], 3],
        [modifiedPrice[1], 3],
        [modifiedPrice[2], 3],
      ]
      series[1].data = []
      series[2].data = []
      yaxis()
    } else if (ocwStandardPrice.length > 0 && vmrStandardPrice.length === 0) {
      console.log("im here")
      series[0].data = [
        [modifiedPrice[0], 2],
        [modifiedPrice[1], 2],
        [modifiedPrice[2], 2],
      ]
      series[1].data = [
        [ocwStandardPrice[0], 1],
        [ocwStandardPrice[1], 1],
        [ocwStandardPrice[2], 1],
        [ocwStandardPrice[3], 1],
        [ocwStandardPrice[4], 1],
      ]
      series[2].data = []
      yaxisOCW()
    } else if (ocwStandardPrice.length === 0 && vmrStandardPrice.length === 4) {
      console.log("yes here")
      series[0].data = [
        [modifiedPrice[0], 2],
        [modifiedPrice[1], 2],
        [modifiedPrice[2], 2],
      ]
      series[1].data = []
      series[2].data = [
        [vmrStandardPrice[0], 1],
        [vmrStandardPrice[1], 1],
        [vmrStandardPrice[2], 1],
        [vmrStandardPrice[3], 1],
      ]
      yaxisVMR()
    } else if (ocwStandardPrice.length === 0 && vmrStandardPrice.length === 5) {
      console.log("im the original")
      series[0].data = [
        [modifiedPrice[0], 2],
        [modifiedPrice[1], 2],
        [modifiedPrice[2], 2],
      ]
      series[1].data = []
      series[2].data = [
        [vmrStandardPrice[0], 1],
        [vmrStandardPrice[1], 1],
        [vmrStandardPrice[2], 1],
        [vmrStandardPrice[3], 1],
        [vmrStandardPrice[4], 1],
      ]
      yaxisVMR()
    } else if (ocwStandardPrice.length > 0 && vmrStandardPrice.length === 4) {
      console.log("no way")
      series[0].data = [
        [modifiedPrice[0], 3],
        [modifiedPrice[1], 3],
        [modifiedPrice[2], 3],
      ]
      series[1].data = [
        [ocwStandardPrice[0], 2],
        [ocwStandardPrice[1], 2],
        [ocwStandardPrice[2], 2],
        [ocwStandardPrice[3], 2],
        [ocwStandardPrice[4], 2],
      ]
      series[2].data = [
        [vmrStandardPrice[0], 1],
        [vmrStandardPrice[1], 1],
        [vmrStandardPrice[2], 1],
        [vmrStandardPrice[3], 1],
      ]
      yaxisOCWVMR()
    } else if (ocwStandardPrice.length > 0 && vmrStandardPrice.length === 5) {
      console.log("of course")
      series[0].data = [
        [modifiedPrice[0], 3],
        [modifiedPrice[1], 3],
        [modifiedPrice[2], 3],
      ]
      series[1].data = [
        [ocwStandardPrice[0], 2],
        [ocwStandardPrice[1], 2],
        [ocwStandardPrice[2], 2],
        [ocwStandardPrice[3], 2],
        [ocwStandardPrice[4], 2],
      ]
      series[2].data = [
        [vmrStandardPrice[0], 1],
        [vmrStandardPrice[1], 1],
        [vmrStandardPrice[2], 1],
        [vmrStandardPrice[3], 1],
        [vmrStandardPrice[4], 1],
      ]
      yaxisOCWVMR()
    }
  }, [
    series,
    yaxis,
    yaxisOCW,
    yaxisVMR,
    yaxisOCWVMR,
    modifiedPrice,
    ocwStandardPrice,
    vmrStandardPrice,
  ])

  console.log(series, "updated")

  const chartSizer = () => {
    if (window.screen.width > 1000) {
      return 700
    } else {
      return window.screen.width * 0.75
    }
  }

  useEffect(() => {
    fillData()
  }, [fillData, modifiedPrice])

  return (
    <div className="d-flex justify-content-center">
      <Chart options={options} series={series} width={chartSizer()} />
    </div>
  )
}

export default ValuationChart
