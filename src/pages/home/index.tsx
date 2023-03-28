import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <p className="title-text">Home</p>
      <div className="flex flex-col lg:flex-row w-full h-full gap-6"></div>
    </section>
  );
};

export default Home;
