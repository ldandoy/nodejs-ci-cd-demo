# 🐳 Node.js CI/CD avec Docker

![CI](https://github.com/ldandoy/nodejs-ci-cd-demo/actions/workflows/ci.yml/badge.svg)
![Lint](https://github.com/ldandoy/odejs-ci-cd-demo/actions/workflows/lint.yml/badge.svg)

Ce projet est un exemple pédagogique pour apprendre l'intégration continue (CI) avec une application Node.js **entièrement contenue dans Docker**.

Aucune installation locale de Node.js n'est nécessaire ✅  
Seul **Docker** est requis.

---

## 📦 Contenu du projet

- Application Node.js simple (`app/index.js`)
- Un test basique (`test/app.test.js`)
- Dockerfile complet
- Pipeline GitHub Actions pour :
  - Builder l’image Docker
  - Exécuter les tests dans le conteneur

---

## ▶️ Lancer l’application (via Docker)

```bash
docker build -t node-ci-demo .
docker run -p 3000:3000 node-ci-demo