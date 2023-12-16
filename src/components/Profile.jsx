import {Link} from 'react-router-dom';
import user from '../images/user.png';


const Profile = () => {
  return (
    <Link to='/profile'>
      <img className='w-[30px]' src={user} alt="Profile" />
    </Link>
  )
}

export default Profile
