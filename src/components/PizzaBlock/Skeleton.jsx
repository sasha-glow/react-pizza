import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="134" r="125" /> 
    <rect x="0" y="270" rx="10" ry="10" width="280" height="32" /> 
    <rect x="0" y="320" rx="10" ry="10" width="280" height="77" /> 
    <rect x="7" y="421" rx="0" ry="0" width="66" height="0" /> 
    <rect x="3" y="413" rx="10" ry="10" width="100" height="30" /> 
    <rect x="133" y="413" rx="31" ry="31" width="145" height="40" />
  </ContentLoader>
)

export default Skeleton;