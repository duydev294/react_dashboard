import React  from "react";
import { LuLayoutDashboard, LuSettings2, LuDatabase, LuUsers } from "react-icons/lu";
import {MdOutlineSettingsInputComponent} from "react-icons/md";
import {AiOutlineLineChart} from "react-icons/ai";
import {BsPatchQuestionFill} from "react-icons/bs";
import {Link} from 'react-router-dom';


import './sidebar.css'
import logo1 from '../../Assets/logo.png';

const SideBar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo1} alt="Image Name" />
        <h2>SanShrimp</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU
        </h3>

        <ul className="menuLists grid">

          <li className="listItem">
            <Link href="" className="menuLink flex">
              <LuLayoutDashboard className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
            </Link>
          </li>       
        </ul>
      </div>

      <div className="dataDiv">
        <h3 className="divTitle">
          DATA
        </h3>

        <ul className="menuLists grid">

          <li className="listItem">
            <Link href="/useslist" className="menuLink flex">
              <LuUsers className="icon"/>
              <span className="smallText">
                Users List
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/deviceslist" className="menuLink flex">
              <MdOutlineSettingsInputComponent className="icon"/>
              <span className="smallText">
                Devices List
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="" className="menuLink flex">
              <AiOutlineLineChart className="icon"/>
              <span className="smallText">
                Charts
              </span>
            </Link>
          </li>
          

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>

        <ul className="menuLists grid">

          <li className="listItem">
            <Link href="" className="menuLink flex">
              <LuLayoutDashboard className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="" className="menuLink flex">
              <LuDatabase className="icon"/>
              <span className="smallText">
                Data
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="" className="menuLink flex">
              <LuSettings2 className="icon"/>
              <span className="smallText">
                Settings
              </span>
            </Link>
          </li>
          

        </ul>
      </div>

      <div className="sideBarCard">
        <BsPatchQuestionFill className="icon"/>
        <div className="cardContent">
          <div className="circle1">

          </div>
          <div className="circle2">

          </div>
          <h3>Help Center</h3>
          <button className="btn"> Go to help Center</button>
        </div>

      </div>

    </div>
  )
}

export default SideBar;