import styled from "styled-components";

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
    box-shadow: ${props => (props.type === 0 ? 'none' : '2px 2px 5px rgba(0, 0, 0, 0.2)')};
    border-radius: 5px;
`