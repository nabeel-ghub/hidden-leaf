import MapLibreView from "./MapLibreView";
import Link from "next/link";

export default function Location() {
  return (
    <div id="location" className="min-h-[80vh] h-auto flex flex-col md:flex-row items-center pb-20 md:pb-0">
      <div className="h-auto w-[50%] flex flex-col items-center justify-center">
        <h2 className="text-center mt-10 md:mt-0 mb-5 fontPoppins font-[700] text-[#6f7034] text-xl">Hidden Leaf Cafe Location</h2>
        <div className="h-[300px] w-[300px] md:w-[500px] rounded-md overflow-hidden border-[#b17953] border-3 border-solid">
            <MapLibreView />
        </div>
      </div>
      <div className="h-auto w-[90%] md:w-[50%] mt-10 md:mt-0 md:p-10 flex flex-col justify-center pl-10">
        <div className="mb-10">
            <h2 className="text-[#3e2f1a] font-[700] text-xl fontOutfit mb-5">Open Hours</h2>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Sun:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Mon:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Tue:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Wed:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Thu:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Sat:</b> 10:00am - 10:00pm</p>
            <p className="text-[#3e2f1a] font-[400] text-sm fontPoppins"><b>Fri:</b> 10:00am - 10:00pm</p>
        </div>
            <p className="text-[#3e2f1a] fontPoppins text-sm font-[400] mb-5">Hidden Leaf Cafe, Near AJ Hospital,<br></br> Kuntikana, Mangaluru,<br></br> Karnataka - 575004</p>
            <Link href="https://www.google.com/maps/search/?api=1&query=12.900733,74.845644" className="self-start text-white bg-[#3e2f1a] p-2 h-10 w-auto text-sm pl-2 pr-2 rounded-sm cursor-pointer self-center">Open in google maps</Link>
      </div>
    </div>
  );
}
