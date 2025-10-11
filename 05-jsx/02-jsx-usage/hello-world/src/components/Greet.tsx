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
        <>
        {[...Array(times)].map(() => (
            <p>Hello, {name}!</p>
        ))}
        </>
    );
}

export default Greet;