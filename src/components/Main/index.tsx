import * as S from './styles'

const Main = ({
  title = 'Boilerplate NextJS',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem átomo - Boilerplate NextJS escrito ao lado"
    ></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Image
      src="/img/hero-illustration.svg"
      alt="Pessoa em frente a tela de um computador programando"
    ></S.Image>
  </S.Wrapper>
)

export default Main
