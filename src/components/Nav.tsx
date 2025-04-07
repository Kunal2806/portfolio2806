
function Nav() {
  return (
    <div className="w-[100%] pt-[15px] ">
        <div className="border-b-[2px] border-b-[#01C2FF]"> 
            <div className="flex justify-between items-center w-[90%] m-auto">
                <div className="flex items-center ">
                    <img src="/images/logo2806.svg" alt="logo" />
                    <p className="font-jaro text-[48px] ml-1">Kunal Goswami</p>
                </div>
                <div className="bg-[#01C2FF] h-[49px] w-[163px] rounded-[8px] flex justify-center items-center">
                    <p className="text-black text-[24px] mr-[3px]">Resume </p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h560v-367L567-760H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400l240 240v400q0 33-23.5 56.5T760-120H200Zm80-160h400v-80H280v80Zm0-160h400v-80H280v80Zm0-160h280v-80H280v80Zm-80 400v-560 560Z"/></svg>
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="w-[50%]">
                <div></div>
            </div>
            
            <div className="w-[50%] flex justify-center ">
                <div className="border-2 border-[#01C2FF] h-[35px] w-[120px] rounded-[8px] flex justify-center items-center">
                    <p className="text-[#01C2FF] mr-[3px] text-[16px]">Portfolio</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav