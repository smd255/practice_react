import { useState } from "react";

// オブジェクト
// 辞書型のようなもの
// 英名、和名の対応表
const options = {
  rabbit: 'パティ',
  bear: 'ボビー',
  fox: 'ダイアナ',
  pig: 'プリプリン',
  squirrel: 'ジュディ',
};

// typeof optionsは、optionsという変数やオブジェクトの型を取得します。
// options　と同じ型のデータを省略可能な状態でもつ、型定義
// keyofはその型のキー（プロパティ名）だけを型として抽出します
// 「optionsが持つプロパティ（rabbit, bear, fox, pig, squirrel）のいずれか
// を受け取ることができる型、というのが selected の型の正体。
type Props = { selected?: keyof typeof options };

function Form(props:Props){
  // 必要なプロパティを取得するため、{} の分割代入形式
  // ドロップダウンの表示用の値取得   
  // const { selected } = props;
  // ↓可変にし、Formで値を保持きるように変更　 
  const [selected, setSelected] = useState<keyof typeof options | undefined>(props.selected);

  return (
    <form>
      <div className="form-item">
        {/* htmlfor でidに紐づけ */}
        <label htmlFor="favChar">好きなキャラクターは？</label>
        {/* select でドロップダウン表示 */}
        <select 
          id="favChar" 
          value={selected}
          onChange={e => setSelected(e.target.value as keyof typeof options)}>
          {/* ↑アロー関数の省略形 */}
          {/* ↓ Object.entries(オブジェクト)でキーと値のペアとして返す */}
          {/* 一連の箇所はjsとして解釈するよう中括弧で囲っている */}
          {Object.entries(options).map(([species, name])=>(
            // mapに渡す関数をアロー演算子で定義。
            // 仮引数 species, name について。
            // options オブジェクトの各キーと値（例: "rabbit" と "パティ"）が、
            // species と name に自動的に割り当てられます。
            <option key={species} value={species}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="favReason">そのキャラクターのどこが好き?</label>
        <textarea id="favReason" placeholder="【例】性格が好き" />
      </div>
    </form>        
  )
}

export default Form;