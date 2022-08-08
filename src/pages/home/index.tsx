import { Flex, Main, Paragraph, Input} from "components"

export const Home = () => {
  return (
    <Main>
      <Flex gap="0.5%">
        <Paragraph>Vou trabalhar em</Paragraph>
        <Input type="text" placeholder="Dê um nome para o seu projeto"></Input>
        <Paragraph>durante</Paragraph>
        <Paragraph>minutos.</Paragraph>
      </Flex>
    </Main>
  )
}