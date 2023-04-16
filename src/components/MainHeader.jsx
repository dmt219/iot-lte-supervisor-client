import React, { useEffect, useState } from "react";
import Link from "next/link";
import ViettelLogo from "public/images/viettel.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" passHref>
      <Navbar.Brand
        className="mr-auto sm:w-[100px]"
        aria-label="Viettel Telecom Logo"
        title="Viettel Telecom"
      >
        <Image src={ViettelLogo} width={99} height={21} />
      </Navbar.Brand>
    </Link>
  );
}

export default function MainHeader() {
  return (
    <>
      <Navbar bg="light" className="mb-2">
        <Container>
          <Logo />
        </Container>
      </Navbar>
    </>
  );
}
