import Useravatar from "./useravatar";

type StaffPicksProps = {url?: string, name: string, heading: string}

const StaffPicks = ({url, name, heading} : StaffPicksProps) => {
  return (
    <div style={{margin: "1.5rem 0"}}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          paddingBottom: "0.5rem"
        }}
      >
        <Useravatar name={name} url={url}/>
        <p style={{ fontWeight: "500", margin: 0, color: "#777", }}>{name}</p>
      </div>
      <h3 style={{fontWeight: "bold", fontSize:"0.9rem", lineHeight: "1rem", color: "#6e6c69"}}>{heading}</h3>
    </div>
  );
};

export default StaffPicks;
