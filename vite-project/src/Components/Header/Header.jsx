import './Header.css'
import baner from "../../assets/Baner.png"

const Header = () => {
  return (
    <div className='Header'>
      <img src={baner} alt="baner" />
    </div>
  );
};

export default Header;