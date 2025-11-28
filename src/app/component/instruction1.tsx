import React from "react";
type props = {
  angka: string;
  kalimat: string;
};

function Instruction({ angka }: props, { kalimat }: props) {
  return (
    <div className="flex flex-row w-full justify-start">
      <div className="flex justify-start">
        <p className="mr-7">{angka}</p>
        <p className="mb-3">{kalimat}</p>
      </div>
    </div>
  );
}

export default Instruction;
