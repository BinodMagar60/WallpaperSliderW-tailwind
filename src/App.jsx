import { useState, useRef, useEffect } from 'react';




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
    { id: 2, name: '2', url: './photo/2.jpg' },
    { id: 3, name: '3', url: './photo/3.jpg' },
    { id: 4, name: '4', url: './photo/4.jpg' },
    { id: 5, name: '5', url: './photo/5.jpg' },
    { id: 6, name: '6', url: './photo/6.jpg' },
    { id: 7, name: '7', url: './photo/7.png' },
    { id: 8, name: '8', url: './photo/8.jpg' },
    { id: 9, name: '9', url: './photo/9.jpg' },
    { id: 10, name: '10', url: './photo/10.jpg' },
    { id: 11, name: '11', url: './photo/11.jpg' },
    { id: 12, name: '12', url: './photo/12.jpg' },
    { id: 13, name: '13', url: './photo/13.jpg' },
    { id: 14, name: '14', url: './photo/14.jpg' },
    { id: 15, name: '15', url: './photo/15.png' },
    { id: 16, name: '16', url: './photo/16.jpg' },
    { id: 17, name: '17', url: './photo/17.png' },
    { id: 18, name: '18', url: './photo/18.png' },
    { id: 19, name: '19', url: './photo/19.png' },
    { id: 20, name: '20', url: './photo/20.jpg' },
  ];

  return (
    <>
      <div>
        <div id="background" className="w-full relative">
          <img src={mydata[count].url} alt="" className='absolute  w-full' />
          <div id="overlay" className='w-full h-screen fixed'style={{
        background: 'linear-gradient(to top, #2e2c2c88 0%, #5c525238 40%, transparent 100%)',
      }} ></div>
          <div id="slidersContainer" className="flex px-5 absolute top-[900px] z-10  ">

            <div
              id="buttons"
              className="w-[10%] flex flex-col items-center justify-center min-w-[150px] gap-[10px]"
            >
              <div className='flex gap-5'>
                <button
                className="border-2 border-white p-2 rounded-full bg-slate-200 bg-opacity-5 fill-white hover:bg-slate-300 hover:bg-opacity-15 transition ease-in-out duration-300"
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
                className={`border-2 border-white p-2 rounded-full bg-slate-200 bg-opacity-5 fill-white hover:bg-slate-300 hover:bg-opacity-15 transition ease-in-out duration-300 ${count===0? "disabled opacity-0 cursor-default":"cursor-pointer"}`}
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
              <button className='flex justify-center items-center gap-3 border-white border rounded-md px-3 py-1 cursor-pointer mt-2 hover:bg-slate-300 hover:bg-opacity-15 transition-all duration-200 fill-white text-white'>
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
