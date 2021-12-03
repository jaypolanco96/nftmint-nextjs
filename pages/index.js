import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import example from "../images/example.jpg";
import bg from "../images/bg.jpg"
import sj from "../images/sj.jpg"
import vb from "../images/vb.jpeg"
import js from "../images/js.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="content">
      <div className="greeting">
        <div className="textBox">
          <h2>DSLR</h2>
          <h1>NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button id="mint">MINT</button>
        </div>
        <div className="imgBox">
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia height="140" alt="fire">
                <Image src={example}></Image>
              </CardMedia>
              <CardContent style={{ backgroundColor: "#FFC0CB" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Campfire
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <div className="roadmap">
        <h1>Roadmap</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "#FFC0CB" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Lorem ipsum dolor sit amet.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "#FFC0CB" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Consectetur adipiscing elit.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "#FFC0CB" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              ut enim ad minim veniam.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "#FFC0CB" }} />
            </TimelineSeparator>
            <TimelineContent>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="team">
        <h1>Team</h1>
        <Stack direction="row" spacing={10}>
          <Avatar alt="developer" sx={{ width: 100, height: 100 }}>
            <Image src={bg}></Image>
          </Avatar>
          <Avatar alt="developer" sx={{ width: 100, height: 100 }}>
            <Image src={sj}></Image>
          </Avatar>
          <Avatar alt="developer" sx={{ width: 100, height: 100 }}>
            <Image src={vb}></Image>
          </Avatar>
          <Avatar alt="developer" sx={{ width: 100, height: 100 }}>
            <Image src={js}></Image>
          </Avatar>
        </Stack>
      </div>
      <footer>
        <h2>Mystical Lotus Photograph	&copy;</h2>
      </footer>
    </div>
  );
}
