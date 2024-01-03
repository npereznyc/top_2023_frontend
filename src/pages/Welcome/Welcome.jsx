
function Welcome({ goToOnboarding }) {

    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-4 flex-grow mt-32 mx-8 ">
                <button onClick={goToOnboarding} /* className="bg-green text-white py-2 px-4 rounded " */ >
                    <h1 className="text-3xl font-light mb-4 leading-tight mb-60">Welcome to <span className='font-medium'>Credit Hike! </span> Explore the peaks and valleys of using a credit card, without the real-life risks.</h1>
                    Tap to continue...
                </button>
            </div>
        </div>
    )
}

export default Welcome;