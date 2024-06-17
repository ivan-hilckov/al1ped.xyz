import { Page, Text, Display, Image, Link } from "@geist-ui/core";

import { LazyLoadImage } from "react-lazy-load-image-component";
import meImage from "/me-bw.jpeg";
import styles from "./App.module.css";

const images = [
  { file: "/images/DSC00422-34.jpg", thumb: "/thumbs/DSC00422-34.jpg" },
  { file: "/images/DSC00466-35.jpg", thumb: "/thumbs/DSC00466-35.jpg" },
  { file: "/images/DSC00470-36.jpg", thumb: "/thumbs/DSC00470-36.jpg" },
  { file: "/images/DSC00496-37.jpg", thumb: "/thumbs/DSC00496-37.jpg" },
  { file: "/images/DSC00752-1.jpg", thumb: "/thumbs/DSC00752-1.jpg" },
  { file: "/images/DSC01376-38.jpg", thumb: "/thumbs/DSC01376-38.jpg" },
  { file: "/images/DSC01389-2.jpg", thumb: "/thumbs/DSC01389-2.jpg" },
  { file: "/images/DSC01619-3.jpg", thumb: "/thumbs/DSC01619-3.jpg" },
  { file: "/images/DSC01671-39.jpg", thumb: "/thumbs/DSC01671-39.jpg" },
  { file: "/images/DSC01703-40.jpg", thumb: "/thumbs/DSC01703-40.jpg" },
  { file: "/images/DSC02078-41.jpg", thumb: "/thumbs/DSC02078-41.jpg" },
  { file: "/images/DSC02154-42.jpg", thumb: "/thumbs/DSC02154-42.jpg" },
  { file: "/images/DSC02321-43.jpg", thumb: "/thumbs/DSC02321-43.jpg" },
  { file: "/images/DSC02446-4.jpg", thumb: "/thumbs/DSC02446-4.jpg" },
  { file: "/images/DSC02629-44.jpg", thumb: "/thumbs/DSC02629-44.jpg" },
  { file: "/images/DSC02657-45.jpg", thumb: "/thumbs/DSC02657-45.jpg" },
  { file: "/images/DSC03036-5.jpg", thumb: "/thumbs/DSC03036-5.jpg" },
  { file: "/images/DSC03164-6.jpg", thumb: "/thumbs/DSC03164-6.jpg" },
  { file: "/images/DSC03231-7.jpg", thumb: "/thumbs/DSC03231-7.jpg" },
  { file: "/images/DSC03285-46.jpg", thumb: "/thumbs/DSC03285-46.jpg" },
  { file: "/images/DSC03461-47.jpg", thumb: "/thumbs/DSC03461-47.jpg" },
  { file: "/images/DSC03561-48.jpg", thumb: "/thumbs/DSC03561-48.jpg" },
  { file: "/images/DSC03795-49.jpg", thumb: "/thumbs/DSC03795-49.jpg" },
  { file: "/images/DSC04455-8.jpg", thumb: "/thumbs/DSC04455-8.jpg" },
  { file: "/images/DSC04567-9.jpg", thumb: "/thumbs/DSC04567-9.jpg" },
  { file: "/images/DSC04573-10.jpg", thumb: "/thumbs/DSC04573-10.jpg" },
  { file: "/images/DSC04580-11.jpg", thumb: "/thumbs/DSC04580-11.jpg" },
  { file: "/images/DSC04603-50.jpg", thumb: "/thumbs/DSC04603-50.jpg" },
  { file: "/images/DSC05048-12.jpg", thumb: "/thumbs/DSC05048-12.jpg" },
  { file: "/images/DSC05085-13.jpg", thumb: "/thumbs/DSC05085-13.jpg" },
  { file: "/images/DSC05149-14.jpg", thumb: "/thumbs/DSC05149-14.jpg" },
  { file: "/images/DSC05275-15.jpg", thumb: "/thumbs/DSC05275-15.jpg" },
  { file: "/images/DSC05327-16.jpg", thumb: "/thumbs/DSC05327-16.jpg" },
  { file: "/images/DSC05369-17.jpg", thumb: "/thumbs/DSC05369-17.jpg" },
  { file: "/images/DSC05370-51.jpg", thumb: "/thumbs/DSC05370-51.jpg" },
  { file: "/images/DSC05377-52.jpg", thumb: "/thumbs/DSC05377-52.jpg" },
  { file: "/images/DSC05383-53.jpg", thumb: "/thumbs/DSC05383-53.jpg" },
  { file: "/images/DSC05384-54.jpg", thumb: "/thumbs/DSC05384-54.jpg" },
  { file: "/images/DSC05393-55.jpg", thumb: "/thumbs/DSC05393-55.jpg" },
  { file: "/images/DSC05403-56.jpg", thumb: "/thumbs/DSC05403-56.jpg" },
  { file: "/images/DSC05476-57.jpg", thumb: "/thumbs/DSC05476-57.jpg" },
  { file: "/images/DSC05559-58.jpg", thumb: "/thumbs/DSC05559-58.jpg" },
  { file: "/images/DSC05684-59.jpg", thumb: "/thumbs/DSC05684-59.jpg" },
  { file: "/images/DSC05751-60.jpg", thumb: "/thumbs/DSC05751-60.jpg" },
  { file: "/images/DSC05942-18.jpg", thumb: "/thumbs/DSC05942-18.jpg" },
  { file: "/images/DSC06077-61.jpg", thumb: "/thumbs/DSC06077-61.jpg" },
  { file: "/images/DSC06124-62.jpg", thumb: "/thumbs/DSC06124-62.jpg" },
  { file: "/images/DSC06134-63.jpg", thumb: "/thumbs/DSC06134-63.jpg" },
  { file: "/images/DSC06274-19.jpg", thumb: "/thumbs/DSC06274-19.jpg" },
  { file: "/images/DSC06276-64.jpg", thumb: "/thumbs/DSC06276-64.jpg" },
  { file: "/images/DSC06282-65.jpg", thumb: "/thumbs/DSC06282-65.jpg" },
  { file: "/images/DSC06285-66.jpg", thumb: "/thumbs/DSC06285-66.jpg" },
  { file: "/images/DSC06288-67.jpg", thumb: "/thumbs/DSC06288-67.jpg" },
  { file: "/images/DSC06298-68.jpg", thumb: "/thumbs/DSC06298-68.jpg" },
  { file: "/images/DSC06329-20.jpg", thumb: "/thumbs/DSC06329-20.jpg" },
  { file: "/images/DSC06331-21.jpg", thumb: "/thumbs/DSC06331-21.jpg" },
  { file: "/images/DSC06333-22.jpg", thumb: "/thumbs/DSC06333-22.jpg" },
  { file: "/images/DSC06354-26.jpg", thumb: "/thumbs/DSC06354-26.jpg" },
  { file: "/images/DSC06423-27.jpg", thumb: "/thumbs/DSC06423-27.jpg" },
  { file: "/images/DSC06552-69.jpg", thumb: "/thumbs/DSC06552-69.jpg" },
  { file: "/images/DSC06568-70.jpg", thumb: "/thumbs/DSC06568-70.jpg" },
  { file: "/images/DSC06573-71.jpg", thumb: "/thumbs/DSC06573-71.jpg" },
  { file: "/images/DSC06580-72.jpg", thumb: "/thumbs/DSC06580-72.jpg" },
  { file: "/images/DSC06604-73.jpg", thumb: "/thumbs/DSC06604-73.jpg" },
  { file: "/images/DSC06608-74.jpg", thumb: "/thumbs/DSC06608-74.jpg" },
  { file: "/images/DSC06609-75.jpg", thumb: "/thumbs/DSC06609-75.jpg" },
  { file: "/images/DSC06611-76.jpg", thumb: "/thumbs/DSC06611-76.jpg" },
  { file: "/images/DSC06629-77.jpg", thumb: "/thumbs/DSC06629-77.jpg" },
  { file: "/images/DSC06631-78.jpg", thumb: "/thumbs/DSC06631-78.jpg" },
  { file: "/images/DSC06650-79.jpg", thumb: "/thumbs/DSC06650-79.jpg" },
  { file: "/images/DSC06663-80.jpg", thumb: "/thumbs/DSC06663-80.jpg" },
  { file: "/images/DSC07299-23.jpg", thumb: "/thumbs/DSC07299-23.jpg" },
  { file: "/images/DSC07310-24.jpg", thumb: "/thumbs/DSC07310-24.jpg" },
  { file: "/images/DSC07351-25.jpg", thumb: "/thumbs/DSC07351-25.jpg" },
  { file: "/images/DSC07984-28.jpg", thumb: "/thumbs/DSC07984-28.jpg" },
  { file: "/images/DSC09048-29.jpg", thumb: "/thumbs/DSC09048-29.jpg" },
  { file: "/images/DSC09097-30.jpg", thumb: "/thumbs/DSC09097-30.jpg" },
  { file: "/images/DSC09285-31.jpg", thumb: "/thumbs/DSC09285-31.jpg" },
  { file: "/images/DSC09355-32.jpg", thumb: "/thumbs/DSC09355-32.jpg" },
  { file: "/images/DSC09838-33.jpg", thumb: "/thumbs/DSC09838-33.jpg" },
];

function App() {
  return (
    <Page>
      <Display shadow>
        <Image width="300px" height="300px" src={meImage} />
        <div className={styles.info}>
        <Text h1>helios_m42</Text>
        <Text>
          {" "}
          Posting at least one photo every day only from DLSR, not phone. with 
          <Link to="https://www.instagram.com/helios_m42/">@serialstill</Link>
          🤘
        </Text>
        <Link to="https://www.instagram.com/helios_m42/">instagram</Link>
        </div>
      </Display>
      <div className={styles.list}>
        {images.map((item) => {
          return (
            <LazyLoadImage
              key={item.file}
              width="300px"
              height="300px"
              src={item.thumb}
              className={styles.img}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default App;
