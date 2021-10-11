import React from "react";

export function ConstructionHint(): JSX.Element {
    return (
        <div className="h-screen grid grid-rows-3 grid-flow-col gap-4">
            <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat">
                <div
                    className="grid place-items-center w-3/5 mx-auto p-10 my-20 sm:my-auto border-4 border-teal-600 bg-opacity-70 text-teal-600 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">

                    <h1 className="text-4xl font-bold uppercase transition duration-500">
                        <i className={"fa fa-tools fa-fw"}/> Under construction...
                    </h1>
                    <h2 className="text-xl text-gray-300 transition duration-500">
                         I'm almost there to deliver my new portfolio. Hang in there. You can contact me through different means.
                    </h2>
                    <div className="grid grid-cols-3 gap-4 whitespace-nowrap">

                        <a href="https://github.com/BolZer" target={"_blank"} title="Jan Nöhles at Github"
                           className="md:w-32 tracking-wide font-bold rounded border-2 border-teal-500 hover:text-white hover:border-yellow-600 hover:bg-yellow-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                            <span className="mx-auto">
                              <i className="fab fa-github fa-fw"/> Github
                            </span>
                        </a>

                        <a href="https://twitter.com/esotericDraugr" target={"_blank"} title="Jan Nöhles at Twitter"
                           className="md:w-32 tracking-wide font-bold rounded border-2 border-teal-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                            <span className="mx-auto">
                                <i className={"fab fa-twitter fa-fw"}/> Twitter
                            </span>
                        </a>

                        <a href="#" target={"_blank"} title="Jan Nöhles at Xing"
                           className="md:w-32 tracking-wide font-bold rounded border-2 border-teal-500 hover:text-white hover:border-red-500 hover:bg-red-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                            <span className="mx-auto">
                              <i className={"fab fa-xing fa-fw"}/> Xing
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}