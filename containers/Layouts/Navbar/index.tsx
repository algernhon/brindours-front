import React from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 40px;
  max-width: ${({ theme }) => theme.sizes.widthDefault};
  padding: 20px 10px;
  position: static;
`;

const Logo = styled.img`
  cursor: pointer;
  display: block;
  margin: auto;
  transition: all 0.4s ease 0s;

  & :hover {
    opacity: 0.7;
  }

  @media (min-width: 960px) {
    margin: initial;
  }
`;

const NavList = styled.ul`
  display: none;

  @media (min-width: 960px) {
    display: block;
    list-style: none;
    padding: 0;
  }
`;

const NavLink = styled.li`
  display: inline-block;
  padding: 0 15px;
`;

const Link = styled.a`
  transition: all 0.4s ease 0s;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "TextbookNew", sans-serif;

  @media (min-width: 1080px) {
    font-size: 14px;
  }

  & :hover {
    opacity: 0.6;
  }
`;

const Button = styled.button`
  display: none;

  @media (min-width: 960px) {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: block;
    padding: 12px 18px 9px 18px;
    background-color: ${({ theme }) => theme.colors.pinkDark};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.4s ease 0s;
    text-shadow: 0 1px 3px rgba(156, 122, 130, 0.5);

    & :hover {
      opacity: 0.7;
    }
  }
`;

// Style for mobile devices
const HeaderMobile = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 100;

  @media (min-width: 960px) {
    display: none;
  }
`;

const NavListMobile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const NavLinkMobile = styled.div`
  background-color: white;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  height: 70px;

  border-top: 1px solid #272727;

  & :nth-child(1) {
    border-radius: 30px 0 0 0;
  }

  & :last-child {
    border-radius: 0 30px 0 0;
  }
`;

const LinkMobile = styled.a`
  font-size: 11px;
  color: black;
  transition: all 0.4s ease 0s;
  opacity: 0.8;

  & :hover {
    opacity: 0.6;
  }

  p {
    margin: 0;
    margin-top: 3px;
  }
`;

// This is the default navbar of the website
function NavbarMain() {
  return (
    <>
      <Header>
        <Logo src="/img/logo-header.png" alt="Logo Brin D'ours" />
        <nav>
          <NavList>
            <NavLink>
              <Link href="#">Notre concept</Link>
            </NavLink>
            <NavLink>
              <Link href="#">L'équipe</Link>
            </NavLink>
            <NavLink>
              <Link href="#">Tarifs</Link>
            </NavLink>
            <NavLink>
              <Link href="#">Contact</Link>
            </NavLink>
            <NavLink>
              <Link href="#">Pré-inscription</Link>
            </NavLink>
          </NavList>
        </nav>
        <a href="#">
          <Button>Espace Famille</Button>
        </a>
      </Header>
      <HeaderMobile>
        <nav>
          <NavListMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img height="20px" src="svg/baby-light.svg" alt="Concept" />
                <p>Concept</p>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img
                  height="20px"
                  src="svg/hands-helping-light.svg"
                  alt="L'équipe"
                />
                <p>L'équipe</p>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img height="20px" src="svg/coin-light.svg" alt="Tarifs" />
                <p>Tarifs</p>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img
                  height="20px"
                  src="svg/comment-alt-exclamation-light.svg"
                  alt="Contact"
                />
                <p>Contact</p>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img
                  height="20px"
                  src="svg/pencil-light.svg"
                  alt="Pré-inscription"
                />
                <p>Pré-inscription</p>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile href="#">
                <img
                  height="20px"
                  src="svg/user-friends-light.svg"
                  alt="Espace Famille"
                />
                <p>Espace Famille</p>
              </LinkMobile>
            </NavLinkMobile>
          </NavListMobile>
        </nav>
      </HeaderMobile>
    </>
  );
}

export default NavbarMain;
