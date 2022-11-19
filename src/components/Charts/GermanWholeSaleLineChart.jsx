import { ResponsiveLine } from '@nivo/line'

export default function GermanWholeSaleLineChart() {
  const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
    <g>
      <circle
        fill='#fff'
        r={size / 2}
        strokeWidth={borderWidth}
        stroke={borderColor}
      />
      <circle
        r={size / 5}
        strokeWidth={borderWidth}
        stroke={borderColor}
        fill={color}
        fillOpacity={0.35}
      />
    </g>
  )

  const commonProperties = {
    margin: { top: 10, right: 10, bottom: 30, left: 30 },
    animate: true,
    enableSlices: 'x',
    color: 'Set1',
    colors: { scheme: 'set1' },
    enablePointLabel: true,
    pointSymbol: CustomSymbol,
    pointSize: 16,
    pointBorderWidth: 1,
    pointBorderColor: {
      from: 'color',
      modifiers: [['darker', 0.3]],
    },
  }

  return (
    <ResponsiveLine
      {...commonProperties}
      curve='monotoneX'
      data={[
        {
          id: 'wholesale electricity price',
          data: [
            { x: '2019-01-01', y: 50 },
            { x: '2019-03-01', y: 40 },
            { x: '2019-05-01', y: 44 },
            { x: '2019-07-01', y: 39 },
            { x: '2019-09-01', y: 46 },
            { x: '2019-11-01', y: 45 },
            { x: '2020-01-01', y: 49 },
            { x: '2020-03-01', y: 48 },
            { x: '2020-05-01', y: 55 },
            { x: '2020-07-01', y: 68 },
            { x: '2020-09-01', y: 72 },
            { x: '2020-11-01', y: 77 },
            { x: '2021-01-01', y: 88 },
            { x: '2021-03-01', y: 125 },
            { x: '2021-05-01', y: 150 },
            { x: '2021-07-01', y: 202 },
            { x: '2021-09-01', y: 188 },
            { x: '2021-11-01', y: 150 },
            { x: '2022-01-01', y: 177 },
            { x: '2022-03-01', y: 215 },
            { x: '2022-05-01', y: 303 },
            { x: '2022-07-01', y: 460 },
          ],
        },
      ]}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        useUTC: false,
        precision: 'day',
      }}
      xFormat='time:%Y-%m-%d'
      axisLeft={{
        legend: '€',
        legendOffset: 12,
      }}
      axisBottom={{
        format: '%b %d',
        tickValues: 'every 6 months',
        legend: 'Time',
        legendOffset: -12,
      }}
    />
  )
}
