import {useRef} from 'react';
// 再読み込みでも再レンダリングされない。
// DOM要素の参照などに使われる。

function TextInput(){
  // HTML のinput要素を取得する変数宣言
  // 引数は初期値(現在はnull)
  const inputRef = useRef<HTMLInputElement>(null);

  // inputRefに値(要素)が格納されていれば、その要素にフォーカスを当てる関数
  const handleClick = () =>{
    // current でinputRefが保持している具体的な値
    // ?　でもし存在していれば、という意味(tsのオプショナルチェイン)
    // .focus()でその要素にフォーカスをあてる。
    inputRef.current?.focus();
  };

  return(
    <div className="input-item">
      {/* テキスト入力欄。参照をinputRefに渡している。 */}
      <input type="text" ref={inputRef} />
      {/* type:ボタンを設定。value:表示名。onClickでクリック時にコールされる関数を設定。 */}
      <input type="buton" value="フォーカス" onClick={handleClick} />
    </div>
  );
}

export default TextInput;