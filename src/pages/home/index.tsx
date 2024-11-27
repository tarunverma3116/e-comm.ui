import Categories from "./Categories";
import RecentProducts from "./RecentProducts";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <RecentProducts />
        {/* <Categories /> */}
      </div>
    </section>
  );
};

export default Home;
