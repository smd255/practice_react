import React from "react";
import { yearDataList, getYearList, getProductNames } from "../pages/table/mock";
import { MatrixTable } from "./MatrixTable";

// 商品名リスト（行ヘッダー）
const rowHeaders = getProductNames(yearDataList);
// 年度リスト（列ヘッダー）
const columnHeaders = getYearList(yearDataList).map((year) => `${year}年`);

// 表データ（商品名×年度の売上）
const data: number[][] = rowHeaders.map((product) =>
  yearDataList.map((yd) => {
    const found = yd.datas.find((d) => d.productName === product);
    return found ? found.sales : 0;
  })
);

// 各年度の売上合計
const totalSalesByYear = yearDataList.map((yd) =>
  yd.datas.reduce((sum, d) => sum + d.sales, 0)
);

// 合計行（フッター）
const footerRow = {
  label: "合計",
  values: totalSalesByYear,
  renderFooterCell: (value: number) => <span className="font-mono text-yellow-900">{value.toLocaleString()}</span>,
};

export const SalesMatrixTable: React.FC = () => (
  <MatrixTable
    title="商品別年度売上表"
    columnHeaders={columnHeaders}
    rowHeaders={rowHeaders}
    data={data}
    renderCell={(value) => <span className="font-mono">{value.toLocaleString()}</span>}
    footerRow={footerRow}
  />
);
