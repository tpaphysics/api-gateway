## API Gateway com NestJS e Apache Kafka

<p align="center">
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="yarn" />

<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJs" />

<p align="center">
<img src="https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka" alt="Apache Kafka" />

<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma.io" />

<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />

<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Prisma" />

<img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Prisma" />
  
##  Descrição
API Gateway construída com framework [Nestjs](https://nestjs.com), [Apache Kafka](https://kafka.apache.org/), [Swagger](https://swagger.io/), [Docker Compose](https://docs.docker.com/compose/).

## Arquitetura

  <img src="./.assets/diagram.png" alt="Prisma" />

## Instalação API Gateway

```bash
# Instalação das dependências
$ yarn

# Iniciar containers com kafka e zookeeper
$ yarn kafka:up

# Remover containers
$ yarn kafka:down

```

## Swagger

```url
http://localhost:3000/docs
```

## **💥 Considerações**

Existem muitas vantagens na utilização do NestJs para criação de microserviços pelo fato dele ser simples de usar e também por respeitar os principios do <strong>SOLID</strong>. 

## **👨‍🚀 Autor**

<a href="https://github.com/tpaphysics">
<img alt="Thiago Pacheco" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46402647?v=4?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="100px"/>
  <br />
  <sub>
    <b>Thiago Pacheco de Andrade</b>
  </sub>
</a>
<br />
  
👋 Meus contatos!
  
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/ )](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com )](mailto:physics.posgrad.@gmail.com)
  
##  Licença
  
  
Veja o arquivo [MIT license](LICENSE ).
