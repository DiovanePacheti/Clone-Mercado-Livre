import styled from "styled-components";
import { FiTruck} from 'react-icons/fi'
import { VscSearch } from "react-icons/vsc";

export const Container = styled.div`
  width: 100%;
  height: 78px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoSite = styled(FiTruck)`
    width:45px;
    height:45px;
    margin-right:15px;
`;

export const CapsulaInput = styled.div`
    display:flex;
    justify-content:flex-start;
    padding-top:12px;
    width:100%;
    height:100%;
`;

export const AlternativeEmail = styled(VscSearch)`
    background:var(--color-white);
    color:var(--color-gray);
    padding:4px;
    width:31px;
    height:31px;
    border-left-width:1px;
    /* border:1px 0 0 0 ; */
    border-style: solid;
    border-color: var(--color-gray); 
`;
export const InputMenu = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:3px 0;
`;

export const Menu = styled.ul`
    display:flex;
    justify-content:space-between;
`;