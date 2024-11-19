import Detailitem from "./Detailitem";
import Homecomment from "./Homecomment";
import List from "./List";



export default function Homedetail() {
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
        "name": "Giày Sneaker Bóng Đá Adidas",
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
  <Detailitem></Detailitem>
  <List products={products} ></List>
  <Homecomment></Homecomment>
 
  </>
  
  )
 
}

