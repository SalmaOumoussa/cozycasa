import React from "react";
import Cards from "./Cards";

function Section() {
  const cardData = fetch("https://jsonkeeper.com/b/M2RJ").then((res) =>
    res.json()
  );
  return (
    <>
      <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardData.map((c) => (
          <Cards key={c.img} cardData={c} />
        ))}
      </div>
    </>
  );
}

export default Section;
