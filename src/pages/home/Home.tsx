import './home.scss'
import  TopBox from '../../componants/toptbox/TopBox'
import ChartBox from '../../componants/chartBox/ChartBox'
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue, barChartBoxVisit } from '../../data'
import BarChartBox from '../../componants/barChartBox/BarChartBox'
import PieChartBox from '../../componants/pieChartBox/PieChartBox'
import BigChartBox from '../../componants/bigChartBox/BigChartBox'


const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>< TopBox /></div>
      <div className='box box2'> < ChartBox {...chartBoxUser} /></div>
      <div className='box box3'>< ChartBox {...chartBoxProduct}/></div>
      <div className='box box4'>< PieChartBox /></div>
      <div className='box box5'>< ChartBox {...chartBoxRevenue} /></div>
      <div className='box box6'>< ChartBox {...chartBoxConversion} /></div>
      <div className='box box7'> <BigChartBox/> </div>
      <div className='box box8'><BarChartBox {...barChartBoxVisit} /></div>
      <div className='box box9'><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home