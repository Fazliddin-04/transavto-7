import React, { Suspense, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

import bgIntro from './assets/bg-intro.png'
import docs from './assets/ducs.png'
import passanger from './assets/passanger.png'
import doctruck from './assets/doctruck.png'
import truck from './assets/truck.png'
import car from './assets/car.png'
import security from './assets/security.png'
import docscard from './assets/docscard.png'
import scales from './assets/scales.png'
import checked from './assets/checked.png'
import coin from './assets/coin.png'
import like from './assets/like.png'
import time from './assets/time.png'
import mortarboard from './assets/mortarboard.png'
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({
    phone: '',
  })

  const { phone } = inputData

  // Phone number input contains only numbers
  const onMutate = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setInputData({ ...inputData, phone: e.target.value })
    }
  }

  // Phone number submitting
  const onSubmit = (e) => {
    e.preventDefault();

    window.location.reload()
  }

  // Scroll Animation
  const boxes = useRef(null);

  window.addEventListener('scroll', checkBoxes)

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.current.querySelectorAll('.animate').forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if (boxTop < triggerBottom) {
        box.classList.add('animRight')
      } else {
        box.classList.remove('animRight')
      }
    })

    boxes.current.querySelectorAll('.animate div').forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if (boxTop < triggerBottom) {
        box.classList.add('animRight')
      } else {
        box.classList.remove('animRight')
      }
    })
  }

  return (
    <div onScroll={checkBoxes} ref={boxes}>
      <Suspense fallback={<p>Loading...</p>} >
        <Navbar />
        <section id="home" className="my-10 intro container px-4 mx-auto relative z-[1] h-[70vh] flex flex-col justify-center text-white" style={{ background: `center / cover no-repeat url(${bgIntro})` }}>
          <div className="ml-[2vw] md:ml-[7vw] lg:ml-[10vw]">
            <h1 className="text-3xl lg:text-5xl font-bold animRight" style={{ animationDelay: '100ms', maxWidth: '800px', width: '100%' }}>
              Купить пакет документов
              по безопасности дорожного движения
            </h1>
            <p className="text-xl sm:text-2xl my-5 sm:my-8 animRight" style={{ animationDelay: '200ms' }}>Оставляйте заявку!</p>
            <form onSubmit={onSubmit} className="flex flex-wrap gap-3">
              <input type="tel" onChange={onMutate} value={phone} className="bg-white rounded-xl p-2 sm:p-4 text-black animTop" style={{ animationDelay: '400ms' }} placeholder="Номер телефона" required />
              <button className="p-2 sm:p-4 bg-[#E83A2D] rounded-xl animTop" style={{ animationDelay: '500ms' }}>Оставить заявку</button>
            </form>
          </div>

        </section>
        <section id="about" className="bg-[#EFF2F8] py-10">
          <h2 className="text-3xl text-center font-bold mb-10">Что это?</h2>
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-10 px-4">
            <p className="animate max-w-[660px]">
              Пакет документов по безопасности дорожного движения -
              это самый объемный перечень нормативных документов
              и проводимых мер, необходимых для обеспечения безопасной работы с транспортными средствами.
              <br />
              <br />
              Сегодня почти каждое предприятие имеет на балансе свой транспорт. По этой причине действующее законодательство предусматривает ряд правил и мер, соблюдение которых необходимо для обеспечения безопасности дорожного движения.
              <br />
              <br />
              При этом нормативно-правовая база в сфере БДД претерпевает регулярные обновления. Мы всегда следим за изменениями
              и предоставляем своим клиентам самую актуальную информацию на текущий период времени.
            </p>
            <img src={docs} alt="docs" className="block object-cover animate" width={292} />
          </div>
        </section>
        <section className="animate py-10">
          <h2 className="text-3xl text-center font-bold mb-10">Кому нужно?</h2>
          <div className="flex items-center flex-col justify-center flex-wrap lg:flex-nowrap gap-5 px-4 max-w-[1047px] w-full mx-auto">
            <p>
              Приказом Минтранса № 145 от 30.04.2021 предъявляются требования по обеспечению безопасности при организации и осуществлении перевозок автомобильным транспортом
              к следующим субъектам транспортной деятельности:
            </p>
            <p className="font-bold text-center">Юридические лица и индивидуальные предприниматели, которые осуществляют:</p>
            <div className="flex items-center gap-5 border-2 w-full p-2">
              <img src={passanger} alt="passanger" />
              <p>
                перевозки пассажиров на основании договора перевозки пассажира или договора фрахтования
              </p>
            </div>
            <div className="flex items-center gap-5 border-2 w-full p-2">
              <img src={doctruck} alt="passanger" />

              <p>
                перевозки грузов автомобильным транспортом на основании договора перевозки
              </p>

            </div>
            <div className="flex items-center gap-5 border-2 w-full p-2">
              <img src={truck} alt="passanger" />

              <p>
                перемещение лиц, кроме водителя, и (или) материальных объектов автобусами
                и грузовыми автомобилями без заключения указанных договоров
              </p>
            </div>
            <p className="font-bold text-center">Физических лица, осуществляющие:</p>
            <div className="flex items-center gap-5 border-2 w-full p-2">
              <img src={car} alt="passanger" />
              <p>
                эксплуатацию грузовых автомобилей, с разрешенной максимальной массой которых
                превышает 3500 кг и автобусов
              </p>
            </div>
          </div>
        </section>
        <section className="animate py-10">
          <h2 className="text-3xl text-center font-bold mb-10">Зачем?</h2>
          <div className="flex items-center flex-col justify-center flex-wrap lg:flex-nowrap gap-5 px-4 max-w-[1047px] w-full mx-auto">
            <p>
              Федеральный закон от 10.12.1995 №196-ФЗ «О безопасности дорожного движения» является документом, выполнение положений которого существенно уменьшает количество ДТП
              на дорогах. При этом для безопасности водителя, пассажиров и пешеходов, владелец организации обязан осуществлять деятельность, направленную на обеспечение БДД
              и повышение квалификации своих сотрудников, управляющих транспортом предприятия.
              <br /><br />
              Вы можете обратиться в нашу компанию, чтобы решить вопрос с обеспечением безопасности дорожного движения:
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 border-2 w-full">
              <p className="flex-1 p-5 lg:p-10">
                Наши специалисты проведут для вас бесплатный аудит по безопасности дорожного движения.
              </p>
              <img src={security} alt="passanger" className="flex-1 w-full block object-cover" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 border-2 w-full">
              <p className="flex-1 p-5 lg:p-10">
                Предлагаем заключить с нами договор
                на ведение документации по БДД нашими специалистами на постоянной основе.
              </p>
              <img src={docscard} alt="passanger" className="flex-1 w-full block object-cover" />
            </div>
            <div className="flex items-center gap-5 border-2 w-full p-10 relative mt-10">
              <div className="absolute top-0 left-1/2 bg-white px-5" style={{ transform: 'translate(-50%,-50%)' }}>
                <img src={scales} alt="passanger" />
              </div>

              <p>
                Если вы хотите вести свою документацию самостоятельно, вы можете ,купить пакет необходимый документов у нас на сайте. Такой пакет документов рекомендовано
                к обновлять каждый год, так как документы периодически меняются, а мы оперативно их обновляем.
              </p>
            </div>
          </div>
        </section>
        <section className="animate py-10 flex items-center justify-center">
          <div className="bg-white shadow-xl border rounded-2xl text-center py-10 px-14">
            <h3 className="text-xl font-bold text-[#5374CA]">Купить пакет документов</h3>
            <small>Оплатите документы</small>
            <a href="#!" className="mt-5 block bg-[#5374CA] rounded-2xl text-white p-1">Скачать</a>
          </div>
        </section>
        <section className="animate py-10">
          <h2 className="text-3xl text-center font-bold mb-10">В пакет входит:</h2>
          <div className="flex items-center flex-col justify-center flex-wrap lg:flex-nowrap gap-5 px-4 max-w-[1047px] w-full mx-auto">
            <Faq que={'Должностные инструкции'} ans={`
            <a href="#!">Должностная инструкция ответственного за БДД;</a>
            <a href="#!">Должностная инструкция ответственного за техническое состояние;</a>
            <a href="#!">Должностная инструкция контролера техсостояния ТС;</a>
            <a href="#!">Должностная инструкция лица ответственного за выдачу и учет путевых листов;</a>
            <a href="#!">Должностная инструкция лица управляющего легковым автомобилем;</a>
            <a href="#!">Должностная инструкция лица управляющего грузовым автомобилем;</a>
            <a href="#!">Должностная инструкция лица управляющего автобусом;</a>
            <a href="#!">Должностная инструкция лица, перевозящего крупногабаритные и тяжеловесные грузы;</a>
            <a href="#!">Должностная инструкция лица, перевозящего опасные грузы;</a>
            <a href="#!">Должностная инструкция лица управляющего авто со спецсигналами.</a>
            `} />
            <Faq que={'Приказы о назначении ответственных лиц'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'Инструктажи'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'Испытание (стажировка) водителей'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'Медицинские осмотры'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'Контроль технического состояния, выпуск на линию'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'Повышение квалификации водителей'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
            <Faq que={'ДТП'} ans={`<a href="#!">Должностная инструкция ответственного за БДД;</a>`} />
          </div>
        </section>
        <section className="animate py-10">
          <h2 className="text-3xl text-center font-bold mb-10">Преимущества</h2>
          <div className="flex items-center flex-col justify-center flex-wrap lg:flex-nowrap gap-5 px-4 max-w-[1047px] w-full mx-auto text-sm sm:text-lg">
            <div className="flex items-center gap-10 border-2 w-full p-4 rounded-2xl shadow-xl">
              <div className="bg-[#5374CA] p-4 ml-4 w-1/7 rounded-full ">
                <img src={checked} alt="checked" width={38} />
              </div>
              <p className="font-semibold w-2/3">
                Вся документация в одном месте. Экономия времени
                на поиск нужных документов.
              </p>
            </div>
            <div className="flex items-center gap-10 border-2 w-full p-4 rounded-2xl shadow-xl">
              <div className="bg-[#5374CA] p-4 ml-4 w-1/7 rounded-full">
                <img src={like} alt="checked" width={38} />
              </div>
              <p className="font-semibold  w-2/3">
                Гарантия качества от федеральной компании Трансавто-7. Мы гарантируем актуальность информации. Если клиент найдёт ошибку, мы вернем деньги.
              </p>
            </div>
            <div className="flex items-center gap-10 border-2 w-full p-4 rounded-2xl shadow-xl">
              <div className="bg-[#5374CA] p-2 ml-4 w-1/7 rounded-full ">
                <img src={coin} alt="checked" width={58} />
              </div>
              <p className="font-semibold w-2/3">
                Низкая стоимость: стоимость наших услуг значительно ниже, чем на рынке.     </p>
            </div>
            <div className="flex items-center gap-10 border-2 w-full p-4 rounded-2xl shadow-xl">
              <div className="bg-[#5374CA] p-4 ml-4 w-1/7 rounded-full ">
                <img src={time} alt="checked" width={38} />
              </div>
              <p className="font-semibold w-2/3">
                Экономия времени: вам не нужно постоянно следить
                за изменениями в законодательстве, мы сделаем все за вас
              </p>
            </div>
            <div className="flex items-center gap-10 border-2 w-full p-4 rounded-2xl shadow-xl">
              <div className="bg-[#5374CA] p-4 ml-4 w-1/7 rounded-full ">
                <img src={mortarboard} alt="checked" width={38} />
              </div>
              <p className="font-semibold w-2/3">
                Опыт работы более 15 лет
              </p>
            </div>
          </div>
        </section>
        <section className="animate py-10 flex items-center justify-center">
          <div className="bg-white shadow-xl border rounded-2xl text-center py-10 px-14">
            <h3 className="text-xl font-bold text-[#5374CA]">Купить пакет документов</h3>
            <small>Оплатите документы</small>
            <a href="#!" className="mt-5 block bg-[#5374CA] rounded-2xl text-white p-1">Скачать</a>
          </div>
        </section>
        <Footer />
      </Suspense>
    </div>

  );
}

export default App;
