import React from "react";

function rules() {
  return (
    <main className=" font-light p-6 text-zinc-200 flex flex-col gap-4 ms-auto me-auto max-w-4xl text-lg">
      <h1 className="mt-6 font-semibold text-3xl">REGLAMENTO</h1>
      <h2 className="mt-4 font-medium text-xl">ORGANIZADORES:</h2>
      <p>
        Los organizadores serán grupos de corredores de Salto, mediante una
        COMISION ORGANIZADORA y nucleados con el nombre de SALTO RUN, integrada
        por los representantes designados de esos grupos más algunos corredores
        independientes. Dicha Comisión ha interactuado con las Autoridades
        locales (Intendencia de Salto) para obtener los permisos y
        autorizaciones correspondientes.
      </p>
      <h2 className="mt-4 font-medium text-xl">JUECES:</h2>
      <p>
        SALTO RUN, definió como autoridades máximas a los JUECES DEL CAMPEONATO.
        Los mismos serán los encargados de la fiscalización y organización
        efectiva de las actividades, estará integrado por las siguientes
        personas:
      </p>
      <ul className=" px-4 font-medium text-lg">
        <li>JUEZ 1 – Titular: Richard Nessi</li>
        <li>JUEZ 2 – Titular: Martin Peralta</li>
      </ul>
      <h2 className=" mt-4 font-medium text-xl">FORMATO DEL CAMPEONATO:</h2>
      <p>
        serán 7 fechas, en lugares y fecha a determinar. Las mismas serán
        anunciadas oportunamente. Para competir por los premios se debe
        participar al menos 4 fechas. Todos los participantes que pasen la línea
        de llegada sumarán puntos que se irán acumulando fecha a fecha.
      </p>
      <h2 className=" mt-4 font-medium text-xl">Puntajes por categoría:</h2>
      {/* <ul>
        <li>1º = 30 puntos</li>
        <li>2º = 26 puntos</li>
        <li>3º = 23 puntos</li>
        <li>4º = 21 puntos</li>
        <li>5º = 20 puntos</li>
        <li>6º = 19 puntos</li>
        <li>7º = 18 puntos</li>
        <li>8º = 17 puntos</li>
        <li>9º = 16 puntos</li>
        <li>10º = 15 puntos</li>
        <li>11º = 14 puntos</li>
        <li>12º = 13 puntos</li>
        <li>13º = 12 puntos</li>
        <li>14º = 11 puntos</li>
        <li>15º = 10 puntos</li>
        <li>16º = 9 puntos</li>
        <li>17º = 8 puntos</li>
        <li>18º = 7 puntos</li>
        <li>19º = 6 puntos</li>
        <li>20º = 5 puntos</li>
        <li>21º = 4 puntos</li>
        <li>22º = 3 puntos</li>
        <li>23º = 2 puntos</li>
        <li>a partir del 24° hasta el final 1 punto cada competidor.</li>
      </ul> */}
      <p>
        1º = 30 puntos, 2º = 26 puntos, 3º = 23 puntos, 4º = 21 puntos, 5º = 20
        puntos,6º = 19 puntos, 7º = 18 puntos, 8º = 17 puntos, 9º = 16 puntos,
        10º = 15 puntos, 11º = 14 puntos,12º = 13 puntos, 13º = 12 puntos, 14º =
        11 puntos, 15º = 10 puntos,16º = 9 puntos, 17º = 8 puntos, 18º = 7
        puntos, 19º = 6 puntos, 20º = 5 puntos, 21º = 4 puntos,22º = 3 puntos,
        23º = 2 puntos, y a partir del 24° hasta el final 1 punto cada
        competidor.
      </p>
      <p>
        En el campeonato podrán competir atletas locales, de otros departamentos
        y también extranjeros.
      </p>
      <p>
        En el campeonato podrán competir atletas locales, de otros departamentos
        y también extranjeros.
      </p>
      <h2 className=" mt-4 font-medium text-xl">Premiación</h2>
      <p>
        serán 21 categorías (damas, hombres y atletas especiales) premiadas del
        1 a 5 en la cada categoría. La premiación será en la última fecha
      </p>
      <h3 className=" mt-4 font-medium text-lg">También se premiará:</h3>
      <ol className="px-4">
        <li>
          1) Al campeón y la campeona salteña (aquellos atletas que hayan sumado
          más puntos en las respectivas tablas generales acumuladas de hombre y
          mujer).
        </li>
        <li>
          2) al grupo más numeroso (será la sumatoria de todos los atletas que
          participaron a lo largo del campeonato por cada grupo).
        </li>
        <li>
          3) al grupo con mayor puntaje, para ello cada grupo sumará 30, 26, 23,
          21 y 20 puntos por tener un corredor en el primer, segundo, tercer,
          cuarto y quinto puesto de cada categoría respectivamente.
        </li>
      </ol>
      <p>
        En caso de empates en puntos para la premiación por categorías, se
        tendrá en cuenta primero: a la cantidad de carreras que asistió cada
        corredor, segundo: el puesto en la clasificación general de cada
        corredor. Si a pesar de ello permanece el empate, se premia todos los
        corredores en dicha situación. Para el grupo más numeroso, si empatan
        dos o más grupos, se tendrá en cuenta la cantidad de podios obtenidos
        por sus corredores.
      </p>
      <p>
        Si a pesar de ello permanece el empate, se premia todos los grupos en
        dicha situación. Para el grupo con mayor cantidad de puntos, de haber un
        empate se premia a todos los grupos en dicha situación. Cada corredor
        registró en la planilla de inscripción el grupo al cual pertenece, si un
        corredor en el transcurso del campeonato cambió de grupo, se tomará el
        grupo en el cual terminó corriendo, siempre que haya participado en al
        menos cuatro carreras por dicho grupo.
      </p>
      <p>
        Para ello deberá haber hecho previamente una nueva inscripción
        especificando el nombre de su nuevo grupo.
      </p>
      <p>
        La clasificación general para determinar el campeón y campeona salteña,
        así como las cuestiones citadas anteriormente, será confeccionada con el
        mismo criterio de puntajes utilizado para la clasificación por
        categorías.
      </p>
      <p>
        En caso de empate en el primer lugar de la misma, se tendrá en cuenta lo
        siguiente: Primero, número de carreras a la que asistió cada corredor.
        Segundo, número de etapas ganadas por cada corredor.
      </p>
      <h2 className=" mt-4 font-medium text-xl">INSCRIPCIÓN</h2>
      <p>
        La inscripción se hará digitalmente, a través de un formulario web:
        www.saltorun.com
      </p>
      <p>
        Las mismas se podrán hacer hasta el día anterior de cada fecha. Luego
        los corredores no podrán anotarse (salvo corredores de otros
        departamentos y del exterior).
      </p>

      <h2 className=" mt-4 font-medium text-xl">RETIRO DE NÚMEROS:</h2>
      <p>
        Los números se podrán levantar en el gimnasio de RICHARD NESSI – Artigas
        2099, en días y horarios a definir (serán comunicados
        oportunamente).Para las siguientes fechas, cuando el corredor ya posea
        su número, deberá pasar con el ticket de pago para confirmar la
        inscripción correspondiente.
      </p>
      <h2 className=" mt-4 font-medium text-xl">
        DESLINDE DE RESPONSABILIDAD Y FICHA MÉDICA:
      </h2>
      <p>
        Al momento de levantar el número cada corredor y de forma personal
        deberá firmar y colocar su documento de identidad en el deslinde de
        responsabilidad que se adjunta al final de este reglamento.
      </p>
      <p>
        <strong>
          Además de ello deberá presentar ficha médica o carnet de aptitud
          física (no es válido carnet de trabajo o de conducir) o certificado
          médico que acredite estar apto para realizar actividad física y poder
          participar de todas las fechas del mencionado campeonato.
        </strong>
      </p>
      <h2 className=" mt-4 font-medium text-xl">COSTO:</h2>
      <p>
        Competir en cada fecha tendrá un costo de $ 350 (trescientos cincuenta
        pesos uruguayos) que incluye: derecho a participar, derecho a asistencia
        médica (EMI) durante el lapso que dure la competencia, derecho a todos
        los sorteos que se realicen durante el campeonato, sorteo final de una
        moto 0KM, dorsal con el número de competidor, acceso a mesa de
        hidratación y frutas, medalla finisher en cada fecha, derecho a
        participar por la premiación final del campeonato.
      </p>
      <p>
        Se podrá participar de forma no competitiva, en una distancia menor a la
        principal (corre caminata) con un costo de $250 (doscientos cincuenta
        pesos uruguayos) que incluye el derecho a participar, derecho a
        asistencia médica (EMI) durante el lapso que dure la competencia, acceso
        a la mesa de frutas e hidratación y medalla finisher en cada fecha.
      </p>
      <p>
        Se podrá abonar el total de las fechas del campeonato (siete) con un
        costo de $2000 (dos mil pesos uruguayos) para la instancia competitiva y
        de $1300 (mil trescientos pesos uruguayos) para la participativa, para
        acceder a dicho beneficio se deberá abonar el mismo antes del inicio de
        la fecha 1.
      </p>
      <h2 className=" mt-4 font-medium text-xl">FORMA DE PAGO:</h2>
      <p>
        El pago de la inscripción se hará a través de un colectivo de ABITAB
        (Número 123467 a nombre de Salto Run).
      </p>

      <h2 className=" mt-4 font-medium text-xl">
        COMPETIDORES MENORES DE EDAD:
      </h2>
      <p>
        Podrán participar en dicho campeonato toda persona mayor de 18 años o
        que haya cumplido los 18 años de edad, así como aquellos menores entre
        14 y 17 años cumplidos, previa autorización de padre, madre o tutor
        responsable por el mismo.
      </p>

      <h2 className=" mt-4 font-medium text-xl">SUSPENSIÓN:</h2>
      <p>
        Se suspenderá alguna fecha únicamente en caso de tormentas eléctricas,
        de ser así la Comisión decidirá si la misma queda sin efecto o
        dependiendo del calendario de carreras, se la puede pasar a otra fecha
        que será oportunamente comunicado por nuestras redes sociales.
      </p>

      <h2 className=" mt-4 font-medium text-xl">SORTEOS:</h2>
      <p>
        En cada fecha del campeonato la organización sorteará un vale de compra
        en dólares de un lugar y monto a determinar. En la última etapa y como
        cierre del campeonato se sorteará una Moto 0km.
      </p>

      <h3 className=" mt-2 font-medium text-lg">
        Forma de participar en el sorteo:
      </h3>
      <p>
        Todos los anotados y que hayan pagado la inscripción competitiva ($350)
        tendrán derecho al sorteo.
      </p>
      <p>
        Cada vez que el participante ratifique su inscripción deberá escribir
        con lapicera su nombre y número de cédula en el reverso del ticket de
        pago de Abitab (ya que pasado unos días la tinta del ticket se borra),
        luego depositará el mismo en la urna dispuesta a tal efecto.
      </p>
      <p>
        Todos los tickets depositados a lo largo de todo el campeonato
        participarán por el sorteo final de la moto.
      </p>
      <p>
        Para acceder a los premios es obligatorio que el participante
        beneficiado se encuentre presente en el momento del sorteo. Si pasados 2
        minutos de haberse extraído el ticket con el nombre del participante el
        mismo no se hace presente, se procederá a extraer un nuevo ticket.
      </p>
      <p>
        Será por cuenta del beneficiado con el sorteo de la moto, ocuparse de
        cumplir con los requisitos de empadronamiento y demás acciones de la
        normativa de circulación vigente.
      </p>

      <h2 className=" mt-4 font-medium text-xl">NÚMERO DE COMPETIDOR:</h2>

      <p className="px-4">
        1. A cada competidor en el momento de la inscripción se le asignará un
        número que será el mismo para todo el campeonato. Será obligación del
        competidor, retirar el número en la primera fecha (contra muestra del
        ticket de pago de inscripción). No se entregarán número el día de la
        carrera, salvo a los competidores que lleguen de otro departamento o del
        exterior.
      </p>
      <p className="px-4">
        2. Se deberá portar el número en el pecho del competidor, usarlo en otro
        lugar o no portarlo en la carrera determinará que el competidor no
        clasificará. La pérdida del número, dará lugar a una nueva inscripción
        por parte del competidor, perdiendo todos los puntos acumulados si se
        extraviara el número asignado.
      </p>

      <h2 className=" mt-4 font-medium text-xl">REGLAMENTO DE CARRERA:</h2>
      <h3 className=" mt-2 font-medium text-lg">Largada:</h3>
      <p>
        Se largará en grupo, previo a la largada se explicara el recorrido en
        voz alta (también se publicará en redes el mismo en días previos a la
        carrera). El JUEZ Nº 1 el encargado de largar la carrera mediante una
        bandera.
      </p>

      <h3 className=" mt-4 font-medium text-lg">Desarrollo de la prueba:</h3>
      <p>
        Habrá puntos de control durante todo el recorrido y jueces móviles
        (bicicleta y/o moto). Cualquier acto de mala fe, cortar camino, lastimar
        a otro competidor o cualquier acto anti deportivo será automáticamente
        descalificado. No se permitirá el acompañamiento del corredor por
        personas externas a la prueba, ya sea corriendo, en bicicleta o en
        cualquier otro medio de locomoción.
      </p>
      <h3 className=" mt-2 font-medium text-lg">Llegada:</h3>
      <p>
        Se deberá llegar a la meta por el embudo vallado que conducirá al
        competidor a la línea de meta. Cualquier competidor que no cruce la meta
        ingresando por dicho embudo no calificará.
      </p>
      <p>
        Al cruzar la meta, a cada competidor se le entregará un número de
        llegada. El competidor, luego de recuperarse, deberá entregar ese número
        en la <b>mesa de control e inscripciones.</b>
      </p>
      <p>
        Quien no entregue su número de llegada en la mesa de control e
        inscripciones no ingresará su puesto de llegada y por tanto no
        clasificará.
      </p>
      <p>
        Apelamos a la deportividad y a la colaboración con los jueces, y sobre
        todo con los encargados de la mesa de control e inscripciones. Cuanto
        antes se procesen los datos más rápido estarán los resultados.
      </p>
    </main>
  );
}

export default rules;
