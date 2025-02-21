"use client";
import React, { useState } from "react";
import HoverCard from "./HoverCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [hovered1, setHovered1] = useState<boolean>(false);

    return (
        <div className="max-w-[1680px] mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-center max-lg:mt-10">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between md:space-x-10 max-md:flex-col">
                                <HoverCard
                                    backgroundColor="#ffa28b"
                                    direction="flex-col"
                                    left="-400px"
                                >
                                    <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-40 items-center text-center">
                                        <h2 className="px-4 mb-4 lg:text-5xl md:text-4xl text-3xl font-bold text-white">
                                            Ready to Dominate Your Industry?
                                        </h2>
                                        <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto">
                                            Whether  scaling your startup or just learning how
                                            to code, GitHub is your home. Join the  largest
                                            developer platform to build the innovations that empower
                                            humanity. &nbsp;build from&nbsp;here.
                                        </p>
                                        <div className="flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
                                            <a
                                                onMouseEnter={() => setHovered(true)}
                                                onMouseLeave={() => setHovered(false)}
                                                href="/contact"
                                                className="flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]"
                                            >
                                                Contact Us
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={` ml-2 transition ease-in duration-150 ${
                                                        hovered ? "translate-x-2 " : "-translate-x-0"
                                                    }`}
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                                    ></path>
                                                    <path
                                                        className={`  transition ease-in duration-150 ${
                                                            hovered ? " opacity-100" : "opacity-0 "
                                                        }`}
                                                        stroke="currentColor"
                                                        d="M1.75 8H11"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </HoverCard>
                                <HoverCard
                                    backgroundColor="#ffa28b"
                                    direction="flex-col"
                                    left="0"
                                >
                                    <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-24 items-center text-center">
                                        <h2 className="px-4 mb-4 lg:text-5xl md:text-4xl text-3xl font-bold text-white">
                                            Careers
                                        </h2>
                                        <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, incidunt earum! Accusamus maxime nobis labore vero, impedit obcaecati.
                                        </p>
                                        <div className="flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
                                            <a
                                                onMouseEnter={() => setHovered1(true)}
                                                onMouseLeave={() => setHovered1(false)}
                                                href="/careers"
                                                className="flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]"
                                            >
                                                Contact Us
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={` ml-2 transition ease-in duration-150 ${
                                                        hovered1 ? "translate-x-2 " : "-translate-x-0"
                                                    }`}
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                                    ></path>
                                                    <path
                                                        className={`  transition ease-in duration-150 ${
                                                            hovered1 ? " opacity-100" : "opacity-0 "
                                                        }`}
                                                        stroke="currentColor"
                                                        d="M1.75 8H11"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </HoverCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "160px" }}
                transition={{ delay: 0.2 }}
                className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
            ></motion.div>
        </div>
    );
};

export default Contact;
