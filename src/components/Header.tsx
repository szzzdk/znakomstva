import Logo from '../assets/love-birds1.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center space-x-72 '>
            <div className='flex items-center justify-center'>
                <a href="/" className='flex items-center'>
                    <img src={Logo} className="w-12 h-12 mr-6" alt="logo" />
                    <span className='text-sm'>Znakomstva.com</span>
                </a>
            </div>
            <div className='flex items-center justify-center'>
                <p className='mr-6 text-sm'>Впервые здесь?</p>
                <button className='h-10 w-44  text-sm border rounded-2xl border-1 border-rose-600'>Регистрация</button>
            </div>
        </div>
    )
}

export default Header;