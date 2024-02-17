"use client";
import React from "react";
import { useState, useEffect } from "react";
import Testimonialstyles from "@/app/styles/Testimonial.module.css";

const Testimonial = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-col gap-10 items-center justify-center w-full h-full py-16 lg:py-24">
            <div className="flex flex-col items-center justify-between w-90% h-full gap-20">
                <div className={` flex flex-col items-start w-full h-full gap-10`}>
                    <div
                        className={` ${Testimonialstyles.title} text-2xl lg:text-4xl font-base flex items-center gap-2`}
                    >
                        <div>What</div>
                        <div>our</div>
                        <div>clients</div>
                        <div>say</div>
                    </div>
                    <div className="lg:w-3/4 w-full">
                        <div className={`${Testimonialstyles.item}`}>
                            We value long-term relationships with our clients, that’s why we
                            work in
                        </div>
                        <div className={`${Testimonialstyles.item}`}>
                            personalized small-scale teams that perfectly cater to the unique
                            requirements of
                        </div>
                        <div className={`${Testimonialstyles.item}`}>
                            each client and project.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 h-full">

                    <div className="flex flex-col justify-between h-72 lg:h-90 border-l border-black gap-16 lg:w-1/3 w-full p-3">
                        <p className={`${Testimonialstyles.paragraph} text-sm`}>
                            “Antara Studio is a stand-out agency that has brought the highest
                            levels of design and strategy to projects that span the fashion,
                            textile and housewares markets for audiences that range from
                            consumers to C-suite executives and industry-leading creatives.”
                        </p>
                        <div className={`text-sm flex flex-col gap-2`}>
                            <h4 className={Testimonialstyles.name}>ERIN BARAJAS </h4>
                            <div className={Testimonialstyles.post}>Project Manager for Star Fades International</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-72 lg:h-90 border-l border-black gap-16 lg:w-1/3 w-full p-3">
                        <p className={`${Testimonialstyles.paragraph} text-sm`}>
                            “What sets Antara Studio apart is their unwavering commitment to quality, even within tight timelines, ensuring that every detail is impeccable.  Their versatility and reliability truly make them a great go-to choice for branding and design."
                        </p>
                        <div className={`text-sm flex flex-col gap-2`}>
                            <h4 className={Testimonialstyles.name}>Mariana Zuluaga</h4>
                            <div className={Testimonialstyles.post}>International Marketing Director at L'Oreal Paris</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-72 lg:h-90 border-l border-black gap-16 lg:w-1/3 w-full p-3">
                        <p className={`${Testimonialstyles.paragraph} text-sm`}>
                            “Antara Studio was the best decision we made for Codifica's
                            brand.”
                        </p>
                        <div className="text-sm">
                            <h4 className={Testimonialstyles.name}>ILEANA MENDEZ-RUIZ</h4>
                            <div className={Testimonialstyles.post}>Founder of Codifica</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
