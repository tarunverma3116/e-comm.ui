import { useEffect } from "react";
import { useState } from "react";

interface InputData {
  id: number;
  numericValue: number;
  value: number;
  label: string;
}

const Test = () => {
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
  const [inputs, setInputs] = useState([] as InputData[]);

  const SetInputValues = () => {
    const inputList = response.map((input: any, key: any) => ({
      id: key,
      numericValue: input.numericValue,
      value: 0,
      label: input.name,
    }));
    setInputs(inputList);
  };

  const handleInputChange = (id: number, value: number) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      const inputIndex = newInputs.findIndex((input) => input.id === id);
      newInputs[inputIndex].value = value;
      return newInputs;
    });
  };

  const calculateAmount = () => {
    let total = 0;
    inputs.map((item: any) => {
      total += item.value * item.numericValue;
    });
    setAmount(total);
  };

  useEffect(() => {
    SetInputValues();
  }, []);

  return (
    <section className="text-white flex flex-col gap-6">
      <h1>Test</h1>
      <div className="flex flex-col gap-6">
        {inputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-3">
            <label htmlFor={`input-${input.id}`}>{input.label}</label>
            <input
              className="bg-[#0C111A] border dark:border-[#BFCBD9] border-[#6A8099] dark:bg-white text-white dark:text-black font-bold text-s h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="number"
              id={`input-${input.id}`}
              value={input.value}
              onChange={(e) => handleInputChange(input.id, +e.target.value)}
            />
          </div>
        ))}
        <button
          className="primary-button mx-auto mt-8"
          onClick={calculateAmount}
        >
          Calculate Amount
        </button>
      </div>
      <div className="user-card p-6">
        {amount > 0 && (
          <p className="text-sm font-bold">Total Amount : ${amount / 100}</p>
        )}
      </div>
    </section>
  );
};

export default Test;
