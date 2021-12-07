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
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import axios from "axios";

export default function Home() {
  const ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      name: "safeMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const ADDRESS = "0x3eA82a4e4De75c9B0B5E73818824Ac163d3ae363";

  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }

    // Connect To MetaMask
    const ethereumButton = document.querySelector(".enableEthereumButton");
    const showAccount = document.querySelector(".showAccount");

    ethereumButton.addEventListener("click", () => {
      getAccount();
    });

    async function getAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      showAccount.innerHTML =
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

    // Call Mint Smart Contract
    const mintButton = document.querySelector(".mintButton");

    mintButton.addEventListener("click", () => {
      callContract();
    });

    async function callContract() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      window.web3 = new Web3(window.ethereum);
      const account = accounts[0];
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      const fetch = await axios.get("/api/hello");
      const result = fetch.data;
      const supply = await contract.methods.totalSupply().call();
      console.log(supply)
      const api = result[JSON.parse(supply)+1];
      console.log(api + " Will Be Minted!")
      contract.methods
        .safeMint(account, api)
        .send({ from: account, value: "1000000000000000" });
    }

    // Call NFT Total Supply
    const totalsupply = document.querySelector(".totalSupply");

    async function callTotalSupply() {
      window.web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      const supply = await contract.methods.totalSupply().call();
      const maxsupply = await contract.methods.MAX_SUPPLY().call();
      totalsupply.innerHTML = supply + "/" + maxsupply;
    }
    callTotalSupply();
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
                <span id="showAccount" className="showAccount">
                  Connect Wallet
                </span>
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
          <div className="icon-bar">
            <li>
              <a target="_blank" href="/test">
                <FaFacebook size={50} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/MystikalCove">
                <FaTwitter size={50} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/mystikalcove/">
                <FaInstagram size={50} />
              </a>
            </li>
          </div>
          <div className="textBox">
            <h2>MYSTIKCOVE</h2>
            <h1>NFTs</h1>
            <p>
              Hello and welcome to the Mystik Cove! We are proud to present you
              the first DSLR NFT project of it's kind, curated for the crypto
              community. We have selected 333 of high definition photographs and
              converted them into NFTs and are happy to offer them for
              ownership. These photographs were hand picked by our team and can
              be minted directly through here directly on our website or can be
              purchased on OpenSea. I would also like to inform you that 15% of
              the proceeds will be donated to a charity of the communities
              choice. That's right, the community gets to pick where our
              proceeds go! With plenty of love and support, you can make this
              happen!
            </p>
            <button id="mint" className="mintButton">
              MINT
            </button>
            <span className="totalSupply"></span>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua ut enim ad minim veniam.
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
