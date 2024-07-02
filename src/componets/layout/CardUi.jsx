import "../layout/Style.css"

const CardUi = ({title,price,src}) => {
  return (
    <>
      <div className="card card_body card-main mt-5 mb-5 ">
            <img src={src??"no data"} className="card-img-top food-img"  alt="..." />
            <div className="card-body text-center">
                <h5 className="card-titel card_title">{title??"no title"}</h5>
                <p className="card-text card_price ">{price??"no para"}</p>
                <button className="btn add_to">Add to Card</button>
            </div>
        </div>

      
      
      
    </>
  );
};
export default CardUi;
