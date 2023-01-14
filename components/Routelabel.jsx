import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

const Routelabel = (props) => {
  return (
    <div className="text-[#637381] flex flex-row">
      <Image src="images/icons/House.svg" width={16} height={16} />
      <p className="text-sm pl-1 pr-3">Farmacia Torres</p>
      <div className="pt-1">
      <SlArrowRight />
      </div>
      <p className="text-sm pl-3">{props.label}</p>
    </div>
  );
};

export default Routelabel;
