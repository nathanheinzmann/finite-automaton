import React, { useState } from 'react';

import { Container, BreakPoint, Element, FulltTable, RightSide, UserInput } from './styles';

var content = [
    ['X', '$',  'a',  'e',  'i',  'o',  'u',  'n',  't',  'g',  'r',  'c',  'h',  's',  'w',  'B'],
    ['0', 1, -1, -1,  4, -1, -1, -1, -1, 13, -1, 10, -1, 15, -1, -1],
    ['1', -1,  2,  2,  2,  2,  2, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['*2', -1,  3,  3,  3,  3,  3, -1, -1, -1, -1, -1, -1, -1, -1, -2],
    ['*3', -1, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -2],
    ['4', -1, -1, -1, -1, -1, -1,  5, -1, -1, -1, -1, -1, -1, -1, -1],
    ['*5', -1, -1, -1, -1, -1, -1, -1,  6, -1, -1, -1, -1, -1, -1, -2],
    ['6', -1, -1,  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['7', -1, -1, -1, -1, -1, -1, -1, -1,  8, -1, -1, -1, -1, -1, -1],
    ['8', -1, -1, -1,  9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['9', -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1],
    ['10', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, -1, -1, -1],
    ['11', -1, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['12', -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1],
    ['13', -1, -1, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['14', -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1, -1, -1],
    ['15', -1, -1, 14, -1, -1, -1, -1, -1, -1, -1, -1, 16, -1, -1, -1],
    ['16', -1, -1, -1, -1, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ['17', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1],
    ['*18', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -2]
]

var description1 = 'PALAVRAS PERMITIDAS';
var language1 = ['int', 'integer', 'char', 'get', 'set', 'show', '$a', '$aa', '$aea', '$e', '...']
var description2 = 'IDENTIFICADORES';
var language2 = ['Começar com $', 'Ter somente vogais', 'Max = 4', 'Min = 2'];
var errorMessage = ['Erro léxico - símbolo não encontrado'];
var validMessage = ['PALAVRA PERTENCE A LINGUAGEM'];
var maxLenght = 'Caro amigo, a maior palavra do vocabulário é "Integer", que possui 7 letras';

const Table = React.FC = () => {
  const [value, setValue] = useState();
  const [response, setResponse] = useState();
  const handleChangeValue = (value) => {
    var flag = 0;
    setValue(value)
    if(value.length >= 7)
      setResponse(maxLenght);
    else {
      for(let i = 1; i<15; i++){
        if(content[0][i]=='n'){
          console.log("achou", content[0][i], "na posição ", i);
        }
      }
    }
  };

  return(
    <Container>
        {/* <FulltTable>
          {content.map((item) => (
            <BreakPoint>
              {
                item.map((value) => (
                  <Element>
                    {value}
                  </Element>
                ))
              }
            </BreakPoint>
          ))}
        </FulltTable> */}
        <RightSide>
          <h1>{description1}</h1>
          <div>
            {
              language1.map((item) => (
                <p>
                  {item};&nbsp;
                </p>
              ))
            }
          </div>
          <h1>{description2}</h1>
          <div>
            {
              language2.map((item) => (
                <p>
                  {item};&nbsp;
                </p>
              ))
            }
          </div>
          <UserInput>
            <input
              onChange={({target})=> handleChangeValue(target.value)}
              value={value} type="text"
              placeholder="Nome da variável."/>
              <p>{response}</p>
          </UserInput>
        </RightSide>
    </Container>
  );
}

export default Table;