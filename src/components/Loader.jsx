import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={280}
    height={410}
    viewBox="0 0 300 435"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="143" cy="120" r="120" /> 
    <rect x="403" y="277" rx="2" ry="2" width="172" height="172" /> 
    <rect x="34" y="260" rx="7" ry="7" width="219" height="25" /> 
    <rect x="6" y="300" rx="9" ry="9" width="268" height="76" /> 
    <rect x="11" y="390" rx="7" ry="7" width="90" height="41" /> 
    <rect x="126" y="390" rx="11" ry="11" width="152" height="39" />
  </ContentLoader>
)

export default MyLoader
