
import './topbox.scss'
import {topDealUsers} from'../../data.ts'


function TopBox() {
  return (
    <div className='topbox'>
     <h2>top deals</h2>
     <div className="list">
     {topDealUsers.map(user => (
          <div className="listItem" key={user.id}>
               <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userText">
                         <span className="userName">{user.username}</span>
                         <span className="email">{user.email}</span>

                    </div>
               </div>
               <div className="amount">${user.amount}</div>
          </div>
     ))

     }
     </div>
    </div>
  )
}

export default TopBox