# Inova - Manual de Instalação com Docker

# Instalação em Ambiente Windows

A forma mais escalável de rodar o docker no windows é por meio do WSL. WSL permite que rodemos sistemas linux dentro 
do windows como subsistema. Docker foi desenvolvido originalmente para performar bem em sistemas linux, sendo assim, 
para poder usá-lo em ambiente windows, é necessário ter este linux embarcado. 

Com o WSL poderemos ter um ambiente fidedigno para quelquer desenvolvedor que quiser ter o inova rodando localmente. 

Obs: Não é necessário ser usuário avançado de Linux para ter o inova rodando no Windows, o Linux servirá só pra servir seu ambiente. 

## Instalação do WSL 2 no windows 10

## Habilitando o WSL2

Primeiramente é necessário ter uma versão atual de compilação no seu windows 10. Este tutorial tem como base a versão 10.0.19044 do Windows com Compilação 19044. É recomendado ter estas últimas versões para que o ambiente possa ser reproduzido. 

Para habilitar o WSL2 execute seu Power Shell como administrador e execute estes comandos: 

**dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart** \
**dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart** 

Depois abra seu Power Shell e rode o comando wsl. Será retornada uma mensagem que você ainda não tem uma distribuição
do linux no seu ambiente. Caso ocorra algum problema reinicie a máquina e faça isto de novo. 

## Instalando o WSL2

É preciso baixar o Kernel do WSL2 clicando [nestes link oficial da microsoft](https://docs.microsoft.com/pt-br/windows/wsl/wsl2-kernel) . Após baixar , instale.  

## Configurando Versão 2 do WSL

No momento, a versão 1 do WSL vem como default. Para habilitar a versão 2, digite o comando abaixo no seu Power Shell: 

**wsl --set-default-version 2**

## Definindo uma Distribuição Linux no Windows Store

Logado no Windows Store escolha uma distribuição Linux que será instalada no seu Windows. Para o inova foi utilizada a Distro Ubuntu. Na barra de pesquisa do Windows Store digite Ubuntu e depois clique em Obter. Após Baixar , clique em iniciar. Será aberto um terminal do linux, e será solicitado a criação de um usuário e senha do Linux. 

Após ter esta distribuição instalada, ao digitar wsl no seu terminal será aberto algo do tipo: 

PS C:\Users\55119> wsl \
webdev@DESKTOP-FHV0N67:/mnt/c/Users/55119$


Você já está dentro da sua distribuição Linux. 

## Definindo o Quanto de Recursos o WSL 2 Utilizará da sua Máquina

É possível configurar o quanto de recursos o wsl consumirá da nossa máquina, se não configurarmos isto é provavel que ele consuma muito além do necessário e comprometa a performance da máquina host. 

Crie um arquivo **.wslconfig** na raiz da pasta de seu usuário do Windows. **(C:\Usuários\<seu_usuario>)** e faça as seguintes configurações: 

**[wsl2]** \
**memory=8GB** \
**processors=4** \
**swap=2GB**

Estas são configurações Básicas, se quiser ver mais a fundo sobre estas configurações , [clique neste Link da Microsoft](https://docs.microsoft.com/pt-br/windows/wsl/wsl-config#wsl-2-settings) 

## Integrando o WSL com o Docker Desktop

Baixo o Docker Desktop Clicando neste Link [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop). É importante destacar que não é para baixar o Docker ToolBox , nem o Docker Engine, é para baixar o Docker Desktop, com ele trabalhamos de forma que faça mais sentido e consuma menos recursos da máquina. Faça a instalação do mesmo. 

Após instalar o Docker Desktop, abra a aplicação dele, vá no ícone referente a configurações. Na Guia Geral (General) deixe todas as opções habilitadas, exceto a opção: **Expose daemon on tcp://localhost:2375 without TLS**. 

Ainda em configurações, vá até a aba **Resouces**, na opção **WSL INTEGRATION** marque a opção **Enable integration with my default WSL distro**

Abaixo habilite a distro Ubuntu que deverá aparecer se ela foi instalada normalmente. 

## Algumas Dicas de WSL 

Use algum terminal que emule linha de comando Linux no Windows Ex: Gitbash ou cmder

Quando você entra em algum terminal e digita wsl você tem algo como este: 

**PS C:\Users\55119> wsl** \
**webdev@DESKTOP-FHV0N67:/mnt/c/Users/55119$** 

digite : **sudo apt update**

Note que por padrão as nossas partições são montadas a partir do diretório mnt. Se voce voltar três diretórios e der um ls por exemplo, teremos o seguinte resultado: 

**webdev@DESKTOP-FHV0N67:/mnt$ ls** \
**c  d  e  wsl**

Veja que os drivers podem ser visualizados. Uma dica muito importante é que seus projetos sejam criados à partir de sua pasta de usuário do Linux. Isto melhora grandemente a performance do ambiente. 

Outra dica é que se for digitado \\wsl$ na barra de endeços do Windows Explore os diretórios do Docker e da distribuição Linux serão abertos graficamente. 

Na linha de comando também é possível ver quais instancias estão rodando no WSL digitando wsl -l -v, o resultado será : 

**NAME                   STATE           VERSION** \
 **Ubuntu                 Running         2** \
 **docker-desktop-data    Running         2** \
 **docker-desktop         Running         2**

Para desligar todas as distribuições linux basta digite **wsl --shutdown** 

Para destigar somente uma distribuição específica digite **wsl --t "nome-da-distribuicao"**