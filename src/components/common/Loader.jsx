import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        heigh: "200vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfinitySpin width="200" color="#7f0909" />
    </div>
  );
};
