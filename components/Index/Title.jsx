import React from "react";
import Link from "next/link";

const Title = (props) => {
  return (
    <div>
      <h1 className="text-[#091535] text-4xl font-semibold">{props.title}</h1>
      <Link href={props.src} className="text-[#3056D3] text-xl font-bold">
        {props.subtitle}
      </Link>
    </div>
  );
};

export default Title;
