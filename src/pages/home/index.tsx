import { Flex, Main, Paragraph, Input, Counter} from "components"

export const Home = () => {
  return (
    <Main>
      <Flex gap="0.5%">
        <Paragraph>Vou trabalhar em</Paragraph>
        <Input type="text" placeholder="Dê um nome para o seu projeto"/>
        <Paragraph>durante</Paragraph>
        <Input type="text" placeholder="00" modifier/>
        <Paragraph>minutos.</Paragraph>
      </Flex>
     <Counter/>
    </Main>
  )
}