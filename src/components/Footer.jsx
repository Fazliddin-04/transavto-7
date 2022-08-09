import React from 'react'
import {
  FaVk,
  FaInstagram,
  FaYoutube,
  FaOdnoklassniki,
  FaTwitter,
  FaBusAlt,
  FaUserCircle,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="text-center text-black/70">
      <div className="flex flex-wrap justify-center gap-5 mb-5">
        <a href="#!">Все услуги</a>
        <a href="#!">Оставить отзыв</a>
        <a href="#!">Контакты</a>
        <a href="#!">Политика конфиденциальности</a>
      </div>
      <hr />
      <p className="my-5">
        Мы будем рады, если вы присеодинитесь к нам в соц. сетях:
      </p>
      <div className="flex items-center justify-center gap-5 text-4xl text-[#5374CA]">
        <a href="#!">
          <div className="relative">
            <FaVk />
            <FaUserCircle className="absolute top-[-5px] right-[-10px] text-sm z-10 text-black" />
          </div>
        </a>
        <a href="#!">
          <div className="relative">
            <FaVk />
            <FaBusAlt className="absolute top-[-5px] right-[-10px] text-sm z-10 text-black" />
          </div>
        </a>
        <a href="#!">
          <FaInstagram />
        </a>
        <a href="#!">
          <FaYoutube />
        </a>
        <a href="#!">
          <FaOdnoklassniki />
        </a>
        <a href="#!">
          <FaTwitter />
        </a>
      </div>
      <small className="my-10 block">
        Мы работаем на упрощённой системе налогообложенияб без НДС
      </small>
    </footer>
  )
}

export default Footer
