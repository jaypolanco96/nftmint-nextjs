import Link from "next/link";
import Image from "next/image";
import logo from "../images/lotus.png";
import React, { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("EVM is installed!");
      getAccount();
    }
    const ethereumButton = document.querySelector(".enableEthereumButton");
    const walletnumber = document.getElementById("walletnumber");

    ethereumButton.addEventListener("click", () => {
      getAccount();
    });

    async function getAccount() {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
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
    </div>
  );
}
