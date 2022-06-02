import React, { useState } from "react";
import {IState} from "../Portfolio/Portfolio"

interface IProps {
    portfolio: IState["portfolio"]
    setPortfolio: React.Dispatch<React.SetStateAction<IState["portfolio"]>>
}

const AddToPortfolio: React.FC<IProps> = ({portfolio, setPortfolio}) => {
    const [input, setInput] = useState({
        name: "",
        url: "",
        description: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = ():void => {
        if(
            !input.name ||
            !input.url ||
            !input.description
        ) {
            return 
        }
        setPortfolio([
            ...portfolio, 
            {
                name: input.name,
                url: input.url,
                description: input.description
            }
        ])

        setInput({
            name: "",
            url: "",
            description: ""
        })
    }

  return (
    <form action="">
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text" name="name" id="name" placeholder="Name" className="form-control mb-4" value={input.name} onChange={handleChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Url</label>
            <div className="col-sm-10">
            <input type="text" name="url" id="url" placeholder="Url" className="form-control mb-4" value={input.url} onChange={handleChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Description</label>
            <div className="col-sm-10">
                <textarea name="description" id="description" placeholder="Description" className="form-control mb-4" value={input.description} onChange={handleChange}/>
            </div>
        </div>
        <div>
            <button type="button" className="btn btn-success mb-4" onClick={handleClick}>
                Add to Portfolio
            </button>
        </div>
    </form>
  );
};

export default AddToPortfolio;
