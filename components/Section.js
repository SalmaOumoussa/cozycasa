import React from "react";
import Cards from "./Cards";
import Image from "next/image";
import Link from "next/link";
function Section() {
  return (
    <>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        <Link href="https://www.viator.com/fr-FR/Morocco-tours/Unique-Experiences/d825-g50127-c50128?m=26643&supag=67876691466&supsc=dsa-694098303964&supai=376252736555&supap=&supdv=c&supnt=nt%3Ag&suplp=1029461&supli=&supti=dsa-694098303964&tsem=true&supci=dsa-694098303964&supap1=&supap2=&gclid=Cj0KCQjw_4-SBhCgARIsAAlegrV5S6-I33uW9MduZ90LVtfhvQn6jQt2Gh4JfIjCEZs0kUJl4wUYplUaArIgEALw_wcB">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src={"https://i.ibb.co/M2k950B/camp.jpg"}
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl mt-3">Unique Experiences</h3>
          </div>
        </Link>
        <Link href="https://www.adventure-life.com/morocco/articles/legendary-morocco">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src={"https://i.ibb.co/wRq0yqt/chawn.jpg"}
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl mt-3">Beautiful Cultures</h3>
          </div>
        </Link>
        <Link href="https://www.travelawaits.com/2548286/best-places-to-capture-on-camera-in-morocco/">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src="https://i.ibb.co/28QJd0S/hamam.jpg"
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl mt-3">Peace</h3>
          </div>
        </Link>
        <Link href="https://www.">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src="https://i.ibb.co/Jxb0XZd/kech.jpg"
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl mt-3">Joy & Vibes</h3>
          </div>
        </Link>
        <Link href="https://www.">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src="https://i.ibb.co/nQhzTBR/riad.jpg"
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl mt-3">Artistic Comfort</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Section;
