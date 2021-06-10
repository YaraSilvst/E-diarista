import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import { UserDescription } from "ui/components/data-display/UserInformation/UserInformation.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Yara Silvestre"}
        picture={"https://github.com/YaraSilvst.png"}
        rating={4}
        description={"Três Corações"}
      />
    </div>
  );
}
