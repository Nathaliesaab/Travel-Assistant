import { FC } from "react";
import LandingIllustration from '../assets/Landing.png'

export const AboutUs: FC = () => {
    return (
        <section>
            <div className="w-full px-2 py-6">

                <div className="flex flex-col items-center w-full px-2 pt-16 m-auto max-w-7xl">
                    <h1 className="py-2 text-5xl">About Us</h1>
                    <div className="flex flex-col items-center justify-between w-full md:flex-row spaxe-x-2">
                        <div className="self-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                            culpa alias quibusdam autem animi dolores, veritatis, eligendi repellat id p
                            erspiciatis deleniti. Molestias nisi pariatur obcaecati eos corporis, eaque ut saepe.
                        </div>
                        <figure>
                            <img src={LandingIllustration} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}