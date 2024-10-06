import { useState, useRef } from 'react';

function App() {
  const [translateX, setTranslateX] = useState(0);
  const refs = useRef([]);

  const left = () => {
    
    if (translateX > -(refs.current.length - 1) * 242) {
      setTranslateX((prev) => prev - 242);
    }
  };

  const right = () => {
   
    if (translateX < 0) {
      setTranslateX((prev) => prev + 242);
    }
  };

  const mydata = [
    { id: 1, url: './photo/1.png' },
    { id: 2, url: './photo/2.png' },
    { id: 3, url: './photo/3.png' },
    { id: 4, url: './photo/4.png' },
    { id: 5, url: './photo/5.png' },
    { id: 6, url: './photo/6.png' },
    { id: 7, url: './photo/7.png' },
  ];

  return (
    <>
      <div>
        <div id="background" className="w-full">
          <div id="slidersContainer" className="flex px-5">
            <div
              id="buttons"
              className="w-[10%] flex items-center justify-center min-w-[150px] gap-[10px]"
            >
              <button
                className="border-2 border-gray-700 p-2 rounded-full hover:text-white hover:bg-black hover:fill-white transition ease-in-out duration-300"
                onClick={left}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 256 512"
                >
                  <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                </svg>
              </button>
              <button
                className="border-2 border-gray-700 p-2 rounded-full hover:text-white hover:bg-black hover:fill-white transition ease-in-out duration-300"
                onClick={right}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 256 512"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
              </button>
            </div>

            <div id="sliders" className="flex gap-6 overflow-hidden w-[90%]">
              {mydata.map((item, index) => (
                <img
                  key={index}
                  ref={(el) => (refs.current[index] = el)} 
                  src={item.url}
                  alt={`Photo no.` + item.id}
                  className="w-[220px] transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(${translateX}px)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
