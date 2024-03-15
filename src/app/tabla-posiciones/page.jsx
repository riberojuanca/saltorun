import React from "react";

async function Table() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGEd5A_U0S_RKqxMEma5cb2b-ORhup7yRFuCr0buOineP-WuO_3IHhFOoZpwPwZV4XFDO67LMK3Kx5/pub?output=tsv"
  ).then((res) => res.text());

  const fecha1 = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [names, ages, times] = row.split("\t");
      return {
        names,
        ages,
        times,
      };
    });

  return (
    <div>
      <h1>TABLA</h1>
      <table className=" border-x-slate-100">
        {fecha1.map((player) => (
          <tr className=" border-y-2 border-x-2" key={player.names}>
            <td className="border-x-2">{player.names}</td>
            <td className="border-x-2">{player.ages}</td>
            <td className="border-x-2">{player.times}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
