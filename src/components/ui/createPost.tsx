import Image from "next/image";
import "./index.css";
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

export default function SideImage() {
  const handleExit = () => {
    localStorage.setItem("showSuccessCard", "true");
    window.location.href = "/auth/login";
  };
  const handleGoToHome = () => {
    window.location.href = "/app/feed/";
  }
  const handleGoToProfile = () => {
    window.location.href = "/app/profile/";
  }
  const handleGoToTrending = () => {
    window.location.href = "/app/.../";
  }
  return (
    <div className="bg-primary relative">
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          <div className="iconProfile" style={{ marginTop: '-210px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="94px" height="94px" onClick={handleGoToProfile} style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} xmlnsXlink="http://www.w3.org/1999/xlink">
              <g>
                <path style={{ opacity: 0.964 }} fill="#6deb83" d="M 38.5,7.5 C 61.3294,4.54685 77.1628,13.5469 86,34.5C 91.7177,58.8973 83.2177,76.064 60.5,86C 36.1027,91.7177 18.936,83.2177 9,60.5C 3.42409,33.977 13.2574,16.3104 38.5,7.5 Z M 42.5,19.5 C 55.3202,18.1527 60.8202,23.8194 59,36.5C 55.3449,43.0702 49.8449,45.2368 42.5,43C 35.9298,39.3449 33.7632,33.8449 36,26.5C 37.6941,23.6424 39.8607,21.309 42.5,19.5 Z M 39.5,56.5 C 50.0998,55.2829 60.0998,57.1163 69.5,62C 73.1804,65.0937 72.8471,68.0937 68.5,71C 60.0446,78.06 50.3779,80.3933 39.5,78C 17.3521,69.6142 17.3521,62.4476 39.5,56.5 Z"/>
              </g>
            </svg>
          </div>



          <div className="iconTrending" style={{marginLeft: "10px", marginTop: "125px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={handleGoToTrending}>
              <g>
                <path style={{opacity: "0.821"}} fill="#6deb85" d="M 38.5,15.5 C 43.43,15.1975 48.2633,15.5308 53,16.5C 53.4994,21.8229 53.666,27.1563 53.5,32.5C 52.1667,32.5 50.8333,32.5 49.5,32.5C 49.6641,29.8127 49.4974,27.146 49,24.5C 44.965,29.5316 40.6317,34.1983 36,38.5C 32.3458,36.1791 29.3458,33.1791 27,29.5C 22.8782,35.2905 18.3782,40.7905 13.5,46C 12.2068,46.49 10.8734,46.6567 9.5,46.5C 9.35055,45.448 9.51722,44.448 10,43.5C 15.0477,37.2408 20.2143,31.0741 25.5,25C 29.5376,25.6716 32.5376,28.005 34.5,32C 35.1667,32.6667 35.8333,32.6667 36.5,32C 39.6468,28.0188 42.9801,24.1855 46.5,20.5C 43.2317,19.513 39.8984,19.1796 36.5,19.5C 36.5271,17.8007 37.1938,16.4674 38.5,15.5 Z"/>
              </g>
            </svg>
            <span className="text-white" style={{ marginLeft: "-2px" }} onClick={handleGoToTrending}>Trending</span>
          </div>

          <div className="iconReturn" style={{marginLeft: "15px", marginTop: "80px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" onClick={handleGoToHome} style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision',  fillRule: 'evenodd', clipRule: 'evenodd' }} xmlnsXlink="http://www.w3.org/1999/xlink">
              <g><path style={{opacity:"0.891"}} fill="#6deb84" d="M 63.5,29.5 C 63.5,29.8333 63.5,30.1667 63.5,30.5C 61.1432,30.6633 58.8098,30.4966 56.5,30C 48.312,22.9777 39.9787,16.1443 31.5,9.5C 23.0213,16.1443 14.688,22.9777 6.5,30C 4.19018,30.4966 1.85684,30.6633 -0.5,30.5C -0.5,30.1667 -0.5,29.8333 -0.5,29.5C 9.65618,20.9094 19.6562,12.076 29.5,3C 30.8333,2.33333 32.1667,2.33333 33.5,3C 36.7012,6.53641 40.2012,9.70307 44,12.5C 44.4935,10.8659 44.6602,9.19919 44.5,7.5C 47.5,7.5 50.5,7.5 53.5,7.5C 53.3342,12.1785 53.5008,16.8452 54,21.5C 57.3325,24.0017 60.4992,26.6684 63.5,29.5 Z"/></g>
              <g><path style={{opacity:"0.985"}} fill="#6deb83" d="M 29.5,13.5 C 30.8734,13.3433 32.2068,13.51 33.5,14C 40,19.1667 46.5,24.3333 53,29.5C 53.4998,38.1603 53.6664,46.8269 53.5,55.5C 48.8333,55.5 44.1667,55.5 39.5,55.5C 39.5,49.5 39.5,43.5 39.5,37.5C 34.1667,37.5 28.8333,37.5 23.5,37.5C 23.5,43.5 23.5,49.5 23.5,55.5C 18.8333,55.5 14.1667,55.5 9.5,55.5C 9.33358,46.8269 9.50025,38.1603 10,29.5C 16.6892,24.3024 23.1892,18.9691 29.5,13.5 Z"/></g>
            </svg>
            <span className="text-white" style={{ marginLeft: "5px" }} onClick={handleGoToHome}>Return</span>
          </div>


        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        <Button label="Exit" onClick={handleExit} severity="success"/>
        {/*<button
          className="bg-color text-black px-5 py-2 rounded shadow-lg"
          onClick={handleExit}
        >
          Exit
        </button> */}
      </div>
    </div>
  );
}
