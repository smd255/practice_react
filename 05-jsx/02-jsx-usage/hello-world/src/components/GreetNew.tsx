interface Props{
    name: string;
    times?: number;
}

function Greet(props:Props){
    // 分割代入。propsから値を取り出す。
    // times=1はデフォルトの値
    const { name, times = 1 } = props;

    return (
        // [...Array(times)]長さが times の配列を作る。
        //  ... スプレッド構文：配列の中身を展開
        // .map : 展開された各配列要素に対して関数を実行し新しい配列を返す
        // JSX内でforループが使えないため、このような書き方になっている。
        <div className="mb-6">
        {[...Array(times)].map((_, index) => (
            <p key={index} className="text-lg text-gray-800 mb-2 p-3 bg-gray-50 border-l-4 border-blue-500 rounded">
                Hello, {name}!
            </p>
        ))}
        </div>
    );
}

export default Greet;