import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlayCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Menu as AntMenu } from 'antd'
import ensome from '../components/home/img/imglogo/ensome.png'
import logo2 from '../components/home/img/imglogo/logo2.png'

export const Navbar = ({ home }) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleMenuClick = () => {
    setCollapsed(!collapsed)
  }

  const closeMenu = () => {
    setCollapsed(false)
  }

  return (
    <div>
      {home === 1 && (
        <nav className="w-full h-[126px] flex bg-white justify-between p-4">
          <div className="w-full max-w-[1110px] h-[46px] mx-auto flex justify-between items-center">
            <img src={ensome} alt="Logo" className="w-[141px] h-[46px]" />
            <div className="hidden lg:flex w-full justify-center items-center">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/home2" className="text-[#9497A1]">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/home3" className="text-[#9497A1]">
                    Elements
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex">
              <Link to="/" onClick={closeMenu}>
                <div className="w-[168px] h-[44px] bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center">
                  <p className="flex font-semibold text-[14px] space-x-2">
                    <PlayCircleOutlined />
                    <span>Watch the demo</span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="lg:hidden flex items-center relative">
              <MenuOutlined onClick={handleMenuClick} className="text-2xl" />
              {collapsed && (
                <div className="absolute bg-white top-[70px] left-0 right-0 border-t border-gray-200 shadow-lg">
                  <AntMenu mode="vertical" defaultSelectedKeys={['home']}>
                    <AntMenu.Item key="home">
                      <Link to="/" onClick={closeMenu} className="text-black">
                        Home
                      </Link>
                    </AntMenu.Item>
                    <AntMenu.Item key="solutions">
                      <Link
                        to="/home2"
                        onClick={closeMenu}
                        className="text-[#9497A1]"
                      >
                        Solutions
                      </Link>
                    </AntMenu.Item>
                    <AntMenu.Item key="elements">
                      <Link
                        to="/home3"
                        onClick={closeMenu}
                        className="text-[#9497A1]"
                      >
                        Elements
                      </Link>
                    </AntMenu.Item>
                    <AntMenu.Item key="demo">
                      <Link to="/" onClick={closeMenu}>
                        <div className="w-full h-[44px] bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center">
                          <p className="flex font-semibold text-[14px] space-x-2">
                            <PlayCircleOutlined />
                            <span>Watch the demo</span>
                          </p>
                        </div>
                      </Link>
                    </AntMenu.Item>
                  </AntMenu>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
      {home === 2 && (
        <header className="bg-[#002B4E] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center justify-between h-[80px]">
              <div className="flex items-center space-x-2">
                <img src={logo2} alt="" className="w-[141px] h-[46px]" />
              </div>
              <div className="hidden lg:flex space-x-8">
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link
                  to="/home2"
                  className="hover:text-gray-300 transition-colors underline underline-offset-4"
                >
                  Solutions
                </Link>
                <Link
                  to="/home3"
                  className="hover:text-gray-300 transition-colors"
                >
                  Elements
                </Link>
              </div>
              <div className="hidden lg:flex">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center bg-white text-[#002B4E] px-4 py-2 rounded hover:opacity-90 transition-opacity"
                >
                  <PlayCircleOutlined className="mr-2" />
                  Watch the demo
                </Link>
              </div>
              <div className="lg:hidden flex items-center relative">
                <MenuOutlined
                  onClick={handleMenuClick}
                  className="text-2xl cursor-pointer"
                />
                {collapsed && (
                  <div className="absolute bg-[#002B4E] top-[60px] left-0 right-0 border-t border-gray-700 shadow-lg">
                    <AntMenu
                      mode="vertical"
                      theme="dark"
                      className="bg-[#0F2A43] border-none"
                      selectable={false}
                    >
                      <AntMenu.Item key="home">
                        <Link to="/" onClick={closeMenu}>
                          Home
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="solutions">
                        <Link to="/home2" onClick={closeMenu}>
                          Solutions
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="elements">
                        <Link to="/home3" onClick={closeMenu}>
                          Elements
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="demo">
                        <Link to="/" onClick={closeMenu}>
                          <div className="flex items-center">
                            <PlayCircleOutlined className="mr-2" />
                            Watch the demo
                          </div>
                        </Link>
                      </AntMenu.Item>
                    </AntMenu>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>
      )}
      {home === 3 && (
        <header className="bg-white text-[#212433]">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center justify-between h-[80px]">
              <div className="flex items-center space-x-2">
                <img src={ensome} alt="Logo" className="w-[141px] h-[46px]" />
              </div>
              <div className="hidden lg:flex space-x-8">
                <Link to="/" className="hover:text-blue-600 transition-colors text-[#9497A1]">
                  Home
                </Link>
                <Link
                  to="/home2"
                  className="hover:text-blue-600 transition-colors text-[#9497A1]"
                >
                  Solutions
                </Link>
                <Link
                  to="/home3"
                  className="hover:text-blue-600 transition-colors text-black"
                >
                  Elements
                </Link>
              </div>
              <div className="hidden lg:flex">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center bg-[#185CFF] text-white px-4 py-2 rounded hover:bg-[#3B7BFF] transition-colors"
                >
                  <PlayCircleOutlined className="mr-2" />
                  Watch the demo
                </Link>
              </div>
              <div className="lg:hidden flex items-center relative">
                <MenuOutlined
                  onClick={handleMenuClick}
                  className="text-2xl cursor-pointer"
                />
                {collapsed && (
                  <div className="absolute bg-gray-100 top-[60px] left-0 right-0 border-t border-gray-300 shadow-lg">
                    <AntMenu
                      mode="vertical"
                      className="bg-gray-100 border-none"
                      selectable={false}
                    >
                      <AntMenu.Item key="home">
                        <Link to="/" onClick={closeMenu} className='text-[#9497A1]'>
                          Home
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="solutions">
                        <Link to="/home2" onClick={closeMenu}>
                          Solutions
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="elements">
                        <Link to="/home3" onClick={closeMenu}>
                          Elements
                        </Link>
                      </AntMenu.Item>
                      <AntMenu.Item key="demo">
                        <Link to="/" onClick={closeMenu}>
                          <div className="flex items-center">
                            <PlayCircleOutlined className="mr-2" />
                            Watch the demo
                          </div>
                        </Link>
                      </AntMenu.Item>
                    </AntMenu>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>
      )}
    </div>
  )
}
