import "./styles.css"
import React, { useState } from "react"
import { Button } from "antd"

export default function App() {
  const otaria: string[] = ['Lorrany', 'tu', 'é', 'mto', 'otária']
  const [otariaBoolean, setOtariaBoolean] = useState<boolean>(false)
  const [lindo, setLindo] = useState<boolean>(false)
  return (
    <div style={{textAlign: 'center'}}>
      <Button onClick={() => setOtariaBoolean(true)}>Clica Aqui</Button>
      {otariaBoolean && <>
        {otaria.map((item: string) => <h1>{item}</h1>)}
        <Button onClick={() => setLindo(true)}>E Agora Clica Aqui Xuxu</Button>
        {lindo && <><p>Amigo, toma para ti o que quiseres,<br/>
passeia o teu olhar pelos meus recantos,<br/>
e se assim o desejas, dou-te a alma inteira,<br/>
com suas brancas avenidas e canções.<br/>
<br/>
Amigo - faz com que na tarde se desvaneça<br/>
este desejo de que todas as roseiras<br/>
me pertençam.<br/>
<br/>
Amigo,<br/>
se tens fome come do meu pão.<br/>
<br/>
Tudo, amigo, o fiz para ti. Tudo isto<br/>
que sem olhares verás na minha casa vazia:<br/>
tudo isto que sobe pelo muros direitos<br/>
- como o meu coração - sempre buscando altura.<br/>
<br/>
Sorris-te - amigo. Que importa! Ninguém sabe<br/>
entregar nas mãos o que se esconde dentro,<br/>
mas eu dou-te a alma, ânfora de suaves néctares<br/>
<br/></p>
<p>Pablo Neruda</p></>
}
      </>}
    </div>
  )
}
