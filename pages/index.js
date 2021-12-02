import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import example from "../images/example.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="content">
      <div className="textBox">
        <h2>DSLR</h2>
        <h1>NFTs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button id="mint">MINT</button>
      </div>
      <div className="imgBox">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia height="140" alt="fire">
              <Image src={example}></Image>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Campfire
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
