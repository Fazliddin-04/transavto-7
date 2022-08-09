import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

function Faq({ que, ans }) {
  const [openBox, setOpenBox] = useState(false)
  const answer = useRef()

  useEffect(() => {
    answer.current.innerHTML = ans
  }, [ans])

  return (
    <div className="w-full border-2">
      <div
        className="flex items-center gap-4 p-4 border-b-2"
        onClick={() => setOpenBox(!openBox)}
      >
        <h2 className="text-xl font-semibold">{que}</h2>
        <FaChevronDown size={22} color="#878787" />
      </div>
      <p
        ref={answer}
        className={`flex flex-col gap-2 overflow-hidden transition ${
          openBox ? 'h-fit p-4 opacity-1' : 'h-0 opacity-0'
        }`}
      ></p>
    </div>
  )
}

export default Faq
