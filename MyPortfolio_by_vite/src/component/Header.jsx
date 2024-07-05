import React from "react";

export default function Header() {
  
  return (
    <div className="bg-slate-400 flex justify-between px-4 py-3 lg:text-2xl md:text-xl">
      
        <div className="flex items-center"><img
          src="/mine.png"
          alt="photo"
          height={300}
          width={110}
          className="rounded-full"
        />
        <h3 className="font-serif py-10 ml-4 lg:text-3xl md:text-2xl text-xl font-semibold   text-slate-900">DHAIRYA SHAH</h3>
        
      </div>
      <nav class="bg-white dark:bg-slate-400 border-gray-200  rounded-lg">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    
        <button id="hamburgerButton" type="button" class="inline-flex items-center p-2 w-10 mt-9 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <div className="bg-transparent py-10 hidden w-full md:block md:w-auto sm:w-auto">
      <ul className="font-serif flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-slate-400 md:dark:bg-slate-400 ">
        <li>
          <a href="#" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#About Me" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#My Projects" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#My Skills" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
        </li>
        <li>
          <a href="#Contact" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>

      </div>
      
    </div>
</nav>


</div>
    
  );
}
