import './NavBar'

function NavBar({ toggleSidebar, isSidebarOpen }) {


    return (

        <nav className=" bg-white border-gray-200 dark:bg-gray-900 p-4">
            {/* Logo */}
            <div className=' flex justify-between mx-auto p-4'>
            <a href="https://flowbite.com/" className="flex ">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Credit Hike</span>
            </a>

                {/* Hamburger Menu */}
                <div className='flex sm:hidden'>
                    <button onClick={toggleSidebar} type="button" className={`flex self-end p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg ${isSidebarOpen ? 'hidden' : 'block'}`}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
            <aside className={`fixed top-0 left-0 z-40 bg-white transition-transform -translate-x-full sm:translate-x-0 ${isSidebarOpen ? 'w-screen h-screen translate-x-0' : '-translate-x-full'} sm:relative`} aria-label="Sidebar">
                
                <button onClick={toggleSidebar} type="button" className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} >
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                    </ul>
            </aside>
            </div>
        </nav >

    )

}

export default NavBar