const Footer = () => {
  return (
    <div>
        <h2>footer </h2>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        
       
        <div className="flex justify-center items-center">
            <div>
                <div>
                    <h2 className="text-4xl mb-4">Gadget Haven</h2>
                    <p className="mb-5">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className=" grid grid-cols-3 items-center gap-28 mb-5 ">
                    <div className="">
                        <h2 className="text-xl">Service</h2>
                        <div className="space-y-3 mt-4">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl">Company</h2>
                        <div className="space-y-3 mt-4">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl mt-4">Legal</h2>
                        <div className="space-y-3">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
      </footer>
    </div>
  );
};

export default Footer;
