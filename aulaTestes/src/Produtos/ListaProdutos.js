import Style from "../Style"
import Produtos from "./Produtos"
import { SafeAreaView, Text } from "react-native"

export default props => {
    function obterLista() {
        return Produtos.map(
            p => {
                return (
                    <SafeAreaView>
                        <Text Key={p.id}>
                            {p.nome} - R$ {p.preço}
                        </Text>
                    </SafeAreaView>
                )
            }
        )
    }
    return (
        <>
            <Text style={Style.fontG}>
                - Lista de Produtos -
            </Text>
            <Text></Text>
            {obterLista()}
        </>
    )
}