import type React from "react";


interface Props{
    title: string;
    folded?: boolean;
    children: React.ReactNode;
}

function Summary({title, folded=false, children}:Props){


    return(
        // detailsは詳細隠れボタン,foldedがtrueなら非表示、falseなら表示
        <details className="story" open={!folded}>
            <summary>{title}</summary>
            {children}
        </details>
    );
}

export default Summary;