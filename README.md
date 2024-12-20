React Photo Mini App

1. Описание проекта:
Этот проект представляет собой простое приложение для отображения фотоальбомов с возможностью фильтрации по категориям и поиска по названию. Все данные загружаются из файла data.json.

2. Функционал.
  - Вывод коллекций фотографий:
Каждая коллекция содержит большое изображение и несколько миниатюр.
  - Фильтрация по категориям:
Список категорий отображается в верхней части приложения. По клику на категорию выводятся только соответствующие коллекции.
  - Поиск по названию:
Реализован поиск по названию коллекции. Поддерживается динамическая фильтрация по вводу текста.
  - Обработка данных:
Коллекции загружаются из файла data.json и отображаются с учетом выбранной категории и текста поиска.
  - Стилизация:
Приложение использует SCSS для стилизации интерфейса.

3. Технические детали.
  - React-хуки:
Используется useState для управления состоянием фильтра и коллекций, а также useEffect для первоначальной загрузки данных.
  - Файл данных (data.json):
Данные о коллекциях и категориях находятся в JSON-файле.
  - Функция фильтрации:
Коллекции фильтруются по выбранной категории и тексту поиска. Если нет совпадений, выводится сообщение: "Ничего не найдено".
  - Компонент Collection:
Отвечает за отображение одной коллекции. Большое изображение показывается сверху, а до трех миниатюр — снизу.

4. Используемые технологии:
  - React 18.2.0
  - SCSS для стилизации
  - Управление состоянием через useState и useEffect

5. Файловая структура.
src/
├── App.js              # Основной компонент приложения
├── Collection.jsx      # Компонент для отображения коллекции
├── data.json           # Данные о коллекциях и категориях
├── index.scss          # Общая стилизация приложения
├── index.js            # Точка входа в приложение

6. Скриншоты и структура интерфейса:
  - ![Снимок экрана 2024-12-16 в 19 59 41](https://github.com/user-attachments/assets/49e32fd7-3027-4b04-b4d3-e70ccde0e7f6)
  - ![Снимок экрана 2024-12-16 в 20 00 44](https://github.com/user-attachments/assets/1e8c4c67-e802-4899-b29b-1126ef4ca6c2)
  - ![Снимок экрана 2024-12-16 в 20 01 18](https://github.com/user-attachments/assets/96fc45cb-de54-407f-884a-48cc12b87d39)
  - ![Снимок экрана 2024-12-16 в 20 01 36](https://github.com/user-attachments/assets/843fcdbf-367f-4905-aaf6-4ace5703cffb)













