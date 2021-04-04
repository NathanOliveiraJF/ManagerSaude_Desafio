import { useState } from "react";

function useForm(Propriedades) {
  const [propriedade, setpropriedade] = useState(Propriedades);

  function setValue(chave, valor) {
    setpropriedade({
      ...propriedade,
      [chave]: valor}
    )
  }

  function handleChange(infoAlbum) {
    setValue(
      infoAlbum.target.getAttribute('name'),
      infoAlbum.target.value,
    )

  }
  return {
    propriedade,
    handleChange
  };
}

export default useForm;