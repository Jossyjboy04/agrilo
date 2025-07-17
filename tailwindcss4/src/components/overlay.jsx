// import React from 'react'
// function Overlay(){
//     return(
//         <>
//         <div className="overlay absolute bg-[#1fa12e] opacity-[0.7] top-0 bottom-0 w-[100%] h-[100%] hidden hover:block">
//             <div className="detail-button text-[white] opacity-[1] text-[20px] font-[500] flex items-center justify-center h-full">
// <a href="https://jmsfagribusiness.com/team/tolu-kuku/">Detail</a>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Overlay
import React from 'react'
function Overlay() {
  return (
    <div className="absolute inset-0 bg-[#1fa12e] opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
      <div className="text-white text-[20px] font-[400] border-[2px_solid_white] border px-6 py-3 rounded-[30px]  hover:bg-white hover:text-[#1fa12e]">
        <a className="" href="https://jmsfagribusiness.com/team/tolu-kuku/">Detail</a>
      </div>
    </div>
  )
}
export default Overlay