import React from "react";
import './content.css'
import Fundo from '../../../src/assets/fundo.jpg'
import Ven from '../../../src/assets/ven.jpg'
import Mamiferos from '../../../src/assets/mamiferos.jpg'
import Dom from '../../../src/assets/dom.jpg'
function Centro(){
    return(
        <div className="centro">
            <img src={Fundo} className='f'/>
            <h1 className="txt">Bem-vindo ao incrível mundo selvagem</h1>
            <button className="bt2"><img src={Ven} className="v" alt="Animais venenosos" placeholder="Animais venenosos"/></button>
            <button className="bt3"><img src={Mamiferos} className="v" /></button>
            <button className="bt4"><img src={Dom} className="v" /></button>
            <p className="conteudo">Vida Selvagem tradicionalmente é entendido como as espécies animais não domesticadas, mas passou a incluir todas as plantas, fungos e outros organismos que crescem ou vivem selvagens em uma área sem ser introduzidos por seres humanos.

A vida selvagem pode ser encontrada em todos os ecossiostemas. Desertos, florestas tropicais, planícies e outras áreas, incluindo as cidades mais desenvolvidas, todas têm formas distintas de vida selvagem. Embora na cultura popular a expressão geralmente se refira a animais intocados pela presença humana, a maioria dos cientistas concordam que a vida selvagem ao redor do globo sofre, de um modo ou de outro, o impacto das a(c)tividades humanas.

Historicamente, os seres humanos buscaram separar a civilização da vida selvagem de uma série de maneiras, incluindo os aspectos legal, social e moral. Isto tem sido tema de debate através de toda história regist(r)ada, particularmente por meio da literatura. As religiões têm declarado com freqüência que certos animais são sagrados e em épocas recentes, a preocupação com o meio ambiente e a exploração da vida selvagem para benefício humano ou entretenimento tem provocado protestos por parte de ativistas.

As populações mundiais de peixes, aves, mamíferos e répteis sofreram uma redução de 52% entre 1970 e 2010.[1] O Relatório Planeta Vivo da WWF, publicado de dois em dois anos, salienta que as exigências das populações humanas estão agora 50% acima do que a natureza é capaz de aguentar, com árvores a serem cortadas, aquíferos a serem bombeados e dióxido de carbono a ser emitido demasiadamente depressa para o planeta recuperar. Segundo o comunicado de Ken Norris, director científico da Sociedade Zoológica de Londres, “estes danos não são inevitáveis, são uma consequência do estilo de vida que escolhemos”.[1]

Segundo os novos resultados (2014), a pior quebra deu-se entre as populações de peixes de água doce, que caíram 76% nas últimas quatro décadas até 2010, enquanto ambos os números relativos às populações marinhas e terrestres desceram 39%. A principal razão do declínio das populações foi a perda de habitats naturais, a caça e a pesca e as alterações climáticas.[1]</p>
        </div>
    )
};
export default Centro;