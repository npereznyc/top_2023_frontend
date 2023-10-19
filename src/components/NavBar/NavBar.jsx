import './NavBar'

function NavBar({ toggleSidebar, isSidebarOpen }) {


    return (

        <nav className=" bg-white dark:bg-gray-900 p-4">
            {/* Logo */}
            <div className=' flex justify-between mx-auto p-4'>
                <a href="https://flowbite.com/" className="flex ">

                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Credit Hike</span>
                </a>
                {/* Hamburger Menu */}
                <div className='flex sm:hidden'>
                    <button onClick={toggleSidebar} type="button" className={`flex self-end p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg ${isSidebarOpen ? 'hidden' : 'block'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.17188C0 0.524666 0.524666 0 1.17188 0H23.8281C24.4753 0 25 0.524666 25 1.17188C25 1.81908 24.4753 2.34375 23.8281 2.34375H1.17188C0.524666 2.34375 0 1.81908 0 1.17188ZM0 9.375C0 8.72779 0.524666 8.20312 1.17188 8.20312H23.8281C24.4753 8.20312 25 8.72779 25 9.375C25 10.0222 24.4753 10.5469 23.8281 10.5469H1.17188C0.524666 10.5469 0 10.0222 0 9.375ZM0 17.5781C0 16.9309 0.524666 16.4062 1.17188 16.4062H23.8281C24.4753 16.4062 25 16.9309 25 17.5781C25 18.2253 24.4753 18.75 23.8281 18.75H1.17188C0.524666 18.75 0 18.2253 0 17.5781Z" fill="#181C31" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <aside className={`fixed top-0 left-0 z-40 bg-white transition-transform -translate-x-full sm:translate-x-0 ${isSidebarOpen ? 'w-screen h-screen translate-x-0' : '-translate-x-full'} sm:relative`} aria-label="Sidebar">
                    <div className=' flex justify-between mx-auto p-4'>
                        <a href="https://flowbite.com/" className="flex ">

                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Credit Hike</span>
                        </a>
                        <button onClick={toggleSidebar} type="button" className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.17188C0 0.524666 0.524666 0 1.17188 0H23.8281C24.4753 0 25 0.524666 25 1.17188C25 1.81908 24.4753 2.34375 23.8281 2.34375H1.17188C0.524666 2.34375 0 1.81908 0 1.17188ZM0 9.375C0 8.72779 0.524666 8.20312 1.17188 8.20312H23.8281C24.4753 8.20312 25 8.72779 25 9.375C25 10.0222 24.4753 10.5469 23.8281 10.5469H1.17188C0.524666 10.5469 0 10.0222 0 9.375ZM0 17.5781C0 16.9309 0.524666 16.4062 1.17188 16.4062H23.8281C24.4753 16.4062 25 16.9309 25 17.5781C25 18.2253 24.4753 18.75 23.8281 18.75H1.17188C0.524666 18.75 0 18.2253 0 17.5781Z" fill="#181C31" />
                            </svg>
                        </button>
                    </div>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.79252 0.232144C7.07852 0.531768 7.06748 1.00651 6.76786 1.29252L2.62192 5.25H12.625C15.5935 5.25 18 7.65647 18 10.625C18 13.5935 15.5935 16 12.625 16H9.75C9.33579 16 9 15.6642 9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H12.625C14.7651 14.5 16.5 12.7651 16.5 10.625C16.5 8.4849 14.7651 6.75 12.625 6.75H2.62192L6.76786 10.7075C7.06748 10.9935 7.07852 11.4682 6.79252 11.7679C6.50651 12.0675 6.03177 12.0785 5.73214 11.7925L0.232143 6.54252C0.0838826 6.401 0 6.20496 0 6C0 5.79504 0.0838826 5.59901 0.232143 5.45748L5.73214 0.207485C6.03177 -0.0785198 6.50651 -0.0674792 6.79252 0.232144Z" fill="#181C31" />
                                </svg>
                                <span className="ml-3">Restart Game</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                    <path d="M10 3.29168C8.40773 1.86656 6.30506 1 4 1C2.94809 1 1.93834 1.18046 1 1.51212V15.7621C1.93834 15.4305 2.94809 15.25 4 15.25C6.30506 15.25 8.40773 16.1166 10 17.5417M10 3.29168C11.5923 1.86656 13.6949 1 16 1C17.0519 1 18.0617 1.18046 19 1.51212V15.7621C18.0617 15.4305 17.0519 15.25 16 15.25C13.6949 15.25 11.5923 16.1166 10 17.5417M10 3.29168V17.5417" stroke="#181C31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Glossary</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </nav >

    )

}

export default NavBar