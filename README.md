# intro_node-mysql36

module supplémentaire à installer 
- dotenv
- mysql2


Renseigner dans un fichier .env placer à la racine de votre projet, les données de connexion à votre base de données.
```t
DB_HOST="localhost"
DB_NAME="intro_36"
DB_USER="root"
DB_PWSD=""
```

*Ces données seront stockées avec toutes les autres variables d'environnement disponible sur l'objet `process.env`.*

Importer les variables d'environnement de ce fichier en effectuant l'import en premier dans le script principal de votre serveur. voir fichier `app.js`
```js
import "dotenv/config";
// ... import express etc... 
```

Dans un fichier de configuration (par exemple `database/config.js`) de cette BDD ; renseignez le code suivant :

```js
// import la version en promesse du module(client sql) "mysql2"
import mysql from "mysql2/promise";

// sur cette import, création d'un pool une zone de connexion contenant la configuration de connexion ou de comportement sur la BDD
// un chaînage est effectué afin d'avoir un retour de l'état de connexion à celle-ci

const pool = mysql
	.createPool({
		host: process.env.DB_HOST, // l'emplacement du serveur, ici en localhost
		database: process.env.DB_NAME, // le nom de la BDD
		user: process.env.DB_USER, // nom d'utilisateur
		password: process.env.DB_PSWD, // mot de passe aucun pour les windows, "root" pour les macs
        // port: 8889 // pour les macs renseigner le port regardez votre url phpmyadmin
	})
	.getConnection()
	.then((response) =>
		console.log(`Connected to database ${response.config.database}`)
	);

export default pool;
```