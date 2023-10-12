function Welcome({ goToQuiz }) {


    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-4 flex-grow mt-32 mx-8 ">
                <h1 className="text-3xl font-light mb-4 leading-tight mb-60">Welcome to <span className='font-medium'>Credit Hike! </span> Explore the peaks and valleys of using a credit card, without the real-life risks.</h1>
                <button onClick={goToQuiz} className="bg-green text-white py-2 px-4 rounded "> Let's do this </button>
            </div>
        </div>
    )
}

export default Welcome;