import React from "react"
import { FaTh, FaUserAlt, FaRegChartBar,
    FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa"
import {FiChevronUp, FiChevronDown} from "react-icons/fi"
import {MdEmail} from "react-icons/md"
import {MdOutlineWifiCalling3} from "react-icons/md"
import {TiSocialLastFmCircular} from "react-icons/ti"
import {FaSms} from "react-icons/fa"
import {AiOutlineApartment} from "react-icons/ai"


export const menuItem =[
        {
            path:"/dash",
            name:"Dashboard",
            
            icon:<FaTh/>,
            iconClosed: <FiChevronDown/>,
            iconOpened: <FiChevronUp />,
    
            subNav: [
                {
                  title: 'Users',
                  path: '/overview/users',
                  icon: <FaUserAlt />
                },
                
              ]
        },
        {
            path:"/marketing",
            name:"Marketing Analytics",
            icon:<AiOutlineApartment/>,
            iconClosed: <FiChevronDown/>,
            iconOpened: <FiChevronUp />,
    
            subNav: [
                {
                  title: 'Email Campaign',
                  path: '/email',
                  icon: <MdEmail />
                },
                {
                  title: 'Call Campaign',
                  path: '/call',
                  icon: <MdOutlineWifiCalling3/>
                },
                {
                  title: 'Social Campaign',
                  path: '/social',
                  icon: <TiSocialLastFmCircular />
                },
                
                {
                  title: 'SMS Campaign',
                  path: '/sms',
                  icon: <FaSms  />
                }
              ]
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/main",
            name:"Logout",
            icon:<FaThList/>
        }
    ]