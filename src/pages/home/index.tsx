import React from "react";

type Props = {
  weather: any;
};

const Home = (props: Props) => {
  console.log("weather in home", props.weather);
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full h-full gap-6"></div>
    </section>
  );
};

export default Home;
