#  TP React - JSX, HOC, Render Props & Tests
#  Auteur : Jamila Dabachine
#  Projet : tp-jsx-hoc-tests
#  Année universitaire : 2025

titre: "TP React – JSX, HOC, Render Props et Tests"
auteur: "Jamila Dabachine"
module: "Programmation Web / React JS"
objectif:
  - Comprendre ce qu’est JSX et comment il fonctionne.
  - Créer des composants réutilisables avec Higher-Order Components (HOC) et Render Props.
  - Écrire des tests unitaires et d’intégration avec Jest et Testing Library.

#  Étape 1 : Préparation du projet

etape_1:
  description: >
    Crée un projet React avec Create React App.
  commandes:
    - "npx create-react-app tp-jsx-hoc-tests"
    - "cd tp-jsx-hoc-tests"
    - "npm start"

#  Étape 2 : Explorer JSX et sa transformation
<img width="426" height="661" alt="image" src="https://github.com/user-attachments/assets/bf0aa671-3733-41ad-872a-2bc45de5b5e8" />

etape_2:
  fichier: "src/JSXDemo.js"
  code: |
    import React from 'react';

    function JSXDemo() {
      const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

      const elementJS = React.createElement(
        'h1',
        { className: 'titre' },
        'Bonjour JavaScript pur'
      );

      return (
        <div>
          {elementJSX}
          {elementJS}
        </div>
      );
    }

    export default JSXDemo;

  explication: >
    JSX est une syntaxe plus lisible pour écrire React.createElement().
    Babel traduit JSX en appels React.createElement().

#  Étape 3 : Afficher le composant JSX dans App.js
etape_3:
  fichier: "src/App.js"
  code: |
    import JSXDemo from './JSXDemo';

    function App() {
      return (
        <div>
          <h1>TP JSX et Composition</h1>
          <JSXDemo />
        </div>
      );
    }

    export default App;

  resultat: "Affiche deux titres : un en JSX et un en JavaScript pur."

#  Étape 4 : Bonnes pratiques JSX
etape_4:
  fichier: "src/JSXDemo.js"
  modification: |
    return (
      <div>
        {elementJSX}
        <label htmlFor="champ">Entrez votre nom :</label>
        <input id="champ" />
      </div>
    );
  conseils:
    - "Utiliser className au lieu de class"
    - "Utiliser htmlFor au lieu de for"

#  Étape 5 : Higher-Order Component (HOC)
etape_5:
  fichiers:
    - "src/withLogging.js"
    - "src/Button.js"
    - "src/ButtonWithLogging.js"
  code:
    withLogging.js: |
      function withLogging(WrappedComponent) {
        return function EnhancedComponent(props) {
          console.log('Props reçues :', props);
          return <WrappedComponent {...props} />;
        };
      }

      export default withLogging;

    Button.js: |
      function Button(props) {
        return <button>{props.label}</button>;
      }

      export default Button;

    ButtonWithLogging.js: |
      import withLogging from './withLogging';
      import Button from './Button';

      const ButtonWithLogging = withLogging(Button);
      export default ButtonWithLogging;

  explication: >
    Le HOC `withLogging` affiche les props reçues dans la console avant d’afficher le composant.

#  Étape 6 : Render Props
etape_6:
  fichiers:
    - "src/DataLoader.js"
  code:
    DataLoader.js: |
      function DataLoader({ render }) {
        const data = ['Alice]()
# capteur d'ecron de tp ;    
<img width="1755" height="1085" alt="image" src="https://github.com/user-attachments/assets/4359fda7-4b2a-4d44-a212-4928437b71b3" />

