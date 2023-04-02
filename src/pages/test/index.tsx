import { useState } from "react";

type Props = {};

const Test = (props: Props) => {
  const response = [
    {
      name: "Ten Dollar",
      numericValue: 1000,
      code: "USD_TEN_DOLLAR",
    },
    {
      name: "Twenty Dollar",
      numericValue: 2000,
      code: "USD_TWENTY_DOLLAR",
    },
    {
      name: "Hundred Dollar",
      numericValue: 10000,
      code: "USD_HUNDRED_DOLLAR",
    },
  ];

  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([] as any[]);

  const handleChange = (e: any, item: any) => {
    setItems([...items, { total: e.target.value * item.numericValue } as any]);
  };

  const calculateAmount = (e: any) => {
    e.preventDefault();
    let total = 0;
    items.map((item: any) => {
      total += item.total;
    });
    setAmount(total / 100);
    setItems([]);
  };

  return (
    <section className="text-white flex flex-col gap-6">
      <h1>Test</h1>
      <div className="flex flex-col gap-6">
        {response.map((item, key) => {
          return (
            <div key={key} className="flex flex-col gap-3">
              <label className="text-sm font-bold">{item.name}</label>
              <input
                id="quantity"
                type="number"
                className="bg-[#0C111A] border dark:border-[#BFCBD9] border-[#6A8099] dark:bg-white text-white dark:text-black font-bold text-s h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Quantity"
                onChange={(e) => handleChange(e, item)}
              />
            </div>
          );
        })}
        <button
          className="primary-button mx-auto mt-8"
          onClick={calculateAmount}
        >
          Calculate Amount
        </button>
      </div>
      <div className="user-card p-6">
        {amount > 0 && (
          <p className="text-sm font-bold">Total Amount : ${amount}</p>
        )}
      </div>
    </section>
  );
};

export default Test;
