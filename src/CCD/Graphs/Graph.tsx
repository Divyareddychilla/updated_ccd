import React from 'react';
import { BarChart, ChartsLegend, Gauge, LineChart, ScatterChart } from '@mui/x-charts';
import { gaugeClasses } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

type XAxisConfig = { scaleType: 'band' | 'point'; data: string[]; min?: number; max?: number };

//two Axes graph

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
type ScaleType = 'band' | 'point' | 'linear' | 'log' | 'pow' | 'sqrt' | 'time' | 'utc';

interface XAxisConfigtwoAxex {
    scaleType: ScaleType;
    dataKey: string;
    label: string;
    reverse?: boolean;
}

interface YAxisConfig {
    id: string;
    reverse?: boolean;
    position?: 'left' | 'right';
    label?: string;
}

type GraphProps = {
    type: 'bar' | 'line' | 'pie' | 'scatter' | 'sparkline' | 'gauge' | 'speedometer' | 'stackedbar' | 'twoAxes';
    xAxis?: XAxisConfig[];
    yAxis?: { label: string }[];
    series?: { data: number[]; label?: string }[];
    data?: { [key: string]: any }[];
    width?: number;
    height?: number;
    grid?: { vertical: boolean; horizontal: boolean };
    borderRadius?: number;
    area?: boolean;

    //piechart
    pieData?: { id: number; value: number; label: string }[];
    innerRadius?: number;
    outerRadius?: number;
    paddingAngle?: number;
    cornerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    cx?: number;
    cy?: number;
    //scatterdata
    scatterData?: { id: string; x: number; y: number; label?: string }[];
    //sparkline
    sparklineData?: number[];
    sparklineSettings?: any;
    plotType?: 'bar';
    sparklineColors?: string[];

    //gauge
    gaugeValue?: number;
    gaugeStartAngle?: number;
    gaugeEndAngle?: number;
    gaugeInnerRadius?: string;
    gaugeOuterRadius?: string;
    gaugeFontSize?: number;
    gaugeValueFill?: string;
    gaugeReferenceFill?: string;
    value?: number;
    //stacked bar graph
    stackedSeries?: { data: number[]; label?: string; stack?: string }[];
    //two axes graph
    seriesConfig?: SeriesType[];
    xAxisConfig?: XAxisConfigtwoAxex[];
    yAxisConfig?: YAxisConfig[];
    dataset?: Array<{ [key: string]: number | string }>;


    //label,axis line color
    labelsColor?: string
    axisLineColor?: string
    tickLabelColor?: string
    tickColor?: string
    legendColor?: string
    gridColor?: string
};

function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {

        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="red"
                strokeWidth={3}
            />
        </g>
    );
}

const Graph: React.FC<GraphProps> = ({
    type,
    xAxis,
    yAxis,
    series,
    width = 500,
    height = 300,
    grid,
    borderRadius,
    area = false,
    pieData,
    innerRadius,
    outerRadius,
    paddingAngle,
    cornerRadius,
    startAngle,
    endAngle,
    cx,
    cy,
    scatterData,
    sparklineData,
    sparklineSettings,
    plotType,
    sparklineColors,
    gaugeValue,
    gaugeStartAngle,
    gaugeEndAngle,
    gaugeInnerRadius,
    gaugeOuterRadius,
    gaugeFontSize,
    gaugeValueFill,
    gaugeReferenceFill,
    value,
    stackedSeries,
    seriesConfig = [],
    xAxisConfig,
    yAxisConfig = [],
    dataset,

    labelsColor,
    axisLineColor,
    tickLabelColor,
    tickColor,
    legendColor,
    gridColor
}) => {
    const renderChart = () => {
        switch (type) {
            case 'bar':
                return (
                    <BarChart

                        xAxis={xAxis}
                        series={series || []}
                        width={width}
                        height={height}
                        grid={grid}
                        borderRadius={borderRadius}
                        barLabel="value"
                        yAxis={yAxis}
                        sx={{
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
                                fill: labelsColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line': {
                                stroke: axisLineColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                                fill: tickLabelColor
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tick ': {
                                stroke: tickColor
                            },
                            '& .css-195sd4n-MuiChartsGrid-line ': {
                                stroke: gridColor
                            }
                        }}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: legendColor,
                                },
                            },
                        }}
                    />
                );
            case 'line':
                return (
                    <LineChart
                        xAxis={xAxis}
                        series={series?.map((s) => ({
                            ...s,
                            area,
                        })) || []}
                        width={width}
                        height={height}
                        grid={grid}
                        yAxis={yAxis}
                        sx={{
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
                                fill: labelsColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line': {
                                stroke: axisLineColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                                fill: tickLabelColor
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tick ': {
                                stroke: tickColor
                            },
                            '& .css-195sd4n-MuiChartsGrid-line ': {
                                stroke: gridColor
                            }
                        }}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: legendColor,
                                },
                            },
                        }}
                    />
                );
            case 'pie':
                return (
                    <PieChart
                        series={[
                            {
                                data: pieData || [],
                                innerRadius,
                                outerRadius,
                                paddingAngle,
                                cornerRadius,
                                startAngle,
                                endAngle,
                                cx,
                                cy,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        width={width}
                        height={height}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: legendColor,
                                },
                            },
                        }}
                    />
                );
            case 'scatter':
                return (
                    <ScatterChart
                        xAxis={xAxis}
                        series={[
                            {
                                data: scatterData || [],
                                label: 'Scatter Data',
                            },
                        ]}
                        grid={grid}
                        width={width}
                        height={height}
                        yAxis={yAxis}
                        sx={{
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
                                fill: labelsColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line': {
                                stroke: axisLineColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                                fill: tickLabelColor
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tick ': {
                                stroke: tickColor
                            },
                            '& .css-195sd4n-MuiChartsGrid-line ': {
                                stroke: gridColor
                            }
                        }}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: legendColor,
                                },
                            },
                        }}
                    />
                );
            case 'sparkline':
                return (
                    <SparkLineChart
                        data={sparklineData || []}
                        {...sparklineSettings}
                        width={width}
                        height={height}
                        plotType={plotType}
                        colors={sparklineColors}
                    />
                );
            case 'gauge':
                return (
                    <Gauge
                        value={gaugeValue || 0}
                        startAngle={gaugeStartAngle || 0}
                        endAngle={gaugeEndAngle || 180}
                        innerRadius={gaugeInnerRadius || '50%'}
                        outerRadius={gaugeOuterRadius || '90%'}
                        width={width}
                        height={height}
                        sx={(theme) => ({
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: gaugeFontSize || 40,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: gaugeValueFill || '#52b202',
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: gaugeReferenceFill || theme.palette.text.disabled,
                            },
                        })}
                    />
                );
            case 'speedometer':
                return (
                    <GaugeContainer
                        width={width}
                        height={height}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        value={value}
                    >
                        <GaugeReferenceArc />
                        <GaugeValueArc />
                        <GaugePointer />
                    </GaugeContainer>
                );
            case 'stackedbar':
                return (
                    <BarChart
                        series={stackedSeries || []}
                        xAxis={xAxis}
                        width={width}
                        height={height}
                        grid={grid}
                        barLabel="value"
                        yAxis={yAxis}
                        sx={{
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
                                fill: labelsColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line': {
                                stroke: axisLineColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                                fill: tickLabelColor
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tick ': {
                                stroke: tickColor
                            },
                            '& .css-195sd4n-MuiChartsGrid-line ': {
                                stroke: gridColor
                            }
                        }}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: legendColor,
                                },
                            },
                        }}
                    />
                );
            case 'twoAxes':
                return (
                    <ResponsiveChartContainer
                        series={seriesConfig}
                        xAxis={xAxisConfig}
                        yAxis={yAxisConfig}
                        dataset={dataset}
                        height={height}
                        sx={{
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
                                fill: labelsColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line': {
                                stroke: axisLineColor,
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                                fill: tickLabelColor
                            },
                            '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tick ': {
                                stroke: tickColor
                            },
                            '& .css-195sd4n-MuiChartsGrid-line ': {
                                stroke: gridColor
                            }
                        }}


                    >

                        <ChartsGrid horizontal vertical />
                        <BarPlot />
                        <LinePlot />
                        <MarkPlot />
                        <ChartsXAxis />
                        {yAxisConfig.map((axis) => (
                            <ChartsYAxis
                                key={axis.id}
                                axisId={axis.id}
                                position={axis.position}
                                label={axis.label}
                            />
                        ))}
                        <ChartsTooltip />
                        <ChartsLegend />
                    </ResponsiveChartContainer>
                );
            default:
                return null;
        }
    };

    return <div>{renderChart()}</div>;
};

export default Graph

