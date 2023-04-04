import React from 'react'

const Footer = () => {

  var year = new Date().getFullYear();
  return (
    

<footer className="bg-white dark:bg-[#D4D4D4]">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-center">
        <p className='font-extrabold text-[38px] text-[#EA8D8D]'>Ima<span className='font-extrabold text-[38px] text-[#A890FE]'>gic</span></p> 
      
         
      </div>
      <div className="flex justify-center">
      
        <span className="text-sm  mt-3 text-gray-500 text-center dark:text-gray-400">© {year} <a href="https://flowbite.com/" className="hover:underline">Suprie Jain</a>. All Rights Reserved. </span>
         
      </div>
      <div className="flex justify-center">
      <a href="https://github.com/suprie611" className="text-gray-500 hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  <span className="sr-only">GitHub account</span>
              </a>

              <a href="https://www.linkedin.com/in/suprie611
" className="text-gray-500 hover:text-gray-900 dark:hover:text-black ml-5">
                                <svg
                    className="w-5 h-5 mt-3 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                    </svg>


                  <span className="sr-only">Linkedin account</span>
              </a>

              <a href="mailto:supriejain611@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-black ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>


                  <span className="sr-only">Gmail account</span>
              </a>
      
            
      
    </div>
    
            
          
     
    </div>
</footer>


  )
}

export default Footer