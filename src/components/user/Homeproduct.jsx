import Homeitemproduct from "./Homeitemproduct";
import List from "./List";

export default function Homeproduct() {
  const products = [
    {
        "name": "Giày Sneaker Thể Thao",
        "price": 750000,
        "image": "https://shop2hand.online/wp-content/uploads/2024/11/466619853_122101104704617411_6671080679321235141_n-1024x768.jpg",
        "image2": "https://shop2hand.online/wp-content/uploads/2024/11/466900415_122101104692617411_5021912728558458823_n-1024x768.jpg"
    },
    {
        "name": "Giày Sneaker Da Nam",
        "price": 1200000,
        "image": "https://kingshoes.vn/data/upload/media/849559-005-giay-nike-air-max-2017-chinh-hang-gia-tot-den-king-shoes-1.jpeg",
        "image2": "https://kingshoes.vn/data/upload/media/849559-005-giay-nike-air-max-2017-chinh-hang-gia-tot-den-king-shoes-6.jpeg"
    },
    {
        "name": "Giày Sneaker Bóng Đá ",
        "price": 1500000,
        "image": "https://kingshoes.vn/data/upload/media/629993-024-giay-nike-air-max-command-gia-tot-den-king-shoes-1.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/629993-024-giay-nike-air-max-command-gia-tot-den-king-shoes-3.jpg"
    },
    {
        "name": "Giày Sneaker Cao Gót Nữ",
        "price": 950000,
        "image": "https://kingshoes.vn/data/upload/media/1044a067-101-giay-gel-resolution-9-gs-gia-tot-den-king-shoes-3.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/1044a067-101-giay-gel-resolution-9-gs-gia-tot-den-king-shoes-7-1.jpg"
    },
    {
        "name": "Giày Sneaker Sandal Nữ",
        "price": 600000,
        "image": "https://kingshoes.vn/data/upload/media/dr6191-104-giay-nikecourt-air-zoom-vapor-pro-2-hard-court-tennis-gia-tot-den-king-shoes-2.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/dr6191-104-giay-nikecourt-air-zoom-vapor-pro-2-hard-court-tennis-gia-tot-den-king-shoes-4.png"
    },
    {
        "name": "Giày Sneaker Chạy Bộ",
        "price": 800000,
        "image": "https://kingshoes.vn/data/upload/media/id0544-giay-adidas-prophere-olive-gia-tot-den-king-shoes-1.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/id0544-giay-adidas-prophere-olive-gia-tot-den-king-shoes-2.jpg"
    },
    {
        "name": "Giày Sneaker Boot Nữ",
        "price": 1300000,
        "image": "https://kingshoes.vn/data/upload/media/dr6192-103-giay-zoom-vapor-pro-2-hc-gia-tot-den-king-shoes-1.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/dr6192-103-giay-zoom-vapor-pro-2-hc-gia-tot-den-king-shoes-3.jpg"
    },
    {
        "name": "Giày Sneaker Lười Nam",
        "price": 700000,
        "image": "https://kingshoes.vn/data/upload/media/ie6522-giay-samba-og-nau-gia-tot-den-king-shoes-1-1730607844.jpg",
        "image2": "https://kingshoes.vn/data/upload/media/ie6522-giay-samba-og-nau-gia-tot-den-king-shoes-2.jpg"
    }
]
  return (
    
    <>
      

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-white text-2xl font-bold">
              <a href="/">Sản phẩm</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/nam" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Giày Nam
              </a>
              <a href="/nu" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Giày Nữ
              </a>
              <a href="/tre-em" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Giày Trẻ Em
              </a>
              <a href="/khuyen-mai" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Khuyến Mãi
              </a>
              

             
            </div>

            {/* Mobile Select Menu */}
          
          </div>
        </div>
      </nav>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {products.map((item, index)=> (
                  <Homeitemproduct key={index} item={item}></Homeitemproduct>
                )
              )}
          </div>
        </div>
      </section>
    </>
  );
}


