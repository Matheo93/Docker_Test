# Test Docker avec Node.js multi-versions

Ce projet démontre l'utilisation de Docker pour exécuter simultanément deux applications Node.js avec des versions différentes (Node.js 14 et Node.js 18).

## Structure du projet
```
projets-docker/
├── projet-node14/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── projet-node18/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Prérequis
- Docker Desktop installé sur votre machine
- Git installé sur votre machine

## Installation et test sans Docker

1. Clonez le repository :
```bash
git clone https://github.com/Matheo93/Docker_Test.git
cd Docker_Test
```

2. Essayez de lancer les applications sans Docker :
- Vous verrez que ça ne fonctionne pas car Node.js n'est pas installé avec les bonnes versions !

## Installation et test avec Docker

1. Avec Docker, c'est simple :
```bash
docker-compose up --build
```

2. Accédez aux applications :
- Application Node.js 14 : http://localhost:3000
- Application Node.js 18 : http://localhost:3001

## Ce que fait ce projet

- Démontre l'utilisation de Docker pour gérer différentes versions de Node.js
- Montre comment Docker simplifie la gestion des dépendances
- Illustre l'isolation des environnements

## Pourquoi utiliser Docker ?

- Pas besoin d'installer Node.js sur votre machine
- Pas de conflit de versions
- Environnement identique pour tous les développeurs
- Démarrage rapide et simple du projet

## Arrêter les conteneurs

Pour arrêter les applications :
```bash
docker-compose down
```
