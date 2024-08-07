import DashBoard from "../components/Dashboard";
import { Outlet } from 'react-router-dom';
export default function DashBoardPage() {
  return <DashBoard> <Outlet /></DashBoard>;
};