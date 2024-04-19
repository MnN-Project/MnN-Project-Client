import HeroTabLinks from "./HeroTabLinks";
const HeroSlider = () => {
  return (
    <div className="basis-3/4 flex flex-col min-h-full">
      <div className="relative overflow-hidden bg-white basis-3/4 h-full">
        <a
          href="#"
          className="min-h-full min-w-full bg-cover bg-center inline-block align-top relative bg-no-repeat"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></a>
      </div>
      {/* Slider */}
      <div className="mt-2xs basis-1/4">
        <ul className="flex justify-between gap-2xs">
          <HeroTabLinks
            firstChild
            src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headingText="Trade Fair"
            bodyText="Reliable Nigerian Suppliers, Recommended at World's Famous Trade Shows."
          />
          <HeroTabLinks src="https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D" bodyText="Verified Sellers" />
          <HeroTabLinks src="https://plus.unsplash.com/premium_photo-1669323926579-4b60e62282e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tncm91bmQlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D" bodyText="Top Rated Suppliers" />
        </ul>
        {/* spotlight wrap */}
      </div>
    </div>
  );
};

export default HeroSlider;
