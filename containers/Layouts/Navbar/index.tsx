import React from "react";
import styled from "styled-components";
import Link from "next/link";

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

const Position = styled.div`
  position: relative;
  z-index: 100;
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

const LinkStyled = styled.span`
  transition: all 0.4s ease 0s;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;

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
    background-color: ${({ theme }) => theme.colors.pinkDark};
    border-radius: 5px;
    border: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: white;
    cursor: pointer;
    display: block;
    font-size: 12px;
    font-weight: 600;
    padding: 11px 18px;
    text-transform: uppercase;
    transition: all 0.4s ease 0s;

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

const LinkMobile = styled.span`
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
    <Position>
      <Header>
        <Link href="/">
          <a>
            <Logo src="/img/logo-header.png" alt="Logo Brin D'ours" />
          </a>
        </Link>
        <nav>
          <NavList>
            <NavLink>
              <LinkStyled>
                <Link href="/concept">
                  <a>Notre concept</a>
                </Link>
              </LinkStyled>
            </NavLink>
            <NavLink>
              <LinkStyled>
                <Link href="/equipe">
                  <a>L'équipe</a>
                </Link>
              </LinkStyled>
            </NavLink>
            <NavLink>
              <LinkStyled>
                <Link href="/tarifs">
                  <a>Tarifs</a>
                </Link>
              </LinkStyled>
            </NavLink>
            <NavLink>
              <LinkStyled>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </LinkStyled>
            </NavLink>
            <NavLink>
              <LinkStyled>
                <Link href="/pre-inscription">
                  <a>Pré-inscription</a>
                </Link>
              </LinkStyled>
            </NavLink>
          </NavList>
        </nav>
        <Link href="/espace-famille">
          <Button>Espace Famille</Button>
        </Link>
      </Header>
      <HeaderMobile>
        <nav>
          <NavListMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/concept">
                  <a>
                    <img height="20px" src="svg/baby-light.svg" alt="Concept" />
                    <p>Concept</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/equipe">
                  <a>
                    <img
                      height="20px"
                      src="svg/hands-helping-light.svg"
                      alt="L'équipe"
                    />
                    <p>L'équipe</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/tarifs">
                  <a>
                    <img height="20px" src="svg/coin-light.svg" alt="Tarifs" />
                    <p>Tarifs</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/contact">
                  <a>
                    <img
                      height="20px"
                      src="svg/comment-alt-exclamation-light.svg"
                      alt="Contact"
                    />
                    <p>Contact</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/pre-inscription">
                  <a>
                    <img
                      height="20px"
                      src="svg/pencil-light.svg"
                      alt="Pré-inscription"
                    />
                    <p>Pré-inscription</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
            <NavLinkMobile>
              <LinkMobile>
                <Link href="/espace-famille">
                  <a>
                    <img
                      height="20px"
                      src="svg/user-friends-light.svg"
                      alt="Espace Famille"
                    />
                    <p>Espace Famille</p>
                  </a>
                </Link>
              </LinkMobile>
            </NavLinkMobile>
          </NavListMobile>
        </nav>
      </HeaderMobile>
    </Position>
  );
}

export default NavbarMain;
