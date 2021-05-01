import { Home, ChildFriendly } from "@material-ui/icons";

interface Itens {
  name: string;
  icon: JSX.Element;
  route: string;
}
const itens: Itens[] = [
  {
    name: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    name: "Cidades",
    icon: <ChildFriendly />,
    route: "cidades",
  },
];
export default itens;
