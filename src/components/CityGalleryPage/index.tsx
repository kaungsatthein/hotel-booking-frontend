import Gallery from "./Gallery";

const CityGalleryPage = () => {
  return (
    <div>
      <div className="px-16 pt-18 text-center">
        <p className="text-4xl font-bold text-primary pb-2.5">FIGURE IT OUT</p>
        <p className="text-muted-foreground">
          Click on any city to discover more.
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default CityGalleryPage;
