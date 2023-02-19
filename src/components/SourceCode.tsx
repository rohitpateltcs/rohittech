const SourceCode = () => {
  return (
    <>
      <div className="flex items-center justify-center py-4">
        <h1 className="text-green-400 font-bold text-2xl">
          MyWork And SourceCode
        </h1>
      </div>

      {/* Bottomside */}
      <div>
        {/* Heading  */}

        <div className="max-w-[400px] mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <p className="font-serif">
            ThapaTechnical works and Youtube videos source code. Just click on
            any video and get the source code and we have technical article
            also. Have a great day.
          </p>
        </div>

        {/* Blog and Post */}

        <div
          className="bg-fixed"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/7794441/pexels-photo-7794441.jpeg?auto=compress&cs=tinysrgb&w=600")`,
          }}
        >
          <div className="max-w-[400px] mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl items-center justify-center pt-20">
            <h1 className="font-bold text-3xl tracking-wider">
              Lucky Technology
            </h1>
            <p className=" py-4 font-sans tracking-widest ">
              HOuse of web Devoloper and AI Engineer
            </p>
            <div className="flex space-x-24">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                VBLOG
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                BLOG
              </button>
            </div>
          </div>
        </div>

        {/* Source Code */}
      </div>
    </>
  );
};

export default SourceCode;
