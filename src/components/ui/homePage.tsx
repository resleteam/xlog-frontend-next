import Image from "next/image";
import "./index.css";

export default function SideImage() {
  const handleExit = () => {
    localStorage.setItem("showSuccessCard", "true");
    window.location.href = "/auth/login";
  };
  const handleCreatePost = () => {
    window.location.href = "/app/post/create";
  }
  const handleGoToProfile = () => {
    window.location.href = "/app/profile/";
  }
  const handleGoToTrending = () => {
    window.location.href = "/app/.../";
  }
  const handleSearch = () => {
    {/*...*/}
  }
  return (
    <div className="bg-primary relative">
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          <div className="iconProfile" style={{ marginTop: '-200px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="94px" height="94px" onClick={handleGoToProfile} style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} xmlnsXlink="http://www.w3.org/1999/xlink">
              <g>
                <path style={{ opacity: 0.964 }} fill="#6deb83" d="M 38.5,7.5 C 61.3294,4.54685 77.1628,13.5469 86,34.5C 91.7177,58.8973 83.2177,76.064 60.5,86C 36.1027,91.7177 18.936,83.2177 9,60.5C 3.42409,33.977 13.2574,16.3104 38.5,7.5 Z M 42.5,19.5 C 55.3202,18.1527 60.8202,23.8194 59,36.5C 55.3449,43.0702 49.8449,45.2368 42.5,43C 35.9298,39.3449 33.7632,33.8449 36,26.5C 37.6941,23.6424 39.8607,21.309 42.5,19.5 Z M 39.5,56.5 C 50.0998,55.2829 60.0998,57.1163 69.5,62C 73.1804,65.0937 72.8471,68.0937 68.5,71C 60.0446,78.06 50.3779,80.3933 39.5,78C 17.3521,69.6142 17.3521,62.4476 39.5,56.5 Z"/>
              </g>
            </svg>
          </div>

          <div className="iconSearch" style={{marginLeft: "20px", marginTop: "40px"}}>
            <svg fill="#6eeb83" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px" onClick={handleSearch}><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
            <span className="text-white" style={{ marginLeft: "-2px" }} onClick={handleSearch}>Search</span>
          </div>

          <div className="iconTrending" style={{marginLeft: "10px", marginTop: "10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={handleGoToTrending}>
              <g>
                <path style={{opacity: "0.821"}} fill="#6deb85" d="M 38.5,15.5 C 43.43,15.1975 48.2633,15.5308 53,16.5C 53.4994,21.8229 53.666,27.1563 53.5,32.5C 52.1667,32.5 50.8333,32.5 49.5,32.5C 49.6641,29.8127 49.4974,27.146 49,24.5C 44.965,29.5316 40.6317,34.1983 36,38.5C 32.3458,36.1791 29.3458,33.1791 27,29.5C 22.8782,35.2905 18.3782,40.7905 13.5,46C 12.2068,46.49 10.8734,46.6567 9.5,46.5C 9.35055,45.448 9.51722,44.448 10,43.5C 15.0477,37.2408 20.2143,31.0741 25.5,25C 29.5376,25.6716 32.5376,28.005 34.5,32C 35.1667,32.6667 35.8333,32.6667 36.5,32C 39.6468,28.0188 42.9801,24.1855 46.5,20.5C 43.2317,19.513 39.8984,19.1796 36.5,19.5C 36.5271,17.8007 37.1938,16.4674 38.5,15.5 Z"/>
              </g>
            </svg>
            <span className="text-white" style={{ marginLeft: "-2px" }} onClick={handleGoToTrending}>Trending</span>
          </div>

          <div className="iconCreate" style={{marginLeft: "20px", marginTop: "100px"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
              style={{ mixBlendMode: "normal" }}
              onClick={handleCreatePost}
            >
              <g
                fill="#65d278"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM24,13v11h-11v2h11v11h2v-11h11v-2h-11v-11z"></path>
                </g>
              </g>
            </svg>
            <span className="text-white" style={{ marginLeft: "-2px" }} onClick={handleCreatePost}>Create</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        <button
          className="bg-color text-black px-5 py-2 rounded shadow-lg"
          onClick={handleExit}
        >
          Exit
        </button>
      </div>
    </div>
  );
}
