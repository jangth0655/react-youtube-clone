import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0.5em 0.8em;
  background-color: ${(props) => props.theme.colors.black.dark};
  color: ${(props) => props.theme.colors.white.white};
  @media screen and (max-width: 30em) {
    font-size: 0.8rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled(motion.svg)`
  cursor: pointer;
  width: 2.5em;
  color: white;
  margin-right: 1em;
  &:hover {
    color: red;
  }
`;

const LogoName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorActive};
  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled(motion.input)`
  position: absolute;
  right: 1.2em;
  outline: 0;
  margin-right: 0.5em;
  padding: 0.6em;
  padding-left: 2.2em;
  width: 15em;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  transform-origin: center right;
  color: ${(props) => props.theme.colors.white.dark};
  &::placeholder {
    color: ${(props) => props.theme.colors.white.dark};
    opacity: 0.5;
  }
`;

const SearchIcon = styled(motion.svg)`
  position: absolute;
  cursor: pointer;
  width: 1em;
  right: 0;

  &:active {
    transform: scale(0.7);
  }
`;

const logoVariants = {
  hover: {
    opacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
    },
  },
};

const Header = () => {
  const [inputBigScale, setInputBigScale] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const onInputSize = () => {
    setInputBigScale((pre) => !pre);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInputValue === "") {
      return;
    }
    setSearchText(searchInputValue);
    setSearchInputValue("");
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearchInputValue(value);
  };

  console.log(inputBigScale);

  return (
    <Nav>
      <Logo>
        <LogoImg
          variants={logoVariants}
          whileHover="hover"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          ></path>
        </LogoImg>
        <LogoName>Youtube</LogoName>
      </Logo>
      <AnimatePresence initial={false}>
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            onChange={onChange}
            value={searchInputValue}
            animate={{
              scaleX: inputBigScale ? 1 : 0,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            placeholder="Search"
          />

          <SearchIcon
            onClick={onInputSize}
            animate={{
              x: inputBigScale ? -200 : 0,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </SearchIcon>
        </SearchForm>
      </AnimatePresence>
    </Nav>
  );
};

export default Header;
