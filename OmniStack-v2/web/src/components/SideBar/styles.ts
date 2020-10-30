import styled from "styled-components";

export const AsideContainer = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(
        329.54deg,
        var(--gradient-blue0) 0%,
        var(--gradient-blue100) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 48px;
    }

    /* footer a, */
    footer button {
        width: 48px;
        height: 48px;

        border: 0;

        background: var(--blue-dark);
        border-radius: 16px;
        border: 1px solid var(--blue);
        color: var(--white);

        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: var(--cyan);
            color: var(--blue);
        }

        & [data-icon] {
            font-size: 24px;
        }
    }
`;
