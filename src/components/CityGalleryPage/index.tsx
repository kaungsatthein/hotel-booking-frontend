import Gallery from "./Gallery";

const CityGalleryPage = () => {
  return (
    <div>
      <div className=" pt-8 text-center">
        <p className="text-4xl font-sans font-bold text-primary pb-2.5">
          FIGURE IT OUT
        </p>
        <p className="font-sans text-muted-foreground">
          Click on any city to discover more.
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default CityGalleryPage;
