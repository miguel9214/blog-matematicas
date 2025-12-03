import React from 'react';
import '../../styles/sections/_contenido.scss';

const ContenidoSection = () => {
  return (
    <div className="contenido-section">
      <h2 className="contenido-section__title">
        ¿Qué Encontrarás en Este Blog?
      </h2>

      {/* Biografías de Matemáticos */}
      <h3 className="contenido-section__category-title">
        📚 Resumen de las Biografías Seleccionadas
      </h3>

      {/* Tales de Mileto y Zenón de Elea */}
      <div className="contenido-section__bio-card">
        <h4 className="contenido-section__section-title">
          Tales de Mileto y Zenón de Elea
        </h4>

        <div className="contenido-section__mathematicians-row">
          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/tales-mileto.jpg"
              alt="Tales de Mileto - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">Tales de Mileto</p>
          </div>

          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/zenon-elea.jpg"
              alt="Zenón de Elea - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">Zenón de Elea</p>
          </div>
        </div>

        <div className="contenido-section__bio-content">
          <p className="contenido-section__bio-text">
            Tales de Mileto fue un pensador griego que buscó explicar el mundo sin mitos. Viajó, aprendió matemáticas y desarrolló ideas que dieron origen a la geometría deductiva. Descubrió cómo medir alturas con sombras, formuló principios de proporcionalidad, estudió ángulos en círculos y estableció bases para las demostraciones matemáticas. Zenón de Elea, discípulo de Parménides, creó paradojas que cuestionaban el movimiento, el tiempo y el infinito. Sus ideas, como Aquiles y la tortuga o la flecha en vuelo, obligaron a reflexionar sobre continuidad e infinito, influyendo siglos después en el desarrollo del cálculo y del concepto de límite.
          </p>
        </div>
      </div>

      {/* Arquímedes y Galileo Galilei */}
      <div className="contenido-section__bio-card">
        <h4 className="contenido-section__section-title">
          Arquímedes y Galileo Galilei
        </h4>

        <div className="contenido-section__mathematicians-row">
          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/arquimedes.jpg"
              alt="Arquímedes - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">Arquímedes</p>
          </div>

          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/galileo.jpg"
              alt="Galileo Galilei - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">Galileo Galilei</p>
          </div>
        </div>

        <div className="contenido-section__bio-content">
          <p className="contenido-section__bio-text">
            Arquímedes de Siracusa (287–212 a. C.) fue un matemático y físico griego que destacó por combinar teoría y práctica. Calculó áreas y volúmenes de figuras como la esfera y el cilindro, aproximó con gran precisión el número π y formuló el famoso principio de flotación. Además, creó inventos como el tornillo de Arquímedes y estudió la palanca y el equilibrio.
          </p>
          <p className="contenido-section__bio-text">
            Galileo Galilei (1564–1642), considerado padre de la ciencia moderna, aplicó la geometría para estudiar el movimiento, describió trayectorias parabólicas y formuló leyes del movimiento acelerado. Su trabajo geométrico también mejoró instrumentos como el telescopio, impulsando la astronomía moderna.
          </p>
        </div>
      </div>

      {/* René Descartes e Isaac Newton */}
      <div className="contenido-section__bio-card">
        <h4 className="contenido-section__section-title">
          René Descartes e Isaac Newton
        </h4>

        <div className="contenido-section__mathematicians-row">
          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/descartes.jpg"
              alt="René Descartes - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">René Descartes</p>
          </div>

          <div className="contenido-section__mathematician">
            <img
              src="/assets/images/matematicos/newton.jpg"
              alt="Isaac Newton - Retrato histórico"
              className="contenido-section__bio-image"
            />
            <p className="contenido-section__mathematician-name">Isaac Newton</p>
          </div>
        </div>

        <div className="contenido-section__bio-content">
          <p className="contenido-section__bio-text">
            René Descartes (1596–1650) fue un filósofo y matemático francés que impulsó el álgebra moderna al usar letras para incógnitas y constantes, mejorar la notación y proponer métodos para estudiar ecuaciones. En geometría creó la geometría analítica y el plano cartesiano, uniendo el álgebra con las figuras.
          </p>
          <p className="contenido-section__bio-text">
            Isaac Newton (1643–1727), físico y matemático inglés, desarrolló el cálculo infinitesimal, el teorema del binomio generalizado y métodos numéricos como Newton-Raphson. En física formuló las leyes del movimiento, la ley de gravitación universal y realizó aportes esenciales en óptica, integrando matemáticas y naturaleza en un sistema científico coherente.
          </p>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <h3 className="contenido-section__category-title">
        🔗 Recursos Adicionales
      </h3>

      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📊 Historia de las Matemáticas - Línea de Tiempo
        </h5>
        <p className="contenido-section__resource-description">
          La presentación muestra cómo las matemáticas han acompañado el desarrollo humano desde las primeras civilizaciones. Inicia con Mesopotamia, Egipto, Grecia e India, donde surgieron sistemas numéricos, geometría y el concepto del cero. En la Edad Media, las culturas árabes influyeron en Europa mediante la numeración arábiga y los inicios del álgebra. Durante el Renacimiento se redescubrieron textos clásicos y se impulsó la notación simbólica. El siglo XVII marcó avances como el cálculo y la teoría de probabilidades, seguidos por la formalización del cálculo, estadística y teoría de conjuntos en los siglos XVIII y XIX. Finalmente, el siglo XX y la actualidad destacan aplicaciones en computación, física e inteligencia artificial.
        </p>
        <a
          href="https://prezi.com/view/QTGSD5V111ZJsPcAT0FA/?referral_token=3zKcWglnB3FN"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Línea de Tiempo Interactiva →
        </a>
      </div>

      {/* Magacín Matemático */}
      <h3 className="contenido-section__category-title">
        🎥 Resúmenes Programas Magacín
      </h3>

      {/* Fase 2: Tales y Zenón */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          🎬 Fase 2: Tales y Zenón
        </h5>
        <p className="contenido-section__resource-description">
          Tales de Mileto marcó un hito en la historia del pensamiento al reemplazar las explicaciones míticas por razonamientos lógicos y observaciones. Sus contribuciones en geometría sentaron las bases para el estudio matemático posterior. Fue uno de los primeros en demostrar que la naturaleza se rige por leyes racionales. Zenón de Elea revolucionó la reflexión sobre el movimiento y el infinito con sus paradojas, mostrando que conceptos simples pueden llevar a contradicciones. Sus paradojas sembraron dudas sobre la continuidad, el tiempo y la divisibilidad, inquietudes que se resolverán siglos después con el cálculo. Tales y Zenón representan el origen del pensamiento matemático y filosófico riguroso, construyendo principios claros y revelando sus límites.
        </p>
        <a
          href="https://youtu.be/rXAbp5T-Luc?si=xiIwOKTQXmZIzwGs"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Video Educativo →
        </a>
      </div>

      {/* Fase 3: Eureka y más allá */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          🎬 Fase 3: Eureka y más allá
        </h5>
        <p className="contenido-section__resource-description">
          Arquímedes destacó como un genio que combinó creatividad, intuición física y capacidad para razonar matemáticamente. Sus estudios sobre áreas, volúmenes y proporciones dieron lugar a principios que sostienen la física y la ingeniería. Anticipó ideas matemáticas que no se formalizaron hasta siglos después. Galileo Galilei continuó su legado, transformando la ciencia en una actividad experimental rigurosa. Sus observaciones astronómicas y estudios del movimiento inauguraron una nueva forma de comprender el universo. Galileo mostró que las matemáticas son el lenguaje natural para describir fenómenos físicos y que la observación sistemática revela leyes universales. Arquímedes y Galileo forman un puente entre la antigüedad y la ciencia moderna, abriendo paso a una comprensión más precisa del mundo.
        </p>
        <a
          href="https://youtu.be/S6vfuRS-2Sk?feature=shared"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Video Educativo →
        </a>
      </div>

      {/* Fase 4: Entre números y estrellas */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          🎬 Fase 4: Entre números y estrellas
        </h5>
        <p className="contenido-section__resource-description">
          René Descartes impulsó una revolución intelectual al plantear que el conocimiento debía construirse sobre bases claras y racionales. Creó la geometría analítica, fusionando álgebra y geometría, y permitiendo representar figuras y movimientos mediante ecuaciones. Su enfoque sistemático influyó en la filosofía, la ciencia y las matemáticas. Isaac Newton formuló leyes que explican el movimiento, la gravedad y el comportamiento del mundo físico. Desarrolló el cálculo como herramienta para describir cambios continuos, dando forma a una nueva era científica. Descartes y Newton representan el paso definitivo hacia la ciencia moderna, estableciendo el marco racional y geométrico para analizar fenómenos y formular leyes matemáticas precisas.
        </p>
        <a
          href="https://youtu.be/Re7NspvaGI0"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Video Educativo →
        </a>
      </div>

      {/* Recursos Digitales */}
      <h3 className="contenido-section__category-title">
        📚 Recursos Digitales y Resumen de 100 Palabras
      </h3>

      {/* Fase 2 - Tales de Mileto y Zenón de Elea */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📖 Fase 2: Tales de Mileto y Zenón de Elea
        </h5>
        <p className="contenido-section__resource-description">
          En la presentación sobre las biografías de Tales de Mileto y Zenón de Elea, nos llevó a conocer a dos pensadores maravillosos, los cuales marcaron el inicio de la filosofía. Tales de Mileto fue un observador curioso del mundo, el cual estaba convencido de que todo nace del agua, y explicaba la naturaleza sin acudir a mitos, además sus ideas y avances en la geometría y la astronomía, lo convirtieron en el pionero del pensamiento racional, por otro lado el filósofo Zenón de Elea, sorprendió, con sus famosas paradojas, las cuales cuestionaban el movimiento y el infinito, ya que a través de ejemplos muy ingeniosos, invita a reflexionar y a desafiar lo que parece evidente, en conclusión en esta presentación, se observó como estos genios pensadores sentaron las bases de la filosofía occidental.
        </p>
        <a
          href="https://prezi.com/view/SQg38vzFSwfCWoDscoji/?referral_token=o4eLT5lnB3FN"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Presentación →
        </a>
      </div>

      {/* Fase 3 - Arquímedes y Galileo Galilei */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📖 Fase 3: Arquímedes y Galileo Galilei
        </h5>
        <p className="contenido-section__resource-description">
          En esta maravillosa y significativa presentación se habla de dos mentes brillantes, como Arquímedes de Siracusa, el cual fue matemático, físico e inventor que observaba la naturaleza con mucha curiosidad, el cual mientras se bañaba descubrió la flotación y gritó Eureka, enseñándonos su amor por el conocimiento, fue inventor de máquinas, también estudió las palancas y exploró el infinito, Arquímedes dejó huellas imborrables en matemática y física. Galileo Galilei fue un astrónomo, físico, matemático y filósofo el cual desafió creencias y observó el cielo con su telescopio, descubriendo así cráteres lunares y el movimiento de la tierra, en conclusión ambos genios enseñan que la pasión por entender lo imposible puede transformar nuestra forma de observar el universo.
        </p>
        <a
          href="https://prezi.com/view/lusSarYZJuZVpFTAykby/"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Presentación →
        </a>
      </div>

      {/* Fase 4 - René Descartes e Isaac Newton */}
      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📖 Fase 4: René Descartes e Isaac Newton
        </h5>
        <p className="contenido-section__resource-description">
          En esta maravillosa presentación hablamos de René Descartes e Isaac Newton quienes fueron dos mentes brillantes, los cuales transformaron la ciencia y las matemáticas. René Descartes, con su pasión por la razón, inventó el plano cartesiano, también unió el álgebra y la geometría, lo que creó un lenguaje capaz de descubrir la realidad. Isaac Newton, observó la caída de una manzana y el movimiento de los planetas, descubriendo así las leyes del movimiento y la gravitación universal, también desarrolló el cálculo infinitesimal que revolucionó las matemáticas. Ambos pensadores nos enseñan que la curiosidad y el método científico pueden desentrañar los secretos más profundos del universo y cambiar para siempre nuestra comprensión del mundo.
        </p>
        <a
          href="https://prezi.com/view/QXVBZTtDwjqABG2bRnfr/?referral_token=o4eLT5lnB3FN"
          target="_blank"
          rel="noopener noreferrer"
          className="contenido-section__link"
        >
          Ver Presentación →
        </a>
      </div>
    </div>
  );
};

export default ContenidoSection;