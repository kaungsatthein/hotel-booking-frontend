const FooterPage = () => {
  return (
    <footer className="border-t py-6 px-16">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TravelBooking. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </span>
          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            info@travelbooking.com
          </span>
          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            +1 (234) 567-890
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
