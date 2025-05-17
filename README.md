# React-Pizza
Пет-проект по react-typescript, показать скиллы.

### Используемые технологии и библиотеки: 
- React
- Typescript
- Scss
- normalize.css
- Snadcn
- Tailwind
- Vite
- Lucide React
- React-Hook-Form
- Zustand
- Redux

### Для запуска проекта
---
```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## React-Pizza version: 0.0.1
Пустой проект React с Vite.

## React-Pizza version: 0.1.0
Установлены и настроены все необходимые нужные библиотеки.

## React-Pizza version: 0.1.1
Исправлены проблемы связанные с tailwind
- Добавлен postcss.

## React-Pizza: 0.2.0
Добавлены базовын компоненты header, были добавлены: 
- Логотип
- Поиск
- Кнопка войти
- Кнопка корзина

## React-Pizza: 0.2.2
- Изменены стили shadcn-ui подходящий для проекта.
- Добавлен шрифт Nunito.
  
## React-Pizza: 0.2.5
- Добавлены категории без функциональности.
- Добавлен компонент сортировок без функциональности.
- Исправлены шрифты.
  
## React-Pizza: 0.4.0
- Добавлен и стилизован компенент фильтр
- Исправлены мелкие баги фильтра
- Исправлены стили категории меню и сортировки
  
## React-Pizza: 0.5.0
- Добавлен компонент Card
- Добавлен компонент Pagination
- Стилизованы компонент Card
  
## React-Pizza 0.5.3
- Пофиксил дизайн Card
- Пофиксил дизайн Pagination
- Тестовая функциональность в Pagination

## React-Pizza 0.5.4
- Исправил логику pagination
  
## React-Pizza 0.5.5
- Исправил логику pagination
  
## React-Pizza 0.6.0
- Завершил Pagination
  
## React-Pizza 0.6.1
- Добавил функциональность в category

## React-Pizza 0.7.0
-  Завершил Категорию
-  Завершил и доделал Сортировку
-  Исправлена стиль карт-тело
  
## React-Pizza 0.8.0
-  Завершил Фильтр
-  Исправлена стиль карт-тело
-  Добавил json-server
-  Добавил Zustand для филтра и категорий.
  
## React-Pizza 0.8.5
- Добавил Redux.
- Переписал price, category под redux.
- Поменял логику в price, теперь минимальное значение всегда будет меньше, а макс максимальное.
- Перекинул файл filter из components -> features.
- Сделал рефактор в filter.
- Появилась папка hooks
- Удалил файл CategoryProvider. Это React Context API. Дефолтный provider из react.
- Поменял файл category из components и основную логику написал в файле categoryBlock. Файлы из components только для переимпользования!

## React-Pizza 0.9.0
- Добавил "Корзина" в виде sidebar
- Теперь кнопка в пиццах сохраняет в sessionstorage
- После закрытия вкладки, список пиццы будут сохраняться(закрытия браузера в целом, очистит все сохранения).
- Исправил баги.