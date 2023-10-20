import NavBar from "../../components/NavBar/NavBar";
function Glossary({isSidebarOpen, toggleSidebar}) {


    return (
        <>
        <div className='flex flex-col sm:flex-row'>
            <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        </div>
        <div className="relative flex flex-col items-center justify-center h-screen">

            GLOSSARY
        </div>
        </>
        
    )
}

export default Glossary;