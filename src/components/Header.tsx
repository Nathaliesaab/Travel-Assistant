import { FC } from "react";
import LandingIllustration from '../assets/Landing.png'
import { Search } from "./Search";

export const Header: FC = () => {
    return (
        <section>
            <header>
                <div className="w-full">
                    <div className="flex flex-col justify-between w-full px-2 pt-16 m-auto max-w-7xl landing__page">
                        <div className="self-center max-w-3xl">
                            <h1 className="mb-4 text-6xl font-medium text-center text-primary">Most awarded online travel assistant</h1>
                            <h2 className="text-3xl font-medium text-center">Travel Smart</h2>
                        </div>
                        <Search />
                        <figure>
                            <img src={LandingIllustration} />
                        </figure>
                    </div>
                </div>
            </header>
        </section>
    )
}