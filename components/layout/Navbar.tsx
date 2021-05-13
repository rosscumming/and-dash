import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Image
          src="/../public/AND Digital logo - red.svg"
          alt="AND club somerville logo"
          width={200}
          height={50}
        />
      </div>
    </nav>
  );
};

export default Navbar;
