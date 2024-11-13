"use client"

import * as React from "react"
import { AxisBottom, AxisLeft } from "@visx/axis"
import { Grid } from "@visx/grid"
import { Group } from "@visx/group"
import { scaleBand, scaleLinear } from "@visx/scale"
import { Bar } from "@visx/shape"
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip"

// Define the data shape
type ChartData = {
  date: string
  value: number
}

// ChartContainer props
type ChartContainerProps = {
  children: React.ReactNode
  config: {
    [key: string]: {
      label: string
      color: string
    }
  }
  className?: string
}

// Chart props
type ChartProps = {
  data: ChartData[]
  width: number
  height: number
}

// Tooltip props
type TooltipData = {
  date: string
  value: number
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, config, className }) => {
  return (
    <div className={className}>
      {children}
      <div className="flex items-center justify-center mt-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }} />
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Chart: React.FC<ChartProps> = ({ data, width, height }) => {
  const margin = { top: 20, right: 20, bottom: 40, left: 40 }
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map((d) => d.date),
    padding: 0.4,
  })

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map((d) => d.value))],
  })

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<TooltipData>()

  const { TooltipInPortal } = useTooltipInPortal({
    scroll: true,
    detectBounds: true,
  })

  return (
    <>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax}
            stroke="#e0e0e0"
            strokeOpacity={0.1}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickLabelProps={() => ({
              fill: "#888888",
              fontSize: 11,
              textAnchor: "middle",
            })}
          />
          <AxisLeft
            scale={yScale}
            tickLabelProps={() => ({
              fill: "#888888",
              fontSize: 11,
              textAnchor: "end",
              dy: "0.33em",
            })}
          />
          {data.map((d) => {
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(d.value) ?? 0)
            const barX = xScale(d.date)
            const barY = yMax - barHeight
            return (
              <Bar
                key={`bar-${d.date}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(23, 233, 217, 1)"
                onMouseLeave={() => hideTooltip()}
                onMouseMove={() => {
                  const top = barY
                  const left = (barX ?? 0) + barWidth / 2
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: top,
                    tooltipLeft: left,
                  })
                }}
              />
            )
          })}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            ...defaultStyles,
            background: "rgba(0,0,0,0.9)",
            padding: "0.5rem",
            border: "1px solid white",
          }}
        >
          <div className="text-white">
            <strong>{tooltipData.date}</strong>
            <div>{tooltipData.value.toFixed(2)}</div>
          </div>
        </TooltipInPortal>
      )}
    </>
  )
}

export const ChartTooltip: React.FC = () => null