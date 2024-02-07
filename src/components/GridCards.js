import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function GridCards(children) {
  console.log(children);
  return (
    <div style={{paddingLeft: "35px"}}>
      <Grid container spacing={3} style={{gap: "10px"}}>
        {children.children.map((data) => (
          <CustomCard data={data} />
        ))}
      </Grid>
    </div>
  );
}
export default GridCards;
