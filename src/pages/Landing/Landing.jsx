function Landing({ goToWelcome }) {


    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-green">
            <div className="flex flex-col items-center space-y-4 flex-grow mt-20">
                <h1 className="text-5xl text-white font-semi-bold mb-4">Credit Hike</h1>
                <button onClick={goToWelcome} className="bg-white text-black py-2 px-4 rounded "> Let's go! </button>
            </div>
            <img className="absolute bottom-0 w-full mb-4" alt='illustration of a person with a backpack hiking' src="/WelcomeHike.png"/>
        </div>
    )
}

export default Landing;