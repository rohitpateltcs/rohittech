import { HeartIcon } from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <>
      <div className="text-black flex items-center flex-col">
        <h1 className="py-6 text-4xl font-bold">Our Services</h1>
        <div className="md:flex space-x-14">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-full h-56"
            />
          </div>

          <div className="py-4">
            <div className="flex space-x-6 pb-4">
              <div>
                <HeartIcon className="h-10" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Web Devoloper</h1>
                <p className="font-serif">
                  We make tutorials of all the Programming and Scripting
                  languages to help for free.
                </p>
              </div>
            </div>

            {/* 2nd div */}
            <div className="flex space-x-6 pb-4">
              <div>
                <HeartIcon className="h-10" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Web Devoloper</h1>
                <p className="font-serif">
                  We make tutorials of all the Programming and Scripting
                  languages to help for free.
                </p>
              </div>
            </div>
            {/* 3rd div */}
            <div className="flex space-x-6">
              <div>
                <HeartIcon className="h-10" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Web Devoloper</h1>
                <p className="font-serif">
                  We make tutorials of all the Programming and Scripting
                  languages to help for free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
