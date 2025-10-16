import React, { useState, useEffect } from 'react';
import { SalesMatrixTable, SimpleNumberMatrix } from '../../components';



// シンプルなサンプルデータ
const MultiMatrixDemo: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // 少し遅らせてデモを表示
    const timer = setTimeout(() => setShowDemo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 space-y-12">
        
        {/* メインの売上マトリクス表 */}
        <SalesMatrixTable />
      </div>
    </div>
  );
};

export default MultiMatrixDemo;