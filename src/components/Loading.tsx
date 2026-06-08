import "./styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-name">
        KHD<span>.</span>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill"></div>
      </div>
      <div className="loading-dot"></div>
    </div>
  );
};

export default Loading;
