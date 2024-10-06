import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [translateX, setTranslateX] = useState(0);
  const refs = useRef([]);

  const left = () => {
    
    if (translateX > -(refs.current.length - 1) * 242) {
      setTranslateX((prev) => prev - 242);
    }
    if(count < mydata.length-1){
      setCount(count+1);
    }
    
  };

  const right = () => {
    
    if (translateX < 0) {
      setTranslateX((prev) => prev + 242);
    }

    if(count > 0){
      setCount(count-1);
    }
    
  };

  const mydata = [
    { id: 1, name: '1', url: './photo/1.png' },
    { id: 2, name: '2', url: './photo/2.png' },
    { id: 3, name: '3', url: './photo/3.png' },
    { id: 4, name: '4', url: './photo/4.png' },
    { id: 5, name: '5', url: './photo/5.png' },
    { id: 6, name: '6', url: './photo/6.png' },
    { id: 7, name: '7', url: './photo/7.png' },
  ];

  return (
    <>
      <div>
        <div id="background" className="w-full">
          <img src={mydata[count].url} alt="" className='absolute h-screen w-full' />
          <div id="overlay" className='w-full h-screen fixed bg-gradient-to-t from-gray-800 to-transparent'></div>
          <div id="slidersContainer" className="flex px-5 relative z-10 translate-y-[750px] ">

            <div
              id="buttons"
              className="w-[10%] flex flex-col items-center justify-center min-w-[150px] gap-[10px]"
            >
              <div className='flex gap-5'>
                <button
                className="border-2 border-black p-2 rounded-full bg-slate-200 bg-opacity-5 hover:text-white hover:bg-black hover:fill-white transition ease-in-out duration-300"
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
                className="border-2 border-gray-700 p-2 rounded-full hover:text-white hover:bg-black hover:fill-white transition ease-in-out duration-200"
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
              
              <a href={mydata[count].url} download={mydata[count].name}>
              <button className='flex justify-center items-center gap-3 border-black border rounded-md px-3 py-1 cursor-pointer mt-2 hover:bg-black transition-all duration-200 hover:fill-white hover:text-white'>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg> <span>Download</span>
              </button>
              </a>
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
