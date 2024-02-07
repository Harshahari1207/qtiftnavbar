import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
function CustomCard(data) {
  // console.log(data);
  return (
    // <div className="card-container">
    //     <div className="card">
    //         <div className="card-img">
    //             <img />
    //         </div>
    //         <div className="card-btn">
    //             <button>1000 Follows</button>
    //         </div>
    //     </div>
    //     <div className="card-name">
    //         <h4>New Bollywood</h4>
    //     </div>
    // </div>
    <div className="custom-card">
      <Card className="card-container">
        <CardMedia
          component="img"
          alt="Card Image"
          height="140"
          image={data.data.image} // Replace with your image URL
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Chip
              label={data.data.follows + " Follows"}
              style={{ backgroundColor: "black", color: "white" }}
            />
          </Box>
        </CardContent>
      </Card>
      <p>{data.data.title}</p>
    </div>
  );
}

export default CustomCard;
