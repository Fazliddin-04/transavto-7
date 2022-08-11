import React from 'react'
import { useState } from 'react'
import { FaBars, FaCaretDown } from 'react-icons/fa'

function Navbar() {
  const [drawer, setDrawer] = useState(false)
  const [menu1, setMenu1] = useState(false)
  const [menu2, setMenu2] = useState(false)
  const [menu3, setMenu3] = useState(false)
  const [menu4, setMenu4] = useState(false)
  const [menu5, setMenu5] = useState(false)

  function removeTabs() {
    setMenu1(false)
    setMenu2(false)
    setMenu3(false)
    setMenu4(false)
    setMenu5(false)
  }

  return (
    <nav className="p-4">
      <div className="animateNav md:container md:px-4 mx-auto flex items-center justify-between pb-4 border-b-4">
        <div
          className=" border-2 p-2 mr-2 2xl:hidden "
          onClick={() => setDrawer(true)}
        >
          <FaBars />
        </div>
        <p className="flex-1 text-2xl sm:text-3xl font-bold italic">
          Transavto-7
        </p>
        <div className="flex flex-col">
          <a href="tel:+89787775555">8 (978) 777-55-55</a>
          <a href="tel:+89787775555">8 (800) 550-70-55</a>
        </div>
      </div>
      <div className="border-b-4 hidden 2xl:block">
        <ul className="flex items-center justify-between px-4 text-lg">
          <li style={{ animationDelay: '100ms' }} className="my-3">
            <a href="#about">О нас</a>
          </li>
          <li style={{ animationDelay: '200ms' }} className="my-3">
            <a href="#services">Все Услуги</a>
          </li>
          <li
            style={{ animationDelay: '300ms' }}
            className="my-3 relative z-10"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                removeTabs()
                setMenu1(!menu1)
              }}
            >
              Предрейсовые осмотры{' '}
              <FaCaretDown
                style={{
                  transform: menu1 ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={`flex flex-col w-60 px-4 absolute bg-white shadow-md border top-8 right-0  z-10 ${
                menu1 ? 'opacity-1 py-4 transition' : 'opacity-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '400ms' }}
            className="my-3 relative z-10"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                removeTabs()
                setMenu2(!menu2)
              }}
            >
              Заказать автобус{' '}
              <FaCaretDown
                style={{
                  transform: menu2 ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={`flex flex-col w-60 px-4 absolute bg-white shadow-md border top-8 right-0 z-10  ${
                menu2 ? 'opacity-1 py-4 transition' : 'opacity-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '500ms' }}
            className="my-3 relative z-10"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                removeTabs()
                setMenu3(!menu3)
              }}
            >
              Блог{' '}
              <FaCaretDown
                style={{
                  transform: menu3 ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={`flex flex-col w-60 px-4 absolute bg-white shadow-md border top-8 right-0 z-10  ${
                menu3 ? 'opacity-1 py-4 transition' : 'opacity-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '600ms' }}
            className="my-3 relative z-10"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                removeTabs()
                setMenu4(!menu4)
              }}
            >
              Законадательство{' '}
              <FaCaretDown
                style={{
                  transform: menu4 ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={`flex flex-col w-60 px-4 absolute bg-white shadow-md border top-8 right-0  z-10 ${
                menu4 ? 'opacity-1 py-4 transition' : 'opacity-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li style={{ animationDelay: '700ms' }} className="my-3">
            <a href="#competitors">Конкурентам</a>
          </li>
          <li
            style={{ animationDelay: '800ms' }}
            className="my-3 relative z-10"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                removeTabs()
                setMenu5(!menu5)
              }}
            >
              Сотрудникам{' '}
              <FaCaretDown
                style={{
                  transform: menu5 ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={`flex flex-col w-60 px-4 absolute bg-white shadow-md border top-8 right-0  z-10 ${
                menu5 ? 'opacity-1 py-4 transition' : 'opacity-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li style={{ animationDelay: '900ms' }} className="my-3">
            <a href="#vacancy">Вакансии</a>
          </li>
          <li style={{ animationDelay: '1000ms' }} className="my-3">
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          drawer ? 'animDrawer' : ''
        } fixed top-0 left-0 w-50 h-screen bg-white border px-4 py-5 transition duration-500 z-40 2xl:hidden`}
        style={{ transform: drawer ? 'translateX(0%)' : 'translateX(-100%)' }}
      >
        <div className="flex items-center justify-between pb-4">
          <div className="border-2 p-2 mr-2" onClick={() => setDrawer(false)}>
            <FaBars />
          </div>
          <p className="flex-1 text-2xl sm:text-3xl font-bold italic">
            Transavto-7
          </p>
        </div>
        <hr />
        <ul className="h-full overflow-y-auto px-2 py-4 text-xl">
          <li style={{ animationDelay: '100ms' }} className="my-3">
            <a href="#about">О нас</a>
          </li>
          <li style={{ animationDelay: '200ms' }} className="my-3">
            <a href="#services">Все Услуги</a>
          </li>
          <li
            style={{ animationDelay: '300ms' }}
            className={`py-1 my-2 ${menu1 && 'bg-[#EFF2F8] px-2'}`}
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu1(!menu1)}
            >
              Предрейсовые осмотры{' '}
              <FaCaretDown
                style={{ transform: menu1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              className={`flex flex-col pl-4 overflow-hidden transition ${
                menu1 ? 'h-fit' : 'h-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '400ms' }}
            className={`py-1 my-2 ${menu2 && 'bg-[#EFF2F8] px-2'}`}
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu2(!menu2)}
            >
              Заказать автобус{' '}
              <FaCaretDown
                style={{ transform: menu2 ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              className={`flex flex-col pl-4 overflow-hidden transition ${
                menu2 ? 'h-fit' : 'h-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '500ms' }}
            className={`py-1 my-2 ${menu3 && 'bg-[#EFF2F8] px-2'}`}
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu3(!menu3)}
            >
              Блог{' '}
              <FaCaretDown
                style={{ transform: menu3 ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              className={`flex flex-col pl-4 overflow-hidden transition ${
                menu3 ? 'h-fit' : 'h-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li
            style={{ animationDelay: '600ms' }}
            className={`py-1 my-2 ${menu4 && 'bg-[#EFF2F8] px-2'}`}
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu4(!menu4)}
            >
              Законадательство{' '}
              <FaCaretDown
                style={{ transform: menu4 ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              className={`flex flex-col pl-4 overflow-hidden transition ${
                menu4 ? 'h-fit' : 'h-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li style={{ animationDelay: '700ms' }} className="my-3">
            <a href="#competitors">Конкурентам</a>
          </li>
          <li
            style={{ animationDelay: '800ms' }}
            className={`py-1 my-2 ${menu5 && 'bg-[#EFF2F8] px-2'}`}
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu5(!menu5)}
            >
              Сотрудникам{' '}
              <FaCaretDown
                style={{ transform: menu5 ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              className={`flex flex-col pl-4 overflow-hidden transition ${
                menu5 ? 'h-fit' : 'h-0'
              }`}
            >
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
              <a href="#!">Lorem ipsum</a>
            </div>
          </li>
          <li style={{ animationDelay: '900ms' }} className="my-3">
            <a href="#vacancy">Вакансии</a>
          </li>
          <li style={{ animationDelay: '1000ms' }} className="my-3">
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
      <div
        className="fixed top-0 right-0 w-full h-full bg-black/70 transition duration-500 2xl:hidden z-30"
        style={{
          opacity: drawer ? '1' : '0',
          transform: drawer ? 'translateX(0%)' : 'translateX(100%)',
        }}
        onClick={() => setDrawer(false)}
      ></div>
    </nav>
  )
}

export default Navbar
