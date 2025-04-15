import styled from "styled-components";
import {FC, ReactNode} from "react";

interface IProps {
    element: ReactNode;
}

export const Icon: FC<IProps> = ({element}) => (
    <Wrapper>
        {element}
    </Wrapper>
)

const Wrapper = styled.div`
    display: block;
    width: 22px;
    height: 22px;
`;