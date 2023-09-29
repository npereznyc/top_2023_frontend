function Welcome(){

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img className="mb-4" alt='placeholder' src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" /> 
            <h1 className="text-2xl font-bold mb-4">WELCOME</h1>
            <div>
                <p className="mb-4">SMALL BLURB: Lorem ipsum dolor sit amet consectetur. Cras tortor egestas iaculis urna urna nisl purus. Tempus vel at id sem malesuada accumsan.</p>
            </div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200"> START QUIZ </button>
        </div>
    )


}

export default Welcome;