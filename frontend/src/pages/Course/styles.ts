import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const ContentHeader = styled.main`
  ${({ theme }) => css``}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ContentMain = styled.h3`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.xxsmall};
  `}
`
export const ContentFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.medium};

    > svg {
      margin-top: -25px;
    }
  `}
`

export const ContentFooterTop = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
  `}
`

export const Filter = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.medium};

    > button {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const FilterItem = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    background: ${theme.colors.mainBg};
    border: 1px solid ${theme.colors.greenLigh};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: 30px;
    color: ${theme.colors.greenLigh};
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: ${lighten(0.1, theme.colors.greenLigh)};
    }
  `}
`
