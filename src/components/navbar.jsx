import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='flex justify-between items-center shadow-md md:justify-around'>
        <div>
            <img src={Logo} alt="Logo" className="w-28 h-20 object-cover  pl-4 md:w-60" />
        </div>
        <div className="pr-4">
            <i className="fa-solid fa-user m-4 text-2xl md:p-12"></i>
            <i className="fa-solid fa-cart-shopping m-4 text-2xl md:p-12"></i>
        </div>
    </div>
  )
}

export default Navbar