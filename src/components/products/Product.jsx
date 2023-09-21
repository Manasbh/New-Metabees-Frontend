import './Product.css'

const Product = (props) => {
  return (
    <div className="product-card-bg w-48 h-52 rounded-lg">
      <div className="flex p-2 gap-1">
        <div className="circle">
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="flex flex-col mt-5 items-center justify-center">
        <p className="font-bold text-white">{props.name}</p>
        <a
          href={props.productUrl}
          className="font-bold text-white product-link"
        >
          View Product
        </a>
        <img src={props.qrCode} alt="QR Code" className="product-card-qrCode" />
      </div>
    </div>
  )
}

export default Product
