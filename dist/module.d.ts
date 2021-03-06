/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { CanvasPanelCtrl } from './canvas-metric';
declare class DiscretePanelCtrl extends CanvasPanelCtrl {
    private $sce;
    static templateUrl: string;
    defaults: {
        display: string;
        rowHeight: number;
        valueMaps: {
            value: string;
            op: string;
            text: string;
        }[];
        mappingTypes: {
            name: string;
            value: number;
        }[];
        rangeMaps: {
            from: string;
            to: string;
            text: string;
        }[];
        colorMaps: {
            text: string;
            color: string;
        }[];
        metricNameColor: string;
        valueTextColor: string;
        backgroundColor: string;
        lineColor: string;
        textSize: number;
        textSizeTime: number;
        extendLastValue: boolean;
        writeLastValue: boolean;
        writeAllValues: boolean;
        writeMetricNames: boolean;
        showLegend: boolean;
        showLegendNames: boolean;
        showLegendValues: boolean;
        showLegendPercent: boolean;
        highlightOnMouseover: boolean;
        legendSortBy: string;
        units: string;
        headerColumnIndent: number;
        topOffset: number;
        additionalColumns: number;
        useLinkOnClick: boolean;
        gotoLink: string;
        gotoLinkToolTip: string;
        openLinkInNewTab: boolean;
        useDisplaySeries: boolean;
        valueMappingForDisplaySeries: boolean;
        valueMappingForExtraColumns: boolean;
        valueMappingForTemplateVars: boolean;
        showTimeAxis: boolean;
    };
    data: any;
    externalPT: boolean;
    isTimeline: boolean;
    hoverPoint: any;
    hoverMetric: any;
    colorMap: any;
    _colorsPaleteCash: any;
    unitFormats: any;
    formatter: any;
    constructor($scope: any, $injector: any, templateSrv: any, $sce: any);
    onDataError(err: any): void;
    onInitEditMode(): void;
    onRender(): void;
    showLegandTooltip(pos: any, info: any): void;
    clearTT(): void;
    formatValue(val: any): any;
    formatValueWithoutMapping(val: any): any;
    getColor(val: any): any;
    randomColor(): string;
    applyPanelTimeOverrides(): void;
    onDataReceived(dataList: any): void;
    removeColorMap(map: any): void;
    updateColorInfo(): void;
    addColorMap(what: any): void;
    removeValueMap(map: any): void;
    addValueMap(): void;
    removeRangeMap(rangeMap: any): void;
    addRangeMap(): void;
    onConfigChanged(update?: boolean): void;
    getLegendDisplay(info: any, metric: any): any;
    showTooltip(evt: any, point: any, isExternal: any): void;
    onGraphHover(evt: any, showTT: any, isExternal: any): void;
    onMouseClicked(where: any): void;
    transformString(text: any): any;
    onMouseSelectedRange(range: any): void;
    clear(): void;
    drawTimeAxis(ctx: any, currentTop: any): void;
    time_format(range: any, secPerTick: any): string;
    getTimeResolution(estTimeInterval: any): number;
    roundDate(timeStamp: any, roundee: any): any;
    formatDate(d: any, fmt: any): any;
    leftPad(n: any, pad: any): any;
}
export { DiscretePanelCtrl as PanelCtrl };
