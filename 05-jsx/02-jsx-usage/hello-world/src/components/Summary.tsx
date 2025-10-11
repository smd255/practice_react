import type React from "react";


interface Props{
    title: string;
    folded?: boolean;
    children: React.ReactNode;
}

function Summary({title, folded=false, children}:Props){


    return(
        // detailsは詳細隠れボタン,foldedがtrueなら非表示、falseなら表示
        <details className="border border-gray-300 rounded-md bg-gray-50" open={!folded}>
            <summary className="cursor-pointer p-4 font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                {title}
            </summary>
            <div className="px-4 pb-4 text-gray-700">
                {children}
            </div>
        </details>
    );
}

export default Summary;