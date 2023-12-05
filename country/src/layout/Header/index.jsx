import React from 'react'

function Header() {
  function handleTheme() {
    document.body.classList.toggle("dark")
  }


  return (
    <header>
      <button onClick={handleTheme}><i class="fa-solid fa-moon"> Dark Mode</i></button>
    </header>
  )
}

export default Header


