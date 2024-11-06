import { FC } from "react";
import London from '../assets/london.jpg'

export const VisitLondon: FC = () => {
    return (
        <section>
            <div className="w-full px-2 py-6 bg-gray-50">
                <div className="flex flex-col items-center w-full px-2 pt-16 m-auto max-w-7xl">
                    <h2 className="text-3xl font-bold text-center">Visit London</h2>
                    <div className="flex flex-col items-center justify-between w-full pt-8 space-y-4 md:flex-row spaxe-x-2 sm:space-y-0">
                        <div className="self-center sm:max-w-[45%]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                            culpa alias quibusdam autem animi dolores, veritatis, eligendi repellat id p
                            erspiciatis deleniti. Molestias nisi pariatur obcaecati eos corporis, eaque ut saepe.
                        </div>
                        <div className="sm:max-w-[50%] w-full">
                            <figure className="overflow-hidden rounded-xl">
                                <img src={London} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}