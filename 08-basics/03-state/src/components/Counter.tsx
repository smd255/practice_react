import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Counter() {
  const [count, setCount] = useState(0);

  // カウントアップ
  function increment(){
    // c　は現在のcount。React仕様より。
    // 関数の戻り値を渡しているのではなく、第一級関数として、関数を渡している。
    setCount((c) => c + 1);
  }

  // リセット
  function reset(){
    // 値を渡せば、値として解釈している。
    // React側でそう構えている。
    setCount(0);
  }

  return (
    // "カード"を定義
    <Card className="min-w-96 gap-2 pt-4 shadow-md">
      {/* ヘッダーを表示 */}
      <CardHeader>
        <div className="text-center text-xl font-medium">Count</div>
      </CardHeader>
      {/* 現在のカウントを表示 */}
      <CardContent className="flex justify-center pb-2">
        <div className="text-4xl font-semibold">{count}</div>
      </CardContent>
      {/* カウントアップボタン, クリック時に加算関数 */}
      <CardContent className="mx-4 flex gap-2">
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700"
          onClick={increment}
        >
          +1
        </Button>
        {/* リセットボタン,  クリック時にカウンタクリア */}
        <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={reset}>
          Reset
        </Button>
      </CardContent>
    </Card>
  );
}

export default Counter;