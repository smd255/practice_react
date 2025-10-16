import React from 'react';


/**
 * 汎用マトリクス表のプロパティ型定義
 * @template T セルの値の型
 * @property {string} title 表のタイトル
 * @property {string[]} columnHeaders 列ヘッダー（上部）
 * @property {string[]} rowHeaders 行ヘッダー（左側）
 * @property {T[][]} data 表示するデータ（2次元配列）
 * @property {(value: T, rowIndex: number, colIndex: number) => React.ReactNode} renderCell セル描画関数
 * @property {boolean} [loading] ローディング中表示フラグ
 * @property {string} [className] 追加CSSクラス
 * @property {string} [emptyMessage] データが空の場合の表示メッセージ
 */

// 汎用マトリクス表のプロパティ型定義
interface MatrixTableProps<T> {
  title: string;
  columnHeaders: string[];
  rowHeaders: string[];
  data: T[][];
  renderCell: (value: T, rowIndex: number, colIndex: number) => React.ReactNode;
  loading?: boolean;
  className?: string;
  emptyMessage?: string;
    // フッター行（例：合計）
    footerRow?: {
      label: string;
      values: T[];
      renderFooterCell?: (value: T, colIndex: number) => React.ReactNode;
    };
}

/**
 * 汎用マトリクス表コンポーネント
 * @template T セルの値の型
 * @param {MatrixTableProps<T>} props コンポーネントのプロパティ
 * @returns {JSX.Element} マトリクス表のJSX
 */
export function MatrixTable<T>({
  title,
  columnHeaders,
  rowHeaders,
  data,
  renderCell,
  loading = false,
  className = '',
  emptyMessage = 'データがありません',
  footerRow = undefined
}: MatrixTableProps<T>) {
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">データを読み込み中...</p>
        </div>
      </div>
    );
  }

  if (data.length === 0 || columnHeaders.length === 0 || rowHeaders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-4">📊</div>
          <p className="text-lg">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* タイトル */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
        <h2 className="text-2xl font-bold text-white text-center">
          {title}
        </h2>
      </div>

      {/* 表 */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
              {/* 左上の空セル */}
              <th className="px-4 py-3 text-left text-sm font-semibold border-r border-gray-200 sticky left-0 z-10
                bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-800">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide font-bold flex items-center space-x-1">
                    <span>📋</span>
                    <span>項目</span>
                  </div>
                </div>
              </th>
              
              {/* 列ヘッダー */}
              {columnHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-center text-sm font-semibold border-r border-gray-200 last:border-r-0 whitespace-nowrap
                    bg-gradient-to-b from-blue-100 to-blue-200 text-blue-800"
                >
                  <span className="font-bold">{header}</span>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200">
            {rowHeaders.map((rowHeader, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-blue-50 transition-colors"
              >
                {/* 行ヘッダー */}
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-gray-200 sticky left-0 z-10 whitespace-nowrap
                  bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800">
                  <span className="font-bold">{rowHeader}</span>
                </th>
                
                {/* データセル */}
                {columnHeaders.map((_, colIndex) => {
                  // チェッカーボード模様の背景色を設定
                  const isEvenRow = rowIndex % 2 === 0;
                  const isEvenCol = colIndex % 2 === 0;
                  let bgColor = '';
                  
                  if (isEvenRow && isEvenCol) {
                    bgColor = 'bg-blue-100';
                  } else if (isEvenRow && !isEvenCol) {
                    bgColor = 'bg-indigo-100';
                  } else if (!isEvenRow && isEvenCol) {
                    bgColor = 'bg-purple-100';
                  } else {
                    bgColor = 'bg-gray-100';
                  }
                  
                  return (
                    <td
                      key={colIndex}
                      className={`px-4 py-3 text-center border-r border-gray-200 last:border-r-0 
                        ${bgColor} hover:bg-yellow-100 transition-colors duration-200`}
                    >
                      {data[rowIndex] && data[rowIndex][colIndex] !== undefined
                        ? renderCell(data[rowIndex][colIndex], rowIndex, colIndex)
                        : <span className="text-gray-400">-</span>
                      }
                    </td>
                  );
                })}
              </tr>
            ))}
              {/* フッター行（合計など） */}
              {footerRow && (
                <tr className="bg-gradient-to-r from-yellow-100 to-yellow-200">
                  <th className="px-4 py-3 text-left text-sm font-bold border-r border-gray-200 sticky left-0 z-10 whitespace-nowrap text-yellow-800">
                    {footerRow.label}
                  </th>
                  {footerRow.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-3 text-center border-r border-gray-200 last:border-r-0 font-bold text-yellow-900"
                    >
                      {footerRow.renderFooterCell
                        ? footerRow.renderFooterCell(value, colIndex)
                        : String(value)}
                    </td>
                  ))}
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * 簡単な数値マトリクス表のヘルパーコンポーネント用プロパティ型
 * @property {string} title 表のタイトル
 * @property {string[]} columnHeaders 列ヘッダー（上部）
 * @property {string[]} rowHeaders 行ヘッダー（左側）
 * @property {number[][]} data 表示する数値データ（2次元配列）
 * @property {(value: number) => string} [formatNumber] 数値の表示フォーマット関数
 * @property {boolean} [loading] ローディング中表示フラグ
 * @property {string} [className] 追加CSSクラス
 */
interface SimpleNumberMatrixProps {
  title: string; // 表のタイトル
  columnHeaders: string[]; // 列ヘッダー（上部）
  rowHeaders: string[]; // 行ヘッダー（左側）
  data: number[][]; // 表示する数値データ（2次元配列）
  formatNumber?: (value: number) => string; // 数値の表示フォーマット関数（省略可）
  loading?: boolean; // ローディング中表示フラグ（省略可）
  className?: string; // 追加CSSクラス（省略可）
}

/**
 * 簡単な数値マトリクス表のヘルパーコンポーネント
 * @param {SimpleNumberMatrixProps} props コンポーネントのプロパティ
 * @returns {JSX.Element} 数値マトリクス表のJSX
 */
export const SimpleNumberMatrix: React.FC<SimpleNumberMatrixProps> = ({
  title,
  columnHeaders,
  rowHeaders,
  data,
  formatNumber = (value) => value.toLocaleString(),
  loading = false,
  className = ''
}) => {
  const renderNumberCell = (value: number) => (
    <span className="font-mono text-gray-800">
      {formatNumber(value)}
    </span>
  );

  return (
    <MatrixTable
      title={title}
      columnHeaders={columnHeaders}
      rowHeaders={rowHeaders}
      data={data}
      renderCell={renderNumberCell}
      loading={loading}
      className={className}
    />
  );
};