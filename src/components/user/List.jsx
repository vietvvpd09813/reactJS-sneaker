import Item from "../../layout/user/item";
import { Link } from "react-router-dom";


export default function List({products}) {
  return (
   <Link to ="/detail">
    <div className="font-[sans-serif] bg-gray-100">
    <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Premium Sneakers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        {/* products */}
      {[].map((item, index)=> (
                  <Item key={index} item={item}></Item>
                )
              )}
      </div>
    </div>
  </div></Link>
  
  
  

  )
}
