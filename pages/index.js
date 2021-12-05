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
import iguana from "../images/iguana.jpg";
import bg from "../images/bg.jpg";
import sj from "../images/sj.jpg";
import vb from "../images/vb.jpeg";
import js from "../images/js.jpg";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import logo from "../images/lotus.png";
import "web3";
import Web3 from "web3";

export default function Home() {
      const ABI = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "uri",
            "type": "string"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ];
    const ADDRESS = "0xaeED834f3999a151C233E755d989D2f82C25aa10";

  useEffect(() => {
    const ethereumButton = document.querySelector(".enableEthereumButton");
    const walletnumber = document.getElementById("walletnumber");
    ethereumButton.addEventListener("click", () => {
      getAccount();
    });
    async function callContract() {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        window.web3 = new Web3(window.ethereum);
        var accounts = await window.web3.eth.getAccounts();
        var account = accounts[0];
        var contract = null;
        contract = new web3.eth.Contract(ABI, ADDRESS);
        document.getElementById("mint").onclick = () => {
          contract.methods
            .safeMint(account, "https://api.npoint.io/35605a5b9998fd936b61")
            .send({ from: account, value: "1000000000000000" });
        };
        walletnumber.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
      }
    }
    callContract();
  }, []);
  return (
    <div>
      <section>
        <header>
          <Link href="/">
            <Image
              position="relative"
              src={logo}
              alt="logo"
              height={50}
              width={70}
            />
          </Link>

          <ul>
            <li>
              <button id="unlockbutton" className="enableEthereumButton">
                <span id="walletnumber">Connect Wallet</span>
              </button>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/test">Whitepaper</Link>
            </li>
            <li>
              <Link href="/test">Team</Link>
            </li>
            <li>
              <Link href="/test">Community</Link>
            </li>
          </ul>
        </header>
      </section>
    
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
          <Card className="card" sx={{ maxWidth: 250 }}>
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
          <Card className="card" sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia height="140" alt="fire">
                <Image src={iguana}></Image>
              </CardMedia>
              <CardContent style={{ backgroundColor: "#FFC0CB" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Iguana
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
        <h2>Mystical Lotus Photography &copy;</h2>
      </footer>
    </div>
    </div>
  );
}
