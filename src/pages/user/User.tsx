import Single from '../../componants/single/Single'
import './user.scss'
import {singleUser} from '../../data'
const User = () => {
    //fetch data and send them to Single component

  return (

<div className="user">
     <Single {...singleUser}/>
</div> 
 )
}

export default User