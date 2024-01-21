"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
    const pathname = usePathname();

    const selectedColor = "#fff";
    const color = "#c8cdff";

    return (
        <div className="w-full z-40">
            <div className="mx-auto mb-2 flex w-11/12 justify-evenly rounded-lg bg-primary py-2 shadow-md">
                <Link href={"/streak"}>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678C10.7366 13.2989 11 12.663 11 12C11 10.62 10.5 10 10 9C8.928 6.857 9.776 4.946 12 3C12.5 5.5 14 7.9 16 9.5C18 11.1 19 13 19 15C19 15.9193 18.8189 16.8295 18.4672 17.6788C18.1154 18.5281 17.5998 19.2997 16.9497 19.9497C16.2997 20.5998 15.5281 21.1154 14.6788 21.4672C13.8295 21.8189 12.9193 22 12 22C11.0807 22 10.1705 21.8189 9.32122 21.4672C8.47194 21.1154 7.70026 20.5998 7.05025 19.9497C6.40024 19.2997 5.88463 18.5281 5.53284 17.6788C5.18106 16.8295 5 15.9193 5 15C5 13.847 5.433 12.706 6 12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5Z"
                            stroke={
                                pathname === "/streak" ? selectedColor : color
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <Link href={"/stats"}>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.2099 15.8901C20.5737 17.3946 19.5787 18.7203 18.3118 19.7514C17.0449 20.7825 15.5447 21.4875 13.9424 21.8049C12.34 22.1222 10.6843 22.0422 9.12006 21.5719C7.55578 21.1015 6.13054 20.2551 4.96893 19.1067C3.80733 17.9583 2.94473 16.5428 2.45655 14.984C1.96837 13.4252 1.86948 11.7706 2.16851 10.1647C2.46755 8.55886 3.15541 7.05071 4.17196 5.77211C5.18851 4.49351 6.5028 3.4834 7.99992 2.83008"
                            stroke={
                                pathname === "/stats"
                                    ? selectedColor
                                    : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"
                            stroke={
                                pathname === "/stats"
                                    ? selectedColor
                                    : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <Link href={"/"} className="">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                            stroke={
                                pathname === "/" ? selectedColor : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 22V12H15V22"
                            stroke={
                                pathname === "/" ? selectedColor : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <Link href={"/chat"}>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                            stroke={
                                pathname === "/chat" ? selectedColor : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <Link href={"/history"}>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 3V8H8"
                            stroke={
                                pathname === "/history"
                                    ? selectedColor
                                    : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.05 13.0001C3.27151 15.0059 4.1607 16.8791 5.57478 18.3188C6.98886 19.7585 8.84577 20.6812 10.8473 20.9387C12.8488 21.1961 14.8788 20.7735 16.6112 19.7386C18.3436 18.7036 19.678 17.1165 20.3999 15.2321C21.1219 13.3476 21.1896 11.2752 20.5921 9.34766C19.9947 7.42012 18.7668 5.7493 17.1056 4.60353C15.4444 3.45776 13.4463 2.90354 11.4322 3.02987C9.41817 3.15619 7.50501 3.95574 6 5.30009L3 8.00009"
                            stroke={
                                pathname === "/history"
                                    ? selectedColor
                                    : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 7V12L16 14"
                            stroke={
                                pathname === "/history"
                                    ? selectedColor
                                    : "#c8cdff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
