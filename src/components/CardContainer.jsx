const CardContainer = () => {
  return (
    <div>
      <h2 className="text-center">This is Card container Category and All cards-6/9</h2>
      <br />
      <div className="flex gap-6 justify-center items-center">
        <div className="grid grid-cols-1">
          <div>
            <h2>Laptop</h2>
          </div>
          <div>
            <h2>Mobile</h2>
          </div>
        </div>

          <div className="grid grid-cols-3">
          
          <div>
            <h2>Surface tab 10.2</h2>
          </div>
          <div>
            <h2>Apple Watch 2.0</h2>
          </div>
          <div>
            <h2>Deal Laptop 15inch</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
