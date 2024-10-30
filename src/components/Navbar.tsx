import { FC } from "react";
import Logo from '../assets/Logo.png'

export const Navbar: FC = () => {
    return (
        <div className="h-20 bg-white shadow-md">
            <div className="w-full h-full px-4 m-auto max-w-7xl">
                <div className="flex flex-row items-center justify-between h-full">
                    <img src={Logo} width={100} />
                    <div>
                        <ul className="flex flex-row space-x-4">
                            <li className="font-bold text-md text-primary">
                                <a href="">Visit London</a>
                            </li>
                            <li className="font-bold text-md text-primary">
                                <a href="">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}