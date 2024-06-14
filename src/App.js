import React from 'react';
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import three from "./img/three.jpg";
import four from "./img/four.jpg";
import five from "./img/five.jpg";
import six from "./img/six.jpg";
import seven from "./img/seven.jpg";
import eight from "./img/eight.jpg";

import Tod from './tod';

function App() {

  let dogs = [
    { img: one, exp: "The innocent Look" },
    { img: two, exp: 'big Eyed Buggy' },
    { img: three, exp: 'The Saint Dog' },
    { img: four, exp: 'Golden Retriever' },
    { img: five, exp: 'The Poodle' },
    { img: six, exp: 'The Dachshund' },
    { img: seven, exp: 'Shorthaired' },
    { img: eight, exp: 'big Eyed Buggy' },
  ];

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {
        dogs.map(function(data, index) {
          return (
            <div className="flex flex-col items-center p-5 bg-slate-200" key={index}>
              <img className="h-52 w-52" src={data.img} alt={data.exp} />
              <p className="text-center text-xl font-bold mt-2">{data.exp}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
