import { desaturate, lighten } from 'polished'
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
export const Card = styled.button`
  ${({ theme }) => css`
    width: 240px;
    display: flex;
    align-items: center;
    border: 0;
    justify-content: first baseline;
    padding: 4px 12px 8px 2px;
    border-radius: 16px;
    border: 1px solid ${theme.colors.white};
    background: #6a5acd;
    cursor: pointer;

    &:hover {
      background: ${lighten(0.1, '#6a5acd')};
    }
  `}
`
export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: right;
  `}
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
