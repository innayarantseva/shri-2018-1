# Умный дом.

Комплексный репозиторий для хранения домашек Школы разработки интерфейсов, связанных с проектом Умного дома.

#### Организация хранения заданий

Начиная с третьей домашки задания будут выполняться в отдельных ветках.

Задания:
* Адаптивная верстка
* Сенсорный ввод - ветка ``pointer``
* Node.js — ветка ``server``
* Мультимедиа - ветка ``multimedia``


#### Локальная установка и запуск

```bash
node -v
# v10.1.0
npm -v
# 5.6.0

git clone https://github.com/innayarantseva/shri-2018-2
cd shri-2018-2
npm i
npm run build
npm start
```

После запуска сервер станет доступен по адресу [http://localhost:9000](http://localhost:9000)

#### Дополнительно для просмотра камер

```bash
git clone https://github.com/mad-gooze/shri-2018-2-multimedia-homework.git
cd shri-2018-2-multimedia-homework
npm i
npm start
```

Страничка с камерами будет находиться здесь: [http://http://localhost:9000/camera.html](http://http://localhost:9000/camera.html)
