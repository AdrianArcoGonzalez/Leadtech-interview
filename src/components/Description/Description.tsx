import "./Description.css";

const Description = (): JSX.Element => {
  return (
    <section className="description">
      <p className="description-text" role={"paragraph"}>
        Escribe código en JavaScript que solucione el problema a continuación.
        Estructura tu código como creas mejor, y una vez que finalices la prueba
        envíanoslo por correo. Estos son los datos que tenemos: Los divisores de
        287 son 1, 7, 41 y 287. Esos divisores al cuadrado son 1, 49, 1681,
        82369.
      </p>
      <p className="description-text" role={"paragraph"}>
        La suma de los divisores al cuadrado es 84100, que es igual a 290 \*
        290. ¡Un cuadrado! Dados los enteros min, max, queremos encontrar todos
        los enteros entre min y max que tienen suma de divisores al cuadrado que
        también es un cuadrado. Por ejemplo 287
      </p>
    </section>
  );
};

export default Description;
