import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const Card = styled.div`
  ${({ theme }) => css`
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid ${theme.colors.white};
    background: #6a5acd;
    cursor: pointer;

    &:hover {
      background: ${lighten(0.1, '#6a5acd')};
    }

    > button {
      border: 2px solid ${theme.colors.darkGray};
      padding: 8px 32px;
      border-radius: 16px;
      background: #6a5ac9;

      &:hover {
        background: ${lighten(0.1, '#6a5acd')};
      }
    }
  `}
`
export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: #9cf27f;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    margin-bottom: 0.4rem;
  `}
`
export const Quantity = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
  `}
`
export const MainContent = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.darkGray};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  `}
`

export const FooterContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  `}
`
