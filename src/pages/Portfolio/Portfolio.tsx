import React, { Profiler, useState } from "react";
import AddToPortfolio from "./AddToPortfolio";
import {useParams} from "react-router-dom"

export interface IState {
  portfolio: {
    name: string;
    url: string;
    description: string;
  }[];
}

const Portfolio = () => {
  const [portfolio, setPorfolio] = useState<IState["portfolio"]>([
    {
      name: "Portfolio1",
      url: "https://github.com/jpabloallin/bioparkDDD",
      description: "First portfolio",
    },
    {
      name: "Portfolio2",
      url: "https://github.com/jpabloallin/lite-rx-api-hands-on-jpabloallin",
      description: "Second portfolio",
    },
  ]);

  let { username } = useParams();

  const renderList = () => {
    return portfolio.map((portf) => {
      return (
        <li className="list-group-item list-group-item-info d-flex justify-content-around">
          <div>
            <h2>{portf.name}</h2>
          </div>
          <div>
            <a href={portf.url}>Visit the project link!</a>
          </div>
          <div>
            <h3>{portf.description}</h3>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>This is {username}'s portfolio!</h1>
      <ul>{renderList()}</ul>
      <AddToPortfolio portfolio={portfolio} setPortfolio={setPorfolio}/>
    </div>
  );
};

export default Portfolio;
