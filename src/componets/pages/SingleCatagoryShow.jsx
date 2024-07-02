import React, { useEffect, useState } from "react";
import Menu from '../layout/Menu';
import { useParams } from "react-router-dom";
import "../layout/Style.css"

function SingleCatagoryShow(props) {
  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState({});

  const filterItem = (cateItem) => {
    console.log(items);
    const updatedItem = Menu.filter((curElem) => {
      console.log(curElem.id == cateItem);
      return curElem.id == cateItem;
    });
    setItems(updatedItem[0]);
  };

  useEffect(() => {
    filterItem(id);
  }, []);


  return (
    <>
      <div className="container show-main mt-5 mb-5">
        <div className="row mx-0">
          <div className="col-lg-12 col-sm-12">
            <img
              src={`/${items.src}`}
              alt="..."
              className="img-fluid  h-100 w-100"
            />
          </div>
          <div className="col-lg-12 mt-5 col-sm-12">
            <h2 className="single-text">{items.name}</h2>
            <p className="single-dec-one"> {items.dec}</p>
            <div className="des-single">
              <h6> {items.dec2}</h6>
            </div><hr />
            <div className="dec">
                <h2 className="dec3-title">{items.title}</h2>
                <p className="dec3-single">{items.dec3} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCatagoryShow;
{

}
