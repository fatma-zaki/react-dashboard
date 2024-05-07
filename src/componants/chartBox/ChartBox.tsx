import './chartBox.scss'
import {Link} from 'react-router-dom'
import {ResponsiveContainer , Tooltip,LineChart, Line} from 'recharts'



type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: string | number;
  percentage: number;
  chartData: object[];
}
function ChartBox(props: Props) {
  return (
    <div className='chartBox'>
     <div className="boxInfo">
          <div className="title">
               <img src={props.icon} alt="" />
               <span>
                    {props.title}
               </span>
          </div>
          <h2>{props.number}</h2>
          <Link to='/'>view all</Link>
     </div>
     <div className="chartInfo">
     <div className="chart">
     <ResponsiveContainer width="99%" height="100%">
        <LineChart  data={props.chartData}>
          < Tooltip contentStyle={{background: 'transparent', border: 'none'}}
          labelStyle={{display: 'none'}}
          position={{x: 10, y: 50}}/>
          <Line dot={false} type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
     </div>
     <div className="texts">
          <span className="percentage" style={{color: props.percentage< 0 ? 'tomato': 'limegreen'}}>{props.percentage}</span>
          <span className="duration">this month</span>
     </div>
     </div>
    </div>
  )
}

export default ChartBox