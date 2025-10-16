
/*
* データのinterface
*/

// １データ
interface Data {  
  // 表示順
  showid:number;
  //商品名
  productName:string;

  // 売上
  sales:number;
}

// 年度データ
interface YearData {
  // 年度
  year: number;

  // データ   
  datas: Data[];
}

// 年度リストを取得する関数
/**
 * 年度リストを取得する関数
 * @param {YearData[]} yearDataList - 年度データの配列
 * @returns {number[]} 年度（year）のリスト
 */
/**
 * 年度リストを取得する関数
 * @param {YearData[]} yearDataList - 年度データの配列
 * @returns {number[]} 年度（year）のリスト
 */
function getYearList(yearDataList: YearData[]): number[] {
  return yearDataList.map((yd) => yd.year);
}

/**
 * productNameの種類を取得する関数
 * @param {YearData[]} yearDataList - 年度データの配列
 * @returns {string[]} 商品名のリスト（全年度で同じ種類と仮定）
 */
function getProductNames(yearDataList: YearData[]): string[] {
  if (yearDataList.length === 0) return [];
  // 最初の年度のdatasからproductNameを抽出
  return yearDataList[0].datas.map((d) => d.productName);
}

// 表データ


/*
* テスト用データ
*/
const yearDataList: YearData[] = [
  {
    year: 2016,
    datas: [
      { showid: 1, productName: "商品A", sales: 120 },
      { showid: 2, productName: "商品B", sales: 80 },
    ],
  },
  {
    year: 2017,
    datas: [
      { showid: 1, productName: "商品A", sales: 130 },
      { showid: 2, productName: "商品B", sales: 90 },
    ],
  },
  {
    year: 2018,
    datas: [
      { showid: 1, productName: "商品A", sales: 140 },
      { showid: 2, productName: "商品B", sales: 100 },
    ],
  },
  {
    year: 2019,
    datas: [
      { showid: 1, productName: "商品A", sales: 150 },
      { showid: 2, productName: "商品B", sales: 110 },
    ],
  },
  {
    year: 2020,
    datas: [
      { showid: 1, productName: "商品A", sales: 160 },
      { showid: 2, productName: "商品B", sales: 120 },
    ],
  },
  {
    year: 2021,
    datas: [
      { showid: 1, productName: "商品A", sales: 170 },
      { showid: 2, productName: "商品B", sales: 130 },
    ],
  },
  {
    year: 2022,
    datas: [
      { showid: 1, productName: "商品A", sales: 180 },
      { showid: 2, productName: "商品B", sales: 140 },
    ],
  },
  {
    year: 2023,
    datas: [
      { showid: 1, productName: "商品A", sales: 190 },
      { showid: 2, productName: "商品B", sales: 150 },
    ],
  },
  {
    year: 2024,
    datas: [
      { showid: 1, productName: "商品A", sales: 200 },
      { showid: 2, productName: "商品B", sales: 160 },
    ],
  },
  {
    year: 2025,
    datas: [
      { showid: 1, productName: "商品A", sales: 210 },
      { showid: 2, productName: "商品B", sales: 170 },
    ],
  },
];

export { yearDataList, getYearList, getProductNames };