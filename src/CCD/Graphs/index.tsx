import { useEffect, useState } from 'react';
import Graph from './Graph';
import { Grid } from '@mui/material';

function Graphs() {
  const [graphWidth, setGraphWidth] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setGraphWidth(window.innerWidth - 20);
      } else {
        setGraphWidth(600);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const xAxis = [{ scaleType: 'band', data: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], label: 'Cat Label' }];
  const yAxis = [{ id: 'leftAxis', label: 'rainfall (mm)' }];

  //for bar series
  const series = [
    { data: [1, 5, 9, 13], label: 'Category 1', color: '#ff0050' },
    { data: [2, 6, 10, 14], label: 'Category 2', color: '#d0ff00' },
    { data: [3, 7, 11, 15], label: 'Category 3', color: '#0050ff' },
    { data: [4, 8, 12, 16], label: 'Category 4', color: '#ffff70' },
  ];

  //for line series
  const stackedSeriesLine = [
    { data: [13, 14, 15, 16], label: 'Category 1', color: '#ff0050' },
    { data: [9, 10, 11, 12], label: 'Category 2', color: '#d0ff00' },
    { data: [5, 6, 7, 8], label: 'Category 3', color: '#0050ff' },
    { data: [1, 2, 3, 4], label: 'Category 4', color: '#ffff70' },
  ];

  //for piedata

  const pieData = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  //for scatterData
  const scatterData = [
    { id: 'data-0', x: 329.39, y: 443.28 },
    { id: 'data-1', x: 96.94, y: 110.5 },
    { id: 'data-2', x: 336.35, y: 175.23 },

  ];

  ///for sparklinebardata
  const smallValues = [0, 4, 3, 4, 6, 8, 7, 9, 2, 6, 8, 7, 12];
  const settings = {
    valueFormatter: (v: number | null) => `${v}%`,
    height: 100,
    showTooltip: true,
    showHighlight: true,
  };


  //for stackedbardata
  const seriesStacked = [
    { data: [10, 3, 5] },
    { data: [1, 6, 3] },
    { data: [2, 5, 6] },
    { data: [4, 7, 8] },
  ];

  const stackedSeries = [
    { data: seriesStacked.map((item) => item.data[0]), label: 'Series A', stack: 'total', color: '#ff0050' },
    { data: seriesStacked.map((item) => item.data[1]), label: 'Series B', stack: 'total', color: '#d0ff00' },
    { data: seriesStacked.map((item) => item.data[2]), label: 'Series C', stack: 'total', color: '#0050ff' },
  ];


  //for two axes line and bar 
  const dataset = [
    { min: -12, max: -4, minv: 3, precip: 79, month: 'Jan' },
    { min: -11, max: -3, minv: 2, precip: 66, month: 'Feb' },
    { min: -6, max: 2, minv: 6, precip: 76, month: 'Mar' },
    { min: 1, max: 9, minv: 8, precip: 106, month: 'Apr' },
    { min: 8, max: 17, minv: 10, precip: 105, month: 'May' },
    { min: 15, max: 24, minv: 15, precip: 114, month: 'Jun' },
    { min: 18, max: 26, minv: 2, precip: 106, month: 'Jul' },
    { min: 17, max: 26, minv: 13, precip: 105, month: 'Aug' },
    { min: 13, max: 21, minv: 11, precip: 100, month: 'Sept' },
    { min: 6, max: 13, minv: 16, precip: 116, month: 'Oct' },
    { min: 0, max: 6, minv: 9, precip: 93, month: 'Nov' },
    { min: -8, max: -1, minv: 5, precip: 93, month: 'Dec' },
  ];


  type LineSeriesType = {
    type: 'line';
    dataKey: string;
    color: string;
    yAxisKey?: string;
    label?: string;
  };

  type BarSeriesType = {
    type: 'bar';
    dataKey: string;
    color: string;
    yAxisKey?: string;
    label?: string;
  };

  type SeriesType = LineSeriesType | BarSeriesType;

  const seriesConfig: SeriesType[] = [
    { type: 'line', dataKey: 'min', color: '#577399', label: 'min' },
    { type: 'line', dataKey: 'max', color: '#fe5f55', label: 'max' },
    { type: 'bar', dataKey: 'minv', color: '#f75f95', yAxisKey: 'rightAxis', label: 'minv' },
    { type: 'bar', dataKey: 'precip', color: '#bf6bf7', yAxisKey: 'rightAxis', label: 'precip' },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Graph

            type="bar"
            xAxis={xAxis as { scaleType: 'band'; data: string[] }[]}
            series={series}
            width={graphWidth}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            borderRadius={7}
            yAxis={yAxis}
            labelsColor="black"
            axisLineColor="black"
            tickLabelColor="black"
            tickColor="black"
            legendColor="black"
            gridColor="black"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="line"
            xAxis={xAxis as { scaleType: 'band'; data: string[] }[]}
            yAxis={yAxis}
            series={stackedSeriesLine}
            width={graphWidth}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            area={false}
            labelsColor="black"
            axisLineColor="black"
            tickLabelColor="black"
            tickColor="black"
            legendColor="black"
            gridColor="black"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="pie"
            pieData={pieData}
            width={graphWidth}
            height={300}
            innerRadius={30}
            outerRadius={100}
            paddingAngle={5}
            cornerRadius={5}
            startAngle={-90}
            endAngle={180}
            cx={152}
            cy={150}
            legendColor="blue"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="scatter"
            scatterData={scatterData}
            width={graphWidth}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            labelsColor="black"
            axisLineColor="black"
            tickLabelColor="black"
            tickColor="black"
            legendColor="black"
            gridColor="black"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="sparkline"
            sparklineData={smallValues}
            sparklineSettings={settings}
            plotType="bar"
            sparklineColors={['purple']}
            width={graphWidth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="gauge"
            gaugeValue={46}
            gaugeStartAngle={20}
            gaugeEndAngle={292}
            gaugeInnerRadius="48%"
            gaugeOuterRadius="80%"
            width={graphWidth}
            height={300}
            gaugeFontSize={40}
            gaugeValueFill="blue"
            gaugeReferenceFill="grey"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="speedometer"
            width={graphWidth}
            height={300}
            startAngle={-110}
            endAngle={110}
            value={50}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type="stackedbar"
            stackedSeries={stackedSeries}
            width={graphWidth}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            xAxis={xAxis as { scaleType: 'band'; data: string[] }[]}
            yAxis={yAxis}
            labelsColor="black"
            axisLineColor="black"
            tickLabelColor="black"
            tickColor="black"
            legendColor="black"
            gridColor="black"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph
            type='twoAxes'
            seriesConfig={seriesConfig}
            xAxisConfig={[{ scaleType: 'band', dataKey: 'month', label: 'Month' }]}
            yAxisConfig={[
              { id: 'leftAxis', label: 'temperature (°C)' },
              { id: 'rightAxis', position: 'right', label: 'precipitation (mm)' },
            ]}
            dataset={dataset}
            width={graphWidth}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            labelsColor="red"
            axisLineColor="red"
            tickLabelColor="red"
            tickColor="red"
            gridColor="grey"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Graphs;
