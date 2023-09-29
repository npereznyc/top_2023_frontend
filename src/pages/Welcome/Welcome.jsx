function Welcome() {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            
            <img className="mb-4" alt='placeholder' src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
            <h1 className="text-2xl font-semi-bold mb-4">WELCOME</h1>
            
            <section className="bg-lavender-300 p-4 text-center mb-4">

                <p className="mb-4">SMALL BLURB: Lorem ipsum dolor sit amet consectetur. Cras tortor egestas iaculis urna urna nisl purus. Tempus vel at id sem malesuada accumsan.</p>

                <button className="bg-purple text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200"> START QUIZ </button>
                {/* This is a placeholder button - we'll be using a  */}

            </section>
        </div>
    )


}

export default Welcome;