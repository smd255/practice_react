// import { useState } from 'react'

import Greet from './components/GreetNew';
import Summary from './components/Summary';
import Form from './components/FormNew';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Hello World App
        </h1>
        <Greet name="Patty" times={4} />
        <Summary title="Maple Town">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Patty Hope-rabbit, along with her family, arrives in Maple Town, a
            smalltown inhabited by friendly animals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Soon, the Rabbit Family settles in Maple Town as mail carriers and the
            bitter, yet sweet friendship of Patty and Bobby begins to blossom.
          </p>
        </Summary>
      </div>
      <Form selected="fox" />
    </div>
  );
}

export default App
