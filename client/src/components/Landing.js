import React, { Component } from "react";

class Landing extends Component {
   render() {
      return (
         <div>
            <section className="bg-red-400">
               <div className="container mx-auto px-6 text-center py-20">
                  <h2 className="mb-6 text-4xl font-bold text-center text-white">
                     Kalendarko
                  </h2>
                  <h3 className="my-4 text-2xl text-white">
                     Get yourself best calendar app out there
                  </h3>
                  <a href="/auth/google">
                     <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                        Try now!
                     </button>
                  </a>
               </div>
            </section>
            <section className="bg-gray-100">
               <div className="container mx-auto px-6 py-20">
                  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                     Testimonials
                  </h2>
                  <div className="flex flex-wrap">
                     <div className="w-full md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded shadow py-2">
                           <p className="text-gray-800 text-base px-6 mb-5">
                              Man cannot live by bread alone; he must have
                              peanut butter and Kalendarko!
                           </p>
                           <p className="text-gray-500 text-xs md:text-sm px-6">
                              James A. Garfield
                           </p>
                        </div>
                     </div>
                     <div className="w-full md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded shadow py-2">
                           <p className="text-gray-800 text-base px-6 mb-5">
                              My life has no purpose, no direction, no aim, no
                              meaning, and yet I'm happy. I can't figure it out.
                              What am I doing right? Is it because of
                              Kalendarko?
                           </p>
                           <p className="text-gray-500 text-xs md:text-sm px-6">
                              Charles Schulz
                           </p>
                        </div>
                     </div>
                     <div className="w-full md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded shadow py-2">
                           <p className="text-gray-800 text-base px-6 mb-5">
                              The only way to keep your health is to eat what
                              you don't want, drink what you don't like, and do
                              what you'd rather not. Kalendarko is the only good
                              thing left in my life now.
                           </p>
                           <p className="text-gray-500 text-xs md:text-sm px-6">
                              Mark Twain
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      );
   }
}

export default Landing;
