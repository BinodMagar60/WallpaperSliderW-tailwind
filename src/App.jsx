import { useState, useRef} from 'react';




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
    { id: 1, name: '1.png', url: './photo/1.png' },
    { id: 2, name: '2.jpg', url: './photo/2.jpg' },
    { id: 3, name: '3.jpg', url: './photo/3.jpg' },
    { id: 4, name: '4.jpg', url: './photo/4.jpg' },
    { id: 5, name: '5.jpg', url: './photo/5.jpg' },
    { id: 6, name: '6.jpg', url: './photo/6.jpg' },
    { id: 7, name: '7.jpg', url: './photo/7.png' },
    { id: 8, name: '8.jpg', url: './photo/8.jpg' },
    { id: 9, name: '9.jpg', url: './photo/9.jpg' },
    { id: 10, name: '10.jpg', url: './photo/10.jpg' },
    { id: 11, name: '11.png', url: './photo/11.png' },
    { id: 12, name: '12.jpg', url: './photo/12.jpg' },
    { id: 13, name: '13.jpg', url: './photo/13.jpg' },
    { id: 14, name: '14.jpg', url: './photo/14.jpg' },
    { id: 15, name: '15.png', url: './photo/15.png' },
    { id: 16, name: '16.jpg', url: './photo/16.jpg' },
    { id: 17, name: '17.png', url: './photo/17.png' },
    { id: 18, name: '18.png', url: './photo/18.png' },
    { id: 19, name: '19.png', url: './photo/19.png' },
    { id: 20, name: '20.jpg', url: './photo/20.jpg' },
    { id: 21, name: '21.png', url: './photo/21.png' },
    { id: 22, name: '22.png', url: './photo/22.png' },
    { id: 23, name: '23.png', url: './photo/23.png' },
    { id: 24, name: '24.png', url: './photo/24.png' },
    { id: 25, name: '25.png', url: './photo/25.png' },
    { id: 26, name: '26.png', url: './photo/26.png' },
    { id: 27, name: '27.png', url: './photo/27.png' },
    { id: 28, name: '28.png', url: './photo/28.png' },
    { id: 29, name: '29.png', url: './photo/29.png' },
    { id: 30, name: '30.png', url: './photo/30.png' },
    { id: 31, name: '31.png', url: './photo/31.png' },
    { id: 32, name: '32.png', url: './photo/32.png' },
    { id: 33, name: '33.png', url: './photo/33.png' },
    { id: 34, name: '34.png', url: './photo/34.png' },
    { id: 35, name: '35.png', url: './photo/35.png' },


  ];

  return (
    <>
      <div>
        <div id="background" className="w-full relative">
          <img src={mydata[count].url} alt="" className='absolute  w-full' />
          <div id="overlay" className='w-full h-screen fixed'style={{
        background: 'linear-gradient(to top, #000000aa 0%, #5c525266 40%, transparent 100%)',
      }} ></div>
          <div id="slidersContainer" className="flex px-5 fixed top-[700px] z-10  ">
            {/* buttons */}
            <div
              id="buttons"
              className="w-[10%] flex flex-col items-center justify-center min-w-[150px] gap-[10px]"
            >

              {/* left side */}
              <div className='flex gap-5'>
                <button
                className={`border-2 border-white p-2 rounded-full bg-slate-200 bg-opacity-5 fill-white hover:bg-slate-300 hover:bg-opacity-15 transition ease-in-out duration-300 ${count===0? "disabled opacity-0 cursor-default":"cursor-pointer"}`}
                onClick={right}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 256 512"
                >
                  <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                </svg>
              </button>

              {/* right side */}
              <button
                className={`border-2 border-white p-2 rounded-full bg-slate-200 bg-opacity-5 fill-white hover:bg-slate-300 hover:bg-opacity-15 transition ease-in-out duration-300 `}
                onClick={left}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 256 512"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
              </button>

                {/* download */}
              </div>
              <a href={mydata[count].url} download={mydata[count].name}>
              <button className='flex justify-center items-center gap-3 border-white border rounded-md px-3 py-1 cursor-pointer mt-2 hover:bg-slate-300 hover:bg-opacity-15 transition-all duration-200 fill-white text-white'>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg> <span>Download</span>
              </button>
              </a>


              <div className='text-center font-semibold text-xl text-white break-words fixed top-[830px] px-4'>
              {mydata[count].name}
            </div>


            </div>

            




            {/* sliders */}
            <div id="sliders" className="flex gap-[22px] overflow-hidden w-[90%] relative">
              <div className='fixed z-10 top-[660px] left-[290px] fill-white'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-8 h-8'><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
              </div>
              {mydata.map((item, index) => (
                <img
                  key={index}
                  ref={(el) => (refs.current[index] = el)} 
                  src={item.url}
                  alt={`Photo no.` + item.id}
                  className="w-[220px] transition-transform duration-500 ease-in-out rounded-lg" 
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
