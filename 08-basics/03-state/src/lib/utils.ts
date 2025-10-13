import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// 引数：ClassValue型の値を可変長で受け取る
// clsx 複数のクラス名（文字列や条件式でtrue/falseになる値など）を受け取り、
// 適切に結合して1つの文字列にするライブラリ
// twMerge Tailwind CSSのクラス名同士の重複や競合（例: bg-red-500 bg-blue-500のような同じプロパティの複数指定）を最適化し、
// 最終的に有効なクラス名だけを残すためのライブラリ
// 例
// 引数：cn("bg-red-500", "text-white", false && "hidden", "bg-blue-500")
// 戻り値："text-white bg-blue-500"
// TailWindに必要な情報だけ返す関数 といえる
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

