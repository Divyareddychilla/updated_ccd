import Sidebar from '../Sidebar';
import './style.scss'
import PageInfo from '../atoms/pageInfo/PageInfo';

export default function DashBoard(props: any) {
  return (
    <div className="dashboard">
        <div className='sidebar-holder'>
            <Sidebar />
        </div>
        <div className='main'>
        <PageInfo />
        {props.children?props.children:<h1>Dashboard</h1>}
        </div>
    </div>
  )
}
