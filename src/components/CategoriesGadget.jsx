import { Link, useNavigate } from "react-router-dom";

const CategoriesGadget = ({ categoriesGadget }) => {
  const naviget = useNavigate();
  return (
    <div>
      CategoriesGadget
      <h2>this category page....</h2>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-base-content min-h-full w-80">
            <div className="gap-4 bg-stone-200 rounded-xl p-4 ">
              <button
                onClick={() => naviget("/products")}
                className="btn mb-2 bg-purple-300 rounded-xl p-4 w-[240px] ml-4 "
              >
                All Product
              </button>
              <li className="gap-4 bg-stone-200 rounded-xl p-4">
                {categoriesGadget.map((c) => (
                  <Link
                    className="btn rounded-xl p-4"
                    // to="/category"
                    to={`category/${c.category}`}
                    key={c.category_id}
                  >
                    {c.slug}
                  </Link>
                ))}
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* side end */}
    </div>
  );
};

export default CategoriesGadget;
